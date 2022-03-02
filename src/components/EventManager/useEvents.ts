import { useAppSelector } from "../../store/hooks";
import { useAppDispatch } from "../../store/hooks";
import {
  EventsSelector,
  ShowEventsSelector,
  UnreadEventsSelector,
} from "./EventManager.selectors";
import {
  addEvent,
  clearEvents,
  markAllEventsRead,
  showEvents,
} from "./reducer";
import { IEvent } from "./types";

export const useEvents = () => {
  const appDispatch = useAppDispatch();
  const events = useAppSelector(EventsSelector);
  const unreadEvents = useAppSelector(UnreadEventsSelector);
  const isEventsShown = useAppSelector(ShowEventsSelector);

  return {
    events,
    unreadEvents,
    isEventsShown,
    handlers: {
      addEvent: (newEvent: IEvent) => appDispatch(addEvent(newEvent)),
      clearEvents: () => appDispatch(clearEvents()),
      markAllEventsRead: () => appDispatch(markAllEventsRead()),
      showEvents: () => appDispatch(showEvents(!isEventsShown)),
    },
  };
};
