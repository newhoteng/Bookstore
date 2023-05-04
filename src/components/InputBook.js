function InputBook() {
  return (
    <>
      <p>ADD NEW BOOK</p>
      <form className="form-container">
        <input
          type="text"
          placeholder="Book title"
          className="input-text"
        />
        <input
          type="text"
          placeholder="Author"
          className="input-text"
        />
        <button type="submit" className="input-submit">ADD BOOK</button>
      </form>
      <span className="submit-warning" />
    </>
  );
}

export default InputBook;
