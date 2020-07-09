import React from 'react';

class Multiplied extends React.Component{
    render(){
        const {functionMultiplied} = this.props
        return(
            <div>
                <button onClick={functionMultiplied}>*</button>
            </div>
        )
    }
}
export default Multiplied