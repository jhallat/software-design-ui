import React from "react";
import styles from "./bordered-container.module.css";

interface Props {
  title?: string;
  style?: any;
}

export const BorderedContainer = ({
  style,
  title,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <div style={style}>
      <div className={styles.outerBorder}>
        <div className={styles.innerBorder}>
          {title ? <div className={styles.title}>{title}</div> : ""}
          {children}
        </div>
      </div>
    </div>
  );
};
