import { FC } from 'react';

export default function Board() {
  return (
    <>
      <div className="board-row">
        <button className="square"> 1 </button>
        <button className="square"> 2 </button>
        <button className="square"> 3 </button>
      </div>
      <div className="board-row">
        <button className="square"> 4 </button>
        <button className="square"> 5 </button>
        <button className="square"> 6 </button>
      </div>
      <div className="board-row">
        <button className="square"> 7 </button>
        <button className="square"> 8 </button>
        <button className="square"> 9 </button>
      </div>
    </>
  );
}

/*
export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};
*/
