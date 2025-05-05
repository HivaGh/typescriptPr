export default function Counter({todos}) {

  let todosNumber = todos.length;
  return (
    <p>
      <b> {todos.filter((todo)=> todo.isComplited).length} </b>/{todosNumber} todos completed
    </p>
  );
}
