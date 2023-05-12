import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook, removeBook } from '../redux/books/booksSlice';
import styles from '../styles/HomePage.module.css';

function BookItem({
  itemId, title, author, category,
}) {
  const dispatch = useDispatch();
  return (
    <li className={styles.bookcard}>
      <div className={styles.bookDetails}>
        <p>{category}</p>
        <p>{title}</p>
        <p>{author}</p>
        <button type="button">Comments</button>
        <button
          className={styles.remove}
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
      <div className={styles.progress}>
        <div className={styles.percentage}>
          <div className={styles.percentring} />
          <div className={styles.text}>
            <p>64%</p>
            <p>Completed</p>
          </div>
        </div>
        <div className={styles.chapter}>
          <p>CURRENT CHAPTER</p>
          <p>Chapter 17</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
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
