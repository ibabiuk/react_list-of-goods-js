import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [goods, setGoods] = useState(goodsFromServer);
  const [order, setOrder] = useState('default');

  const handleSortAlphabetically = () => {
    setGoods([...goods].sort((a, b) => a.localeCompare(b)));
    setOrder('alphabetical');
  };

  const handleSortByLength = () => {
    setGoods([...goods].sort((a, b) => a.length - b.length));
    setOrder('length');
  };

  const handleReset = () => {
    setGoods(goodsFromServer);
    setOrder('default');
  };

  const handleReverse = () => {
    setGoods([...goods].reverse());
    setOrder(prevOrder => {
      return prevOrder === 'reversed' ? 'default' : 'reversed';
    });
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${order === 'alphabetical' ? '' : 'is-light'}`}
          onClick={handleSortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${order === 'length' ? '' : 'is-light'}`}
          onClick={handleSortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${order === 'reversed' ? '' : 'is-light'}`}
          onClick={handleReverse}
        >
          Reverse
        </button>

        <button
          type="button"
          className="button is-danger is-light"
          onClick={handleReset}
          style={{ display: order === 'default' ? 'none' : 'inline-block' }}
        >
          Reset
        </button>
      </div>

      <ul>
        {goods.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
