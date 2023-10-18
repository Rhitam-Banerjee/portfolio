import { useEffect, useState } from "react";

export default function useMousePosition() {
  const changeShapeCursorElements = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "span",
    "p",
    "li",
    "a",
    "img",
    "b",
  ];
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [changeShape, setChangeShape] = useState(false);
  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY, target } = event;
      const { localName } = target;
      setMousePosition({ x: clientX, y: clientY });
      changeShapeCursorElements.includes(localName)
        ? setChangeShape(true)
        : setChangeShape(false);
    };
    document.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  });

  return { mousePosition, changeShape };
}
