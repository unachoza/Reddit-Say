import React, { useState, useEffect } from 'react';
import CardList from 'UI/CardList/CardList.component';
import reddit from 'assets/reddit.svg';
import { REDDIT_URL } from 'constants/constants';
import Loading from 'UI/Loading/Loading.component';
import './App.css';

export interface SubReddit {
  // id: number;
  subRedditThread: string;
  postTitle: string;
  // author: string;
  ups: number;
}

export interface LoadingState {
  onLoading: boolean;
  onError: boolean;
  onSuccess: boolean;
}

const INITIALSTATE: LoadingState = { onLoading: false, onError: false, onSuccess: false };
const loadingStatus: { LoadingState: any } | any = {};

//SubRedditHash
export const cache: { [key: string]: SubReddit[] } = {};

const App = () => {
  const [subReddits, setSubReddits] = useState<SubReddit[]>([]);
  // Need to Change UseState
  const [loadingState, setLoadingState] = useState<LoadingState>(INITIALSTATE);

  useEffect(() => {
    const getData = async (cache: any) => {
      try {
        console.log('here');
        // handleLoadingStatus(loadingStatus.onLoading = true)
        let response = await fetch(REDDIT_URL);
        let data = (await response.json()) || [];
        addToSubRedditHashMap(shapeData(data), cache); //  useMemo
        setSubReddits(shapeData(cache));
        console.log('are they here', subReddits);
        // handleLoadingStatus(LoadingStatus.onLoaded = true)
        console.log(cache, 'here too ');
      } catch {
        // handleLoadingStatus(LoadingStatus.onError = true)
      }
    };
    getData(cache);
  }, []);

  //Make fetched data easier to work with
  const shapeData = (input: any) => {
    let shapedData = [];
    for (let el of input.data.children) {
      shapedData.push(normalizeData(el.data));
    }
    console.log(shapedData);
    return shapedData;
  };
  const normalizeData = (data: any) => ({
    id: data.subreddit_id,
    subRedditThread: data.subreddit,
    postTitle: data.title,
    // author: data.author,
    ups: data.ups,
  });

  const addToSubRedditHashMap = (data: any, cache: any): void /* will return organized data in form of hash */ => {
    for (let i = 0; i < data.length; i++) {
      let threadKey = data[i].subRedditThread;
      if (!cache[threadKey]) {
        cache[threadKey] = new Array(data[i]);
      } else {
        cache[threadKey].unshift(data[i]);
      }
    }
    setSubReddits(cache);
  };
  // have subredditSet need to loop over subredditArray and set, use each element in set as a filter to create array of each subReddit category from subredditArray

  return (
    <>
      <header className="border fixed-top">
        <img src={reddit} className="App-logo" alt="logo" style={{ height: '40px' }} />{' '}
      </header>

      <main className="border">
        <div className="title">Popular SubReddits </div>
        {loadingState.onLoading ? <Loading /> : ''}
        {loadingState.onError ? <h1>Oops There was an error! Try again :)</h1> : ''}
        <div className="border">
          <CardList subReddits={subReddits} />
        </div>
      </main>
    </>
  );
};

export default App;

/// each fetch is 25  RANDOM entries
/// infinit scroll to do another fetch
/// add new fetch to subRedditsArray and make a new set from this longer new array
//proceed

//extract just thread title and push into new Set
// const filterSubReddits = (subReddits: SubReddit[]) => {
//   subReddits.forEach((sub) => subredditArray.push(sub.data.subreddit));
//   let subredditSet: any[] = [...new Set(subredditArray)];
//   return { subredditSet, subredditArray };
// };

// const makeCategories = (subredditSet: any[], subredditArray: any[]) => {
//   // @ts-ignore
//   console.log('in her', subredditSet.subredditSet);
//   // @ts-ignore
//   let arr = subredditSet.subredditArray;
//   // @ts-ignore
//   for (let i = 0; i < subredditSet.subredditSet.length; i++) {
//     let subRedditTitle = subredditSet[i];
//     // @ts-ignore
//     subRedditTitle = arr.filter((sub) => sub.subreddit === subredditSet[i]);
//     console.log(subRedditTitle);
//   }
// };

//create hashmap from looping through shappedData (subReddits)
// keys are subreditThread title
// values are subReddit object
// if collisions values becomes an array of objects
// might need to use set somewhere, not sure
// need to take into account what will rerender if I fetch more data
/********Need to Fix Double Loop **************** */

// switch statement to handle fetching state : loading, error, sucess
// const handleLoadingStatus = (status: { statusKey: boolean }): void => {
//   switch{
//     case: loadingStatus.onLoading = true
//       return { ...LoadingState, onError: false, onSuccess: false },
//     case: loadingStatus.onError = true,
//       return { ...LoadingState, onLoading: false, onSuccess: false },
//     case: loadingStatus.onSuccess = true,
//       return { ...LoadingState, onError: false, onLoading: false },
//     default:
//       return null
//   }
// }
