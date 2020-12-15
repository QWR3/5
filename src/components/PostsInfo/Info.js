import React, {Component} from 'react';
class Info extends Component {
    render() {
        let {info}=this.props
        return (
            <div>
            <h2>{info.name}-{info.username}-{info.email}</h2>
                {/*{console.log(info)}*/}
            </div>
        );
    }
}

export default Info;