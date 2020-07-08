import React from 'react';

class Plus extends React.Component{
    render(){
        const {functionPlus, hasil} =this.props
        return(
            <div>
            <h5>Hasil Penjumlahan = {hasil}</h5>
            <button onClick={functionPlus}>Plus</button>
            </div>
        )
    }
}
export default Plus;