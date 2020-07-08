import React from 'react';
import Increment from './Increment';
import Plus from './Plus';

class App extends React.Component{
    constructor(){
        super();
        this.state ={
            nilai1 : 1,
            nilai2 : 2,
            hasil :0
        }
    }

    functionIncrement= ()=> {
        
        this.setState({
            nilai1: parseInt(this.state.nilai1)+1
        })
    }
    functionPlus = () => {
        this.setState({
            hasil : parseInt( this.state.nilai1) +parseInt (this.state.nilai2)
        })
    }
    functionChange = name =>({target : {value}}) =>{
        this.setState({
            [name] : value
        })
    }
    render(){
        return(
            <div>
                Welcome to React
                <p>{this.state.nilai1}</p>
               
               <Increment functionIncrement={this.functionIncrement} /> 
               <p>{this.state.nilai2}</p>
               Nilai 1 : <input type="number" onChange={this.functionChange('nilai1')} /> <br />
               Nilai 2 : <input type="number" onChange={this.functionChange('nilai2')}/>

               <Plus functionPlus={this.functionPlus} hasil={this.state.hasil} />
            </div>
        )
    }
}
export default App;