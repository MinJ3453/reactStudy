import { useRef, useCallback, useReducer } from 'react';
import TodoTemplate from'./components/TodoTemplate';
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList';

function createBulkTodos(){
  const array =[];
  for(let i =1; i <=25; i++){
    array.push({
      id:i ,
      text: `할 일 ${i}` ,
      checked: false
    });
  }
    return array;
}

function todoReducer(todos, action){
  console.log(todos);
  console.log(action);
  
  switch (action.type) {
    case 'INSERT': // 새로 추가 id, text, checked
     return todos.concat(action.todo);
    case 'REMOVE': // 제거 type, id
     return todos.filter(todos => todos.id !== action.id);
    case 'TOGGLE': // 토글
     return  todos.map(todo =>
        todo.id === action.id? { ...todo, checked: !todo.checked } : todo,  
      );
    default:
      return todos;
  }
}

const App = () =>{
  //const [todos, setTodos] = useState(createBulkTodos);
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(25); //4번 키부터 시작

  const onInsert = useCallback(text => {
      const todo ={
        id: nextId.current,
        text,
        checked: false,
      };
      //setTodos(todos.concat(todo));
      //setTodos(todos => todos.concat(todo));
      dispatch({type:'INSERT', todo});
      nextId.current += 1;
    }, [],);

  const onRemove = useCallback(id => {
      //setTodos(todos => todos.filter(todo => todo.id !== id));
      dispatch({type:'REMOVE', id});
    },[],);

  const onToggle = useCallback(id => {
      
      dispatch({type:'TOGGLE', id});
      //setTodos(todos =>
        //todos.map(todo =>
        //todo.id === id? { ...todo, checked: !todo.checked } : todo, 
        //),
      //);
    },[],);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
 
};

export default App;
