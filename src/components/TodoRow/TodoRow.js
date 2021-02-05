import React from "react";
import doneImage from "../../assets/images/done.png";
import progressImage from "../../assets/images/progress.png";
import { useHover } from "../../hooks/useHover";
import { db } from "../../config/firebase";

export default function TodoRow({ id, todo, inprogress }) {
  const [hoverRef, isHovered] = useHover();

  function toogleInProgress() {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  }
  function deleteTodo() {
    db.collection("todos").doc(id).delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
  }

  return (
    <div className="todo--row" >
      <p className="todo--item --hover">{todo}</p>
      <div className="todo--buttons">
        <div ref={hoverRef} className="todo--image" onClick={toogleInProgress}>
          {isHovered ? (
            <img
              src={inprogress ? doneImage : progressImage}
              alt="In progress"
            />
          ) : (
            <img
              src={inprogress ? progressImage : doneImage}
              alt="In progress"
            />
          )}
        </div>
        <button onClick={deleteTodo}>X</button>
      </div>
    </div>
  );
}
