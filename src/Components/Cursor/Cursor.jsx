// import { useContext, useEffect } from "react";
import useMousePosition from "./useMousePosition";
// import { MouseContext } from "./mouseContext";

const Cursor = () => {
  // const { cursorType, cursorTypeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition().mousePosition;
  const changeShape = useMousePosition().changeShape;
  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={`fixed top-0 left-0 w-5 h-5 border-[2px] translate-x-[-50%] translate-y-[-50%] pointer-events-none z-[99] border-secondary rounded-full ${
          changeShape ? "!w-10 !h-10 !border-primary" : ""
        }`}
      ></div>
    </>
  );
};

export default Cursor;
