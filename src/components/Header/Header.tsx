import { FC } from 'react';
import styles from './header.module.css';

interface props {
  scrollFN: () => void;
}

export const Header: FC<props> = ({ scrollFN }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header_text}>Online store of Chinese goods «Gray bird»</h1>
      <button onClick={() => scrollFN()} className={styles.btn}>
        Scroll down
      </button>
    </header>
  );
};
