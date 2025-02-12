export default function button({ count, setCount }) {
  return (
    <>
      <button
        className="sizes"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          } else return 0;
        }}
      >
        -
      </button>
      <button onClick={() => setCount(count + 1)} className="sizes">
        +
      </button>
    </>
  );
}
