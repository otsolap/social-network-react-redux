import React, {Component} from 'react';


class Logout extends Component {
    render(){
        return (
            <div className="herobanner">
                {
                    this.props.uid ?
                    <p>Sorry something went wrong</p>
                    :
                    <p>You have left the Lion's den. Hopefully we will see you again soon!</p> 
                }
            </div>
    )
}
}

export default Logout;