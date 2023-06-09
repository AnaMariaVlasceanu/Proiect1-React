
import React from 'react';


function UserItem(props) {

    const {name, email, isGoldClient} = props;

    return(
        <div>
           
            <h2>{ name }</h2>
            <p>{ email }</p>
            {
                isGoldClient
                   ? <p>CLIENT GOLD</p>
                   : null
            }
        </div>
    );
}


export default UserItem;