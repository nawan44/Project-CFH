import React from 'react';

class Divided extends React.Component{
    render(){
        const {functionDivided} = this.props
        return(
            <div>
                <button onClick={functionDivided}>:</button>
            </div>
        )
    }
}
export default Divided