import { TextField } from "@mui/material";
import styles from "./Controls.module.css";
import { Control } from "./Control";

export const Controls = () => {
  return (
    <div className={styles.root}>
      <TextField
        placeholder="Введите название события..."
        className={styles.control}
        size="small"
      />
      <Control className={styles.control}>
        Пометить все события прочитанными
      </Control>
      <Control className={styles.control}>Удалить все события</Control>
      <Control className={styles.control}>
        Скрыть/показать попап нотификаций (toggle btn)
      </Control>
      <Control className={styles.sendButton}>Отправить</Control>
    </div>
  );
};
