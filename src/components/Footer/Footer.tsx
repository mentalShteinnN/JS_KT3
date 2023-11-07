import { FC } from 'react';
import styles from './footer.module.css';

interface props {
  scrollRef: React.MutableRefObject<HTMLDivElement>;
}

export const Footer: FC<props> = ({ scrollRef }) => {
  return <div ref={scrollRef} className={styles.footer}></div>;
};
