import React from 'react';
import { JsxChild } from 'typescript';
import 'UI/Card/Card.styles.css';

export interface SubReddit {
  id: number;
  postTitle: string;
  ups: number;
  thumbnail: string;
  subRedditThread: string;
}

const Card = (thread: SubReddit[] | any): any | null | void => {
  return Object.values(thread.thread).map((sub: any, i: number) => {
    return (
      <div key={sub.i} className="card">
        <div className="description">
          <div className="name">{sub.postTitle}</div>
        </div>
        <div>{sub.ups}</div>

        {/* <div className="avatar">
            <img alt="avatar" src={thumbnail} />
          </div> */}
      </div>
    );
  });
};
export default Card;
