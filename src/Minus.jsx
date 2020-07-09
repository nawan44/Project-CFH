import React from 'react';

class Minus extends React.Component{
    render (){
        const{functionMinus} = this.props
        return(
            <div>
                <button onClick={functionMinus}>-</button>
            </div>
        )
    }
}
export default Minus