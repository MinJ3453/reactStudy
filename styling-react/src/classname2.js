import classnames from 'classnames'
import styles from './CSSModule.module.css'

const classname2 = () =>{
    
    const myclass='hello';
    console.log(classnames('one','two'));
    console.log(classnames('one',{ two:false}));
    console.log(classnames('one',myclass,{myName:true}));
    
    return(
    <div className={` ${styles.wrapper} ${styles.inverted} `}>
        안녕하세요.저는<span className='something'>CSS Module!</span>
    </div>
    );
};

export default classname2;
