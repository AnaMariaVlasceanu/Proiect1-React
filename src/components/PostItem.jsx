import React from 'react';


function PostItem(props) {

    const {title} = props;

    return(
        <div>
           
            <p>{ title }</p>
           
        </div>
    );
}


export default PostItem;