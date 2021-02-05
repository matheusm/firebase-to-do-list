import React from "react";
import doneImage from "../../assets/images/done.png";
import progressImage from "../../assets/images/progress.png";
import { useHover } from "../../hooks/useHover";

export default function TodoRow({ todo, inprogress }) {
  const [hoverRef, isHovered] = useHover();

  return (
    <div ref={hoverRef} className="todo--row">
      {isHovered ? (
        <>
          <p className="todo--item --hover">{todo}</p>
          <div className="todo--image">
            <img
              src={inprogress ? doneImage : progressImage}
              alt="In progress"
            />
          </div>
        </>
      ) : (
        <>
          <p className="todo--item">{todo}</p>
          <div className="todo--image">
            <img
              src={inprogress ? progressImage : doneImage}
              alt="In progress"
            />
          </div>
        </>
      )}
    </div>
  );
}
