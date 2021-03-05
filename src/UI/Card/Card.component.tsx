import React from 'react';
import reddit from 'assets/reddit.svg';
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
        <div className="avatar">
          {sub.thumbnail ? <img alt="red" src={sub.thumbnail} /> : <img alt="blue" src={reddit} />}
        </div>
        <div className="description">
          <div className="name">{sub.postTitle}</div>
        </div>
        <div className="ups">up votes: {sub.ups}</div>
      </div>
    );
  });
};
export default Card;
