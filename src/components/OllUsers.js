import React, {Component} from 'react';
import OllU from "./oll/OllU";
import User from "./users/User";
import Oll from "./oll/Oll";
import Post from "./PostsInfo/Post";
import Info from "./PostsInfo/Info";
class OllUsers extends Component {
    users =new OllU
    posts =new Oll
    state ={users:[] ,posts:[],choosenI:null , choosenP0:null, choosenP1:null, choosenP2:null, choosenP3:null, choosenP4:null, choosenP5:null, choosenP6:null, choosenP7:null, choosenP8:null, choosenP9:null}

    async componentDidMount() {
        let users = await this.users.users()
        let posts =await this.posts.posts()
        this.setState({users})
        this.setState({posts})
    }
    choosenInfo=(id)=>{
        let info =this.state.users
        let find =info.find(value => value.id ===id)
        this.setState({choosenI:find})
    }
    choosenPosts=(id)=>{
        if (this.state.posts){
            let posts =this.state.posts
            let find0 =posts.find(value => value.id ===id)
            this.setState({choosenP0:find0})

            let find1 =posts.find(value => value.id ===id+1)
            this.setState({choosenP1:find1})

            let find2 =posts.find(value => value.id ===id+2)
            this.setState({choosenP2:find2})

            let find3 =posts.find(value => value.id ===id+3)
            this.setState({choosenP3:find3})

            let find4 =posts.find(value => value.id ===id+4)
            this.setState({choosenP4:find4})

            let find5 =posts.find(value => value.id ===id+5)
            this.setState({choosenP5:find5})

            let find6 =posts.find(value => value.id ===id+6)
            this.setState({choosenP6:find6})

            let find7 =posts.find(value => value.id ===id+7)
            this.setState({choosenP7:find7})

            let find8 =posts.find(value => value.id ===id+8)
            this.setState({choosenP8:find8})

            let find9 =posts.find(value => value.id ===id+9)
            this.setState({choosenP9:find9})
        }
    }

    render() {
        let {users,choosenI,choosenP0 ,choosenP1,choosenP2,choosenP3,choosenP4,choosenP5,choosenP6,choosenP7,choosenP8,choosenP9} = this.state
        return (
            <div>
                {
                    users.map((value,index)=>
                        <User user={value} choosenInfo={this.choosenInfo} choosenPost={this.choosenPosts} key={index}/>
                    )
                }
                {
                    console.log(choosenP0)
                }
                {
                    choosenI&&<Info info={choosenI}/>
                }
                {
                    choosenP0&&<Post posts0={choosenP0} posts1={choosenP1}posts2={choosenP2}posts3={choosenP3}posts4={choosenP4}posts5={choosenP5}posts6={choosenP6}/>
                }
                <h1>users</h1>
            </div>
        );
    }

}

export default OllUsers;