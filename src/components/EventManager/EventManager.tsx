import { useCallback } from "react";
import { Wrapper } from "../Wrapper/Wrapper";
import { Controls } from "./components/Controls/Controls";
import { useEvents } from "./useEvents";
import { getNewEvent } from "./heplers";

import { useTimer } from "use-timer";
import { TIMER_INTERVAL } from "./constants";

export const EventManager = () => {
  const {
    events,
    handlers: { addEvent, clearEvents, markAllEventsRead, showEvents },
  } = useEvents();

  useTimer({
    autostart: true,
    initialTime: 0,
    interval: TIMER_INTERVAL,
    onTimeUpdate: (time) => {
      if (time === 0) {
        return;
      }
      addEvent(getNewEvent());
    },
  });

  const hasEvents = events.length > 0;

  const handleAddEvent = useCallback(
    (title: string) => {
      addEvent(getNewEvent(title, events.length));
    },
    [events.length]
  );

  return (
    <Wrapper>
      <Controls
        addEvent={handleAddEvent}
        clearEvents={clearEvents}
        markAllEventsRead={markAllEventsRead}
        showEvents={showEvents}
        hasEvents={hasEvents}
      />
    </Wrapper>
  );
};
