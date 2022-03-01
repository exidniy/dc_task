import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ru";

dayjs.extend(relativeTime);
dayjs.locale("ru");

export const getTimeFrom = (date: Date) => {
  return dayjs(date).fromNow();
};
