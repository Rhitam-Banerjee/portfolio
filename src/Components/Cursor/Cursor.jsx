import { useContext } from "react";

const Cursor = () => {
  const { x, y } = useMousePosition();
  return <div>Cursor</div>;
};

export default Cursor;
