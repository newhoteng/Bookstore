const BooksList = (props) => {
  const { todosProps, handleChange, delTodo } = props;
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem />
      ))}
    </ul>
  );
};

export default BooksList;
