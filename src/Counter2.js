import { useReducer } from 'react';

function render(state, action){
    switch (action.type){
        case 'INCREMENT':
         return { value: state.value +1 };
        case 'DECRMENT':
         return { value: state.value -1 };
        default:

        return state;
    }
}

const Counter2 =() =>{
    const [state, disPatch]= useReducer(render, {value:0});

    return(
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>
            </p>
            <button onClick={()=> disPatch({ type: 'INCREMENT'})}>+1</button>
            <button onClick={()=> disPatch({ type: 'DECRMENT'})}>-1</button>
        </div>
    );
};

export default Counter2;