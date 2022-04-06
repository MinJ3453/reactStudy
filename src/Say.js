import { useState } from "react";

const Say = () =>{
    const [mess,setM] =useState('');
    const onClickEnter = () => setM('안녕하세요');
    const onClickLeave = () => setM('꺼져');

    const [color, setColor] = useState('black');

    return(
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{mess}</h1>

            <button style={{color:'red'}} onClick={()=> setColor('red')}>빨강</button>
            <button style={{color:'green'}} onClick={()=> setColor('green')}>초록</button>
            <button style={{color:'blue'}} onClick={()=> setColor('blue')}>파랑</button>
        </div>
    );
};

export default Say;