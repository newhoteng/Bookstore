import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

function BooksList() {
  const books = useSelector((store) => store.books);

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
