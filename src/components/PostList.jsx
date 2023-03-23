
import React from 'react';
import PostItem from './PostItem';


function PostList(props) {
    const {posts} = props;

    return(
        <div>
           {
            posts.map((post, index) => {
                return <PostItem  
                  title={post.title}
                  key={index}
                />
                    
            })
           }
        </div>
    );
}

export default PostList;