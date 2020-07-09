import React from 'react';

class Decrement extends React.Component{
    render(){
        const {functionDecrement} = this.props
        return (
            <button className="tombolnilai1" onClick={functionDecrement}>Decrement Nilai 1</button>
        )
    }

}
export default Decrement;