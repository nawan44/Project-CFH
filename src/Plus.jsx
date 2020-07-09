import React from 'react';

class Plus extends React.Component{
    render(){
        const {functionPlus, hasil} =this.props
        return(
            <div>
            <h5>Hasil : {hasil}</h5>
            <button onClick={functionPlus}>+</button>
            </div>
        )
    }
}
export default Plus;