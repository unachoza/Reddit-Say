import React from 'react';
import Card from 'UI/Card/Card.component';
import { SubReddit, LoadingState } from 'App';
import 'UI/CardList/CardList.styles.css';
import Loading from 'UI/Loading/Loading.component';

// type subReddits = SubReddits[];
// type loadingState = LoadingState;

const CardList = (subReddits: SubReddit[] | any) => {
  subReddits = subReddits.subReddits;
  return (
    <>
      {subReddits.length > 0 ? (
        <ul className="cardList-container">
          {subReddits.map((sub: SubReddit) => {
            return (
              <li key={sub.id}>
                <Card {...sub} />
              </li>
            );
          })}
        </ul>
      ) : (
        ''
      )}
    </>
  );
};
export default CardList;
