import styles from './CSSModule.module.css'
import styled, { css } from 'styled-components';
import classnames from 'classnames'
import React from "react"

const Box =styled.div`
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
`;

const Button =styled.button`
    
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    font-size: 1rem;
    font-weight: 600;

    &:hover{
        background: rgba(255, 255, 255, 0.9);
    }

    ${props => 
        props.inverted &&
        css`
        background: none;
        border: 2px soild white;
        color: white;
        
        &:hover{
            background: white;
            color: black;
        }
        `
    };

    & + button{
        margin-left: 1rem;
    }
`;

const CSSModule = () =>{

const myclass='hello';
    console.log(classnames('one','two'));
    console.log(classnames('one',{ two:false}));
    console.log(classnames('one',myclass,{myName:true}));

    return(
        <div className={` ${styles.wrapper} ${styles.inverted} `}>
            안녕하세요.저는<span className='something'>CSS Module!</span>
            <Box color='black'>
                <Button>안녕하세요</Button>
                <Button inverted={true}>테두리만</Button>
            </Box>
        </div>
    );
};

export default CSSModule;