import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { getBookItems } from '../redux/books/booksSlice';

function BooksList() {
  const { books, isLoading, error } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookItems());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>Something went wrong</h1>
      </div>
    );
  }

  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.item_id}
          itemId={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
    </ul>
  );
}

export default BooksList;
