import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import { v4 as uuidv4 } from "uuid";

function InputBook() {
  const [payload, setPayload] = useState({
    item_id: uuidv4(),
    title: '',
    author: '',
    category: 'Undefined'
  });
  // const [state, setState] = useState({
  //   fname: "",
  //   lname: ""
  // });

  // item_id: 'item1',
  // title: 'The Great Gatsby',
  // author: 'John Smith',
  // category: 'Fiction',
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <>
      <p>ADD NEW BOOK</p>
      <form className="form-container" onSubmit={() => dispatch(addBook())}>
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

// const form = document.querySelector('#form');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const description = document.querySelector('#description').value;
//   const index = taskStorage.length + 1;
//   if (description === '') {
//     return;
//   }
//   const task = new Task(description, index);
//   addTaskToStorage(task, taskStorage);
//   addTaskToDOM(task, ul);
//   // clear input field
//   form.reset();
// });
