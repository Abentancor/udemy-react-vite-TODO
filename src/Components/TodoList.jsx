
import { Draggable, Droppable } from '@hello-pangea/dnd'
import TodoItem from './TodoItem'

const TodoList = ({todos, removeTodo, updateTodo}) => {
  return (
    <Droppable droppableId='todos'>
      {
        (droppableProvider) =>(
          <div 
           ref={droppableProvider.innerRef}
           {...droppableProvider.droppableProps}
           className='bg-white dark:bg-slate-800 rounded-lg  overflow-hidden transition-all duration-1000'>
              {todos.map((todo, index) =>(
                <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                  {
                    (droppableProvider)=>( 
                    <TodoItem  
                     todo={todo} 
                     removeTodo={removeTodo}
                     updateTodo={updateTodo}
                     ref={droppableProvider.innerRef}
                     {...droppableProvider.dragHandleProps}
                     {...droppableProvider.draggableProps}
                    />)
                  }
                 
                </Draggable>)
              )}

          {droppableProvider.placeholder}    
          </div>
        )
      }

   

    </Droppable>
  )
}

export default TodoList