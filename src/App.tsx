import React, { useState, useEffect } from 'react';
import CardList from 'UI/CardList/CardList.component';
import reddit from 'assets/reddit.svg';
import { REDDIT_URL } from 'constants/constants';
// import CardList from 'UI/CardList/CardList.component'
// import Loading from 'UI/Loading/Loading.compCardList.component';
import './App.css';

export interface SubReddit {
  id: number;
  title: string;
  upVotes: number;
  data: string;
  img: string;
  link: string;
  children: string;
}

export type LoadingState = boolean;

const cache: { [key: string]: SubReddit[] } = {};

const App = () => {
  const [subReddits, setSubReddits] = useState<SubReddit[]>([]);
  // const [loadingState, setLoadingState] = useState<LoadingState>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        // setLoadingState(true);
        if (cache[REDDIT_URL]) {
          let data = cache[REDDIT_URL];
          setSubReddits(shapeData(data));
        } else {
          let response = await fetch(REDDIT_URL);
          let data = (await response.json()) || [];
          cache[REDDIT_URL] = data;
          console.log('here');
          console.log(shapeData(data), 'product of shape');
          setSubReddits(shapeData(data));
        }
        // setLoadingState(false);
      } catch {
        // setLoadingState(false);
      }
    };
    getData();
  }, []);

  const shapeData = (input: any) => {
    return (input = input.data.children);
  };

  return (
    <>
      <header className=" fixed-top">
        <img src={reddit} className="App-logo" alt="logo" style={{ height: '40px' }} />{' '}
      </header>
      <main>
        <div className="title">Popular SubReddits </div>
        <CardList subReddits={subReddits} />
      </main>
    </>
  );
};

export default App;
