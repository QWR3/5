import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
class User extends Component {
    render() {
        let {user ,choosenInfo,choosenPost}=this.props
        return (
            <Router>
                <div>
                    <h2>{user.id}-{user.name}</h2>
                    <button onClick={()=>choosenInfo(user.id)}>детально</button>

                    <button onClick={()=>choosenPost(user.id)}>пости</button>
                </div>
            </Router>
        );
    }
}

export default User;