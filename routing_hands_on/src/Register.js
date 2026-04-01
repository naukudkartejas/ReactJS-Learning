import React from 'react';

//class component
class Register extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <label>User Name</label>
                    <input type="text" />
                    <br/>

                    <label>Email</label> 
                    <input type="text" />
                    <br/>

                    <label>Password</label>
                    <input type="text" />
                    <br/>

                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Register;
