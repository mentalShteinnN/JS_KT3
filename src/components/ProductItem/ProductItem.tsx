import { FC } from 'react';
import { cardProductT } from '../../types/app';
import styles from './prodictItem.module.css';
import { Raiting } from '../Raiting/Raiting';

export const ProductItem: FC<cardProductT> = ({ product, deleteFN }) => {
  const { title, price, thumbnail, rating, id } = product;

  return (
    <div
      onDoubleClick={() => {
        console.log(id);
        deleteFN(id);
      }}
      className={styles.container}
    >
      <img className={styles.img} src={thumbnail} alt="" />
      <h2 className={styles.cardHeader}>Title: {title}</h2>
      <p className={styles.price}>Price: {price}$</p>
      <Raiting raiting={Math.round(rating)} />
    </div>
  );
};
