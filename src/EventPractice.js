import { useState } from "react";

const EventPractice = () =>{

    const [form,setform]= useState({
        username:'',
        message:''
    })

    const {username, message} =form;
    
    const change = e =>{

        const nextform={
            ...form,
            [e.target.name]: e.target.value
       }

        console.log(nextform);

        setform(nextform);
    };

    const click = e =>{
        
        alert(username+':'+message);
       
        setform({
            username:'',
            message:''
       });

    };

    const keyPress = e =>{
        if(e.key==='Enter'){
            click();
        }
    };

    return(
        <div>
            <input
                type="text"
                name="username"
                placeholder="사용자 명"
                value={username}
                onChange={change}
                onKeyPress={keyPress}
            />

            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해보세요"
                value={message}
                onChange={change}
                onKeyPress={keyPress}
            />

            <button onClick={click}>확인</button>
        </div>
    )
};

export default EventPractice;