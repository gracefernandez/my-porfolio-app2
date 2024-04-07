import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import colorbg from '../assets/img/color-sharp.png';



 const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
     <div className='login'>
         <Card className="bg-dark text-white">
            <Card.Img className="box-bg" src= {colorbg} alt="Card image" />
         <div className='login-box'>
              <h2> LOGIN </h2> <h1> Portfolio App </h1>
         

            <form onSubmit={handleSubmit}>
                <div className='l-form'>
                <label>
                    <input type="text" value={username} onChange={handleUsernameChange} placeholder='Email' color='black' />
                </label>
                <br />
                <label>
                    <input type="password" value={password} onChange={handlePasswordChange} placeholder='Password' />
                </label>
                <br />
                <button type="submit" onClick={()=> console.log("test login ")}>Login</button>
                <p> Don't have an account ? <a href="register"><b style={{color:"white"}}> REGISTER HERE</b></a>  </p>
                </div> 
            </form>
          </div>

      </Card>   
    </div>
    );
};

export default Login;

