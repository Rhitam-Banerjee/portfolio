import useMousePosition from "./useMousePosition";
const Cursor = () => {
  const { x, y } = useMousePosition().mousePosition;
  const changeShape = useMousePosition().changeShape;
  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={`fixed top-0 left-0 w-7 h-7 border-[2px] border-primary_transparant rounded-full translate-x-[-50%] translate-y-[-50%] pointer-events-none z-[99] !transition-transform ${
          changeShape ? "scale-[2] !border-none bg-primary_transparant_max" : ""
        }`}
      ></div>
    </>
  );
};

export default Cursor;
