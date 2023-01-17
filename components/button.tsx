import React, { MouseEventHandler } from "react";
import styles from "./button.module.scss";

interface Props {
  onClick: (
    eventHandler: MouseEventHandler<HTMLButtonElement> | undefined
  ) => void;
}

export const Button = ({
  children,
  onClick,
}: React.PropsWithChildren<Props>) => {
  const handleClick = (
    event: MouseEventHandler<HTMLButtonElement> | undefined
  ) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button onClick={handleClick} className={styles.vintageButton}>
      {children}
    </button>
  );
};
