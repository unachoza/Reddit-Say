import React from 'react';
import 'UI/Card/Card.styles.css';

export interface SubReddit {
  id: number;
  title: string;
  ups: number;
  data: string | any;
  thumbnail: string;
  link: string;
}

const Card = (subReddits: SubReddit[] | any) => {
  console.log(subReddits.data);
  const { title, data, thumbnail, link, ups } = subReddits.data;
  console.log(ups, 'from card');
  return (
    <>
      <div className="card">
        <div className="avatar">
          <div>{ups}</div>
        </div>
        <div className="description">
          <div className="name">{title}</div>
          <div>{link}</div>
        </div>
        <div className="avatar">
          <img alt="avatar" src={thumbnail} />
        </div>
      </div>
    </>
  );
};
export default Card;
