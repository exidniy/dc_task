import { FC, ReactNode } from "react";
import styles from "./Wrapper.module.css";

export const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <section className={styles.root}>{children}</section>;
};
