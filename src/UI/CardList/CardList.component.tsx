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
          var byUps = entries.slice(0);
          byUps.sort(function (a: any, b: any) {
            return a.upVotes - b.upVotes;
          });
          console.log('by ups:');
          console.log(byUps);
          return (
            <div key={k}>
              <h1>{val[0]}</h1>
              <div>
                {Object.values(byUps).map((thread: any, i: number) => {
                  return (
                    <div key={i}>
                      This {thread.subRedditThread} thread has <span>{thread.upVotes} ups</span>
                    </div>
                  );
                })}
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
