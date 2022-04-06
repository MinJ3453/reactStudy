import { useState, useEffect } from 'react';

const Info = () =>{
    const [name, setName] = useState('');
    const [nickname ,setNickName] = useState('');

    useEffect (() => {
        //console.log('렌더링 완료됬습니다');
        //console.log({
            //name, nickname
        //});
        console.log('effect');
        return () =>{
            console.log('cleanup');
            console.log(name);
        };
    }, [name]);

    const onChangeName = e =>{
        setName(e.target.value);
    };

    const onChangeNickName = e =>{
        setNickName(e.target.value);
    };

    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickName}/>
            </div>
            <div>
                <b>이름:</b>{name}
                <b>닉네임:</b>{nickname}
            </div>
        </div>
    );
};

export default Info;