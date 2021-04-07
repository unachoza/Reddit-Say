import React from 'react';
import { SubReddit } from 'App';
import Card from 'UI/Card/Card.component';
// import SubReddit from 'App';
import 'UI/CardList/CardList.styles.css';

// type subReddits = SubReddits[];
// SubReddit[] |
const CardList = (subReddits: any) => {
  subReddits = subReddits.subReddits;

  return (
    <>
      <ul className="cardList-container">
        {/* loop through object keys. For every key, map over the array */}
        {Object.entries(subReddits).map((val, k) => {
          let entries: any = val[1];
          entries.map((entry: any, i: number) => <h4 key={i}>{entry}</h4>);
          let byUps = entries.slice(0);
          byUps.sort((a: any, b: any) => b.ups - a.ups);
          return (
            <div key={k}>
              <h2>{val[0]}</h2>
              <div>
                <Card thread={byUps} />
              </div>
            </div>
          );
        })}
      </ul>
    </>
  );
};
export default CardList;
