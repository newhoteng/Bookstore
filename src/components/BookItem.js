import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook, removeBook } from '../redux/books/booksSlice';
import styles from '../styles/BookItem.module.css';

function BookItem({
  itemId, title, author, category,
}) {
  const dispatch = useDispatch();
  return (
    <li className={styles.bookcard}>
      <div className="book-details">
        <p>{category}</p>
        <p>{title}</p>
        <p>{author}</p>
        <button type="button">Comments</button>
        <button
          type="button"
          onClick={() => {
            dispatch(deleteBook(itemId));
            dispatch(removeBook(itemId));
          }}
        >
          Remove
        </button>
        <button type="button">Edit</button>
      </div>
      <div>
        <div className="Percentage-circle" />
        <div>
          <p>64%</p>
          <p>Completed</p>
        </div>
      </div>
      <div className={styles.percentring}>
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
}

BookItem.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookItem;
