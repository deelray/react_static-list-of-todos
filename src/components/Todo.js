import React from 'react';
import { UserTypes } from '../types';
import User from './User';
import './Todo.scss';

function Todo({ task }) {
  return (
    <div className="user">
      <p style={{
        fontWeight: 'bold',
        fontSize: '18px',
      }}
      >
        <User user={task.user} />
      </p>
      <p><em>{`Task: ${task.title}`}</em></p>
      <p>
        {`Status: ${task.completed ? 'Completed ✅' : 'Uncompleted ❌'}`}
      </p>
    </div>
  );
}

Todo.propTypes = UserTypes.isRequired;

export default Todo;