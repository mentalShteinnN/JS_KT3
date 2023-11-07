import { FC } from 'react';
import { raitingT } from '../../types/app';

export const Raiting: FC<raitingT> = ({ raiting }) => {
  let count: string[] = [];

  for (let i = 0; i < raiting; i++) {
    count.push('fa fa-star active');
  }

  for (let i = 0; i < 5 - raiting; i++) {
    count.push('fa fa-star');
  }

  return (
    <div>
      {count.map((e, ix) => (
        <span key={ix} className={e}></span>
      ))}
    </div>
  );
};
