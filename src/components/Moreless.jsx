const Moreless = (props) => {
  return (
    <div className="container">
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      {count}
      <button onClick={() => setCount((count) => count + 1)}>+</button>
    </div>
  );
};
export default Moreless;
