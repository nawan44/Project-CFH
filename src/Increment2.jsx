import React from 'react';

class Increment2 extends React.Component{
    render(){
        const {functionIncrement2} = this.props
        return(
            <button className="tombolnilai1" onClick={functionIncrement2}>Increment Nilai 2</button>
        )
    }
}
export default Increment2