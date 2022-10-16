import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  //add from 32:40 to 37:10 https://www.youtube.com/watch?v=FJDVKeh7RJI

  console.log(todo);  

  return(
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo}/>

    </div>
  );
}


export default App;
