export default function TimeForm() {
  handleSubmit = (e) => {
    e.preventDefault();
    parentCallback(e.target.value);
  };
  return (
    <div>
      <form onClick={handleSubmit}>
        <label htmlFor="">Wort Time</label>
        <input type="number" min="0" max="60" onChange={potatoMix} />
        <label htmlFor="">Break Time</label>
        <input type="number" min="0" max="60" />
        <button>Start</button>
      </form>
    </div>
  );
}
