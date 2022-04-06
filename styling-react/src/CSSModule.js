import styles from './CSSModule.module.css'
import classnames from 'classnames'

const CSSModule = () =>{

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

export default CSSModule;