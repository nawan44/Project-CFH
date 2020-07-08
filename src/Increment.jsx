import React from 'react';

class Increment extends React.Component{
    render(){
        const {functionIncrement} = this.props
        return(
            <button onClick={functionIncrement}>Increment</button>
        )
    }
}

export default Increment;