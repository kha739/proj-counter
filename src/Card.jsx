import { useState } from "react";
import Button from "./button";
import Count from "./Count";
import Reset from "./Reset";
import Title from "./title";

export default function Card() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="dell">
        <Title />
        <Count count={count} setCount={setCount} />
        <Reset  count={count} setCount={setCount} />
        <div></div>
        <Button count={count} setCount={setCount} />
      </div>
    </>
  );
}
