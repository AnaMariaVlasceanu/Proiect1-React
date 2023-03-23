import React from 'react';


function UserAddForm(props) {
    console.log(props);

    const { inputname, inputemail} = props;

return (
    <div>
        

   <p>{ inputname }</p>
   <p>{ inputemail }</p>

   
  
   
    </div>
);
}

export default UserAddForm;