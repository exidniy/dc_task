export interface IEvent {
  title: string;
  time: string;
  isRead: boolean;
}

export interface EventsState {
  events: Array<IEvent>;
  showEvents: boolean;
}
