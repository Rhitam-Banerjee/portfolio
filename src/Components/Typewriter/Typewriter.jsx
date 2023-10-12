import { useTypeWriterEffect } from "./useTypeWriterEffect";
const Typewriter = () => {
  const text = useTypeWriterEffect("Developer", 300);
  return (
    <b className="relative w-max after:content-[''] after:absolute after:top-1/2 after:-right-[5px] after:w-1 after:h-full after:bg-tertiary after:animate-blink after:origin-center after:-translate-y-1/2">
      {text}
    </b>
  );
};

export default Typewriter;
