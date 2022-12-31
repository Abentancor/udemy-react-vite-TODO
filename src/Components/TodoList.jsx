
import TodoItem from './TodoItem'

const TodoList = ({todos, removeTodo, updateTodo}) => {
  return (
    <div className='bg-white rounded-lg '>

      {todos.map((todo) =>
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} />
      )}

    
    </div>
  )
}

export default TodoList