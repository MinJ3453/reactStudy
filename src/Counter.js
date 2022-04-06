import { Component } from 'react';


class Counter extends Component{

    constructor(props){
        super(props);

        this.state ={
            number: 0,
            Fnumber: 0
        };
    }

    render(){
        const {number, Fnumber} =this. state;
        return(
            <div>
            <h1> {number}</h1>
            <h2> {Fnumber}</h2>
            <button
                onClick={()=> {
                  this.setState(
                      {
                          number: number+1,
                          Fnumber: Fnumber+2
                      },
                      ()=> {
                          console.log('호출됨');
                          console.log(this.state);
                      }
                  )

                }}
            >
                +1AND+2
            </button>
            </div>
        );
    }
}


export default Counter;