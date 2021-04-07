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
  date: string;
}

const Card = (thread: SubReddit[] | any): any | null | void => {
  return Object.values(thread.thread).map((sub: any, i: number) => {
    let humanDate = sub.date.slice(0, sub.date.indexOf('GMT'));
    return (
      <div key={sub.i} className="card">
        <div className="avatar">
          {sub.thumbnail ? (
            <img alt="thumbnail" src={sub.thumbnail} />
          ) : (
            <img alt="no thumbnail available" src={reddit} />
          )}
        </div>
        <div className="description">
          <div className="name">{sub.postTitle}</div>
        </div>
        <div>{humanDate}</div>
        <div className="ups">up votes: {sub.ups}</div>
      </div>
    );
  });
};
export default Card;
