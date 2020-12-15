import React, {Component} from 'react';
class Post extends Component {
    render() {
        let {posts0,posts1,posts2,posts3,posts4,posts5,posts6,posts7,posts8,posts9}=this.props
        return (
            <div>
                {/*{console.log(post)}*/}
                <h2>id-{posts0.id}<br/>title-{posts0.title}<br/>body-{posts0.body}</h2>
                <h2>id-{posts1.id}<br/>title-{posts1.title}<br/>body-{posts1.body}</h2>
                <h2>id-{posts2.id}<br/>title-{posts2.title}<br/>body-{posts2.body}</h2>
                <h2>id-{posts3.id}<br/>title-{posts3.title}<br/>body-{posts3.body}</h2>
                <h2>id-{posts4.id}<br/>title-{posts4.title}<br/>body-{posts4.body}</h2>
                <h2>id-{posts5.id}<br/>title-{posts5.title}<br/>body-{posts5.body}</h2>
                <h2>id-{posts6.id}<br/>title-{posts6.title}<br/>body-{posts6.body}</h2>
            </div>
        );
    }
}

export default Post;