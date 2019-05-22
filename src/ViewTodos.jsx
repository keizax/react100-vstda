import React from 'react';
import ListTodo from './ListTodo';

const ViewTodos = props => {
  return (
    <div className='col-md-8'>
      <div className='card'>
        <ul className='list-group'>
          View Todos
          {props.todoListItem.map(newTodo => {
            return (
              <ListTodo
                key={ newTodo.id }
                id={ newTodo.id }
                description={ newTodo.description }
                priority={ newTodo.priority }
                handleSave={ props.handleSave }
                handleDelete={ props.handleDelete }
                handleEditDisplay={ props.handleEditDisplay }
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default ViewTodos;
