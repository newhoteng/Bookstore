import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

function BooksList() {
  // const dispatch = useDispatch();
  const books = useSelector((store) => store.books);

  // item_id: 'item1',
  // title: 'The Great Gatsby',
  // author: 'John Smith',
  // category: 'Fiction',

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
