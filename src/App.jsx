import React from 'react';
import  './style.css';
import Increment from './Increment';
import Decrement from './Decrement';
import Increment2 from './Increment2';
import Decrement2 from './Decrement2';
import Plus from './Plus';
import Minus from './Minus';
import Multiplied from './Multiplied';
import Divided from './Divided';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Category from './Category/'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Covid from './Covid/'

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
    functionDecrement =() =>{
        this.setState({
            nilai1 : parseInt(this.state.nilai1) - 1
        })
    }
    functionIncrement2= () => {
        this.setState({
            nilai2 : parseInt(this.state.nilai2) + 1
        })
    }
    functionDecrement2 = () => {
        this.setState({
            nilai2 :parseInt(this.state.nilai2) - 1
        })
    }
    functionPlus = () => {
        this.setState({
            hasil : parseInt( this.state.nilai1) +parseInt (this.state.nilai2)
        })
    }
    functionMinus = () => {
        this.setState({
            hasil : parseInt(this.state.nilai1) - parseInt(this.state.nilai2)
        })
    }
    functionMultiplied = () => {
        this.setState({
            hasil : parseInt(this.state.nilai1) * parseInt(this.state.nilai2)
        })
    }
    functionDivided = () => {
        this.setState({
            hasil : parseInt(this.state.nilai1) / parseInt(this.state.nilai2)
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
                {/* <h1 className="title">Kalkultor React</h1>
                <div className="nilai">Nilai 1 : <br/>
                <p> {this.state.nilai1}</p></div>
               
               <Increment functionIncrement={this.functionIncrement} /> <br />
               <Decrement functionDecrement={this.functionDecrement} />

               <div className="nilai">Nilai 2 : <br/>
                <p>{this.state.nilai2}</p></div>
                <Increment2 functionIncrement2={this.functionIncrement2}/> <br/>
                <Decrement2 functionDecrement2={this.functionDecrement2} />
               Nilai 1 : <input  type="number" onChange={this.functionChange('nilai1')} /> <br />
               Nilai 2 : <input  type="number" onChange={this.functionChange('nilai2')}/>

               <Plus functionPlus={this.functionPlus} hasil={this.state.hasil} />
               <Minus functionMinus={this.functionMinus}  />
               <Multiplied functionMultiplied={this.functionMultiplied} />
               <Divided functionDivided={this.functionDivided} /> */}
            <BrowserRouter>
            <div class="wrapper">
                <Header/>
                <Sidebar/>
                <div class="content-wrapper"> 
                             <section class="content">
                                 <Switch>
                                     <Route exact path='/category' component={Category}></Route>
                                     <Route exact path='/datacovid' component={Covid}></Route>

                    <Category />
                    </Switch>
                    </section>
            </div>
            </div>
            </BrowserRouter>
            </div>
        )
    }
}
export default App;