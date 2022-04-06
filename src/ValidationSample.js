import { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component{

    state={
        password:'',
        clicked: false,
        vaildated: false
    }

    handleChange = (e) =>{
        this.setState({
            password: e.target.value
        });
    }

    handlebutton = () =>{
        this.setState({
            clicked:true,
            vaildated: this.state.password ==='1234'
        })

        this.input.focus();
    }

    handleFocus =() =>{
        this.input.current.focus();
    }
    
    render(){
        return(
            <div>
                <input
                ref={(ref)=>this.input=ref}
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked ? (this.state.vaildated ? 'success' : 'failure'): ''}
                />
                <button onClick={this.handlebutton}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;