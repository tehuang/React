const ErrorExample = () => {
  let count = 0;
  const handleClick = () => {
    count++;
    console.log(count);
  };
  return (
    <div>
      <h1>UseState Error Example</h1>
      <p>{count}</p>
      <button type="button" onClick={handleClick} className="btn">
        Increase
      </button>
    </div>
  );
};

export default ErrorExample;
