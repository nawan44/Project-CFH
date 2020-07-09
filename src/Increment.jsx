import React from 'react';

class Increment extends React.Component{
    render(){
        const {functionIncrement} = this.props
        return(
            <div>
                <button className="tombolnilai1" onClick={functionIncrement}>Increment Nilai 1</button>
            </div>
            
            )
    }
}

export default Increment;