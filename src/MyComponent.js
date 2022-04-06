import PropTypes from 'prop-types'
import { Component } from 'react';

// const MyComponent = ({name, children,FunNum}) =>{

//     return (
//         <div>안녕하세요 제 이름은 {name}입니다
//         안에 들어간 내용은 {children}입니다
//         숫자는 {FunNum}입니다
//         </div>
//     );
    
// };

class MyComponent extends Component{

    static defaultProps= {
        name:"기본이름"
    };

    static prototypes= {
        name: PropTypes.string,
        FunNum: PropTypes.number.isRequired
    };

    render(){
        const { name, FunNum, children} =this. props;
        return(
            <div>안녕하세요 제 이름은 {name}입니다
            안에 들어간 내용은 {children}입니다
            숫자는 {FunNum}입니다
            </div>
        );
    }
}



export default MyComponent;
