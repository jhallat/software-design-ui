import styles from "./layout.module.css";

export const Layout = ({ children }: any) => {
  return (
    <>
      <div className={styles.heading}>Software Design</div>
      <main>{children}</main>
    </>
  );
};
