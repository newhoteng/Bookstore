import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

function InputBook() {
  const [payload, setPayload] = useState({
    title: '',
    author: '',
    category: 'Undefined',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { item_id: uuidv4(), ...payload };
    dispatch(addBook(newBook));
    setPayload({
      title: '',
      author: '',
      ...payload,
    });
  };

  return (
    <>
      <p>ADD NEW BOOK</p>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          required
          placeholder="Book title"
          value={payload.title}
          onChange={handleChange}
        />
        <input
          name="author"
          type="text"
          required
          placeholder="Author"
          value={payload.author}
          onChange={handleChange}
        />
        <button type="submit">ADD BOOK</button>
      </form>
      <span className="submit-warning" />
    </>
  );
}

export default InputBook;
