import React from "react";
import doneImage from '../../assets/images/done.png'
import progressImage from '../../assets/images/progress.png'

export default function TodoRow({ todo, inprogress }) {
  console.log(inprogress);
  return (
    <div className="todo--row">
      <p>{todo}</p>
      <div className="todo--image"><img src={inprogress ? progressImage : doneImage} alt="In progress" /></div>
    </div>
  );
}
