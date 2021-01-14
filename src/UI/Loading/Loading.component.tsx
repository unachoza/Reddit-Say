import React from 'react';
import 'UI/Loading/Loading.styles.css';

const Loading = (): JSX.Element => {
  return <div className="load-spinner">{Array(10).fill(<div></div>)}</div>;
};

export default Loading;
