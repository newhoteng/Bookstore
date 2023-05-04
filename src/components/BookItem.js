// import { useState } from 'react';

const BookItem = () => {

  // const [editing, setEditing] = useState(false);
  
  return (
    <li>
      <div className='book-details'>
        <p>Action</p>
        <p>The Hunger Games</p>
        <p>Suzanne Collins</p>
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
      <div>
        <div className="Percentage-circle"></div>
        <div>
          <p>64%</p>
          <p>Completed</p>
        </div>
      </div>
      <div className='current-chapter'>
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

export default BookItem;