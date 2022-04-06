import { useReducer } from 'react';

function render(state, action){
    return{
       ...state,
       [action.name]: action.value
    };
}

const Info2 =() =>{
    const [state, disPatch]= useReducer(render, {name:'', nickName:''});
    const {name, nickName} =state;
    const onChange = e => {
        disPatch(e.target);
    };

    return(
        <div>
        <div>
            <input name="name" value={name} onChange={onChange}/>
            <input name="nickName" value={nickName} onChange={onChange}/>
        </div>
        <div>
            <b>이름:</b>{name}
            <b>닉네임:</b>{nickName}
        </div>
    </div>
    );
};

export default Info2;