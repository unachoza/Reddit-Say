import React from 'react';
import { SubReddit } from 'App';
// import Card from 'UI/Card/Card.component';
// import SubReddit from 'App';
import 'UI/CardList/CardList.styles.css';

// type subReddits = SubReddits[];
// SubReddit[] |
const CardList = (subReddits: any) => {
  console.log(subReddits.subReddits);
  subReddits = subReddits.subReddits;
  return (
    <>
      cardlist
      <ul className="cardList-container">
        {/* loop through object keys. For every key, map over the array */}
        {Object.entries(subReddits).map((val, k) => {
          let entries: any = val[1];
          entries.map((entry: any, i: number) => <h4 key={i}>{entry}</h4>);
          return (
            <div key={k}>
              <h1>{val[0]}</h1>
              <div>
                {Object.values(entries).map((thread: any, i: number) => (
                  <div key={i}>
                    {thread.subRedditThread} has votes<span>{thread.upVotes}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* {subReddits.map((sub: any, i: number) => {
            console.log(sub);
            return (
              <li key={sub.id}>
                <h2>{sub[i].subRedditThread}</h2>
                {hidden ? <button onClick={toggleHiddle}></button></li>><p>Show More</p></button>
                  :
                  (sub.map(thread) => {
                  <>
                    <span>{thread.upvotes}</span> 
                    <Card {...thread} />
                  </>
                  }))
                } */}
        {/* </li>
            );
          })} */}
      </ul>
    </>
  );
};
export default CardList;
