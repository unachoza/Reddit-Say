import React from 'react';
import 'UI/Card/Card.styles.css';

export interface SubReddit {
  id: number;
  title: string;
  ups: number;
  thumbnail: string;
  subreddit: string;
}

const Card = (subReddits: SubReddit[] | any) => {
  const { title, thumbnail, subreddit, ups } = subReddits.data;
  return (
    <>
      <h4 className="border">{subreddit}</h4>
      <div className="card">
        <div className="avatar">
          <div>{ups}</div>
        </div>
        <div className="description">
          <div className="name">{title}</div>
        </div>
        <div className="avatar">
          <img alt="avatar" src={thumbnail} />
        </div>
      </div>
    </>
  );
};
export default Card;
