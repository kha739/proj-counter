import { RxReset } from "react-icons/rx";
export default function Reset({ setCount }) {
  return (
    <>
      <RxReset id="md" onClick={() => setCount(0)}></RxReset>
    </>
  );
}
