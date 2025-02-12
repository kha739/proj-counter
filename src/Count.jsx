export default function Count({ count, setCount }) {
  return (
    <h1 onClick={() => setCount(count + 1)} className="size">
      {count}
    </h1>
  );
}
