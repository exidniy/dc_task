import { TextField } from "@mui/material";
import styles from "./Controls.module.css";
import { Control } from "./Control";
import { FC, useCallback, useState } from "react";
import { IControlsProps } from "./types";

export const Controls: FC<IControlsProps> = ({
  addEvent,
  clearEvents,
  markAllEventsRead,
  showEvents,
  hasEvents,
}) => {
  const [value, setValue] = useState<string>("");

  const handleSend = useCallback(() => {
    setValue("");
    addEvent(value);
  }, [value]);

  return (
    <div className={styles.root}>
      <TextField
        autoFocus
        placeholder="Введите название события..."
        className={styles.control}
        size="small"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <Control className={styles.control} onClick={markAllEventsRead}>
        Пометить все события прочитанными
      </Control>
      <Control className={styles.control} onClick={clearEvents}>
        Удалить все события
      </Control>
      <Control
        className={styles.control}
        onClick={showEvents}
        disabled={!hasEvents}
      >
        Скрыть/показать попап нотификаций (toggle btn)
      </Control>
      <Control className={styles.sendButton} onClick={handleSend}>
        Отправить
      </Control>
    </div>
  );
};
