import React from 'react'

class Decrement2 extends React.Component{
    render(){
        const {functionDecrement2} = this.props
        return(
            <div>
                <button onClick={functionDecrement2}>Decrement Nilai 2</button>
            </div>
        )
    }
}
export default Decrement2