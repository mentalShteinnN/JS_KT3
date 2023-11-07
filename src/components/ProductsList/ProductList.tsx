import ky from 'ky';
import { FC, useEffect, useState } from 'react';
import { productsT } from '../../types/app';
import { ProductItem } from '../ProductItem/ProductItem';
import styles from './productList.module.css';

export const ProductList: FC = () => {
  const [products, setProducts] = useState<productsT>();

  function deleteProduct(id: number) {
    const arrCopy = products?.products;
    if (arrCopy === undefined) return;
    const newArr = arrCopy.filter(e => e.id !== id);
    setProducts({ products: newArr });
  }

  useEffect(() => {
    async function get() {
      const data: productsT = await ky
        .get('https://dummyjson.com/products/', { headers: { 'content-type': 'application/json' } })
        .json();
      setProducts(data);
    }
    get();
  }, []);

  return (
    <div className={styles.container}>
      {products?.products.map(e => <ProductItem deleteFN={deleteProduct} key={e.id} product={e} />)}
    </div>
  );
};
