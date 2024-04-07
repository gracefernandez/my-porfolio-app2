import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import colorbg from '../assets/img/color-sharp.png';



 const Register = () => {
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
            <Card.Img className="box-bg2" src= {colorbg} alt="Card image" />
           <Card.ImgOverlay>
         <div className='login-box2'>
            <h2> REGISTER</h2>
            <h1> Portfolio App </h1>
            <form onSubmit={handleSubmit}>
                <div className='l-form'>
                <label>
                    {/* Username: */}
                    <input type="text" placeholder='Email' value={username} onChange={handleUsernameChange} />
                </label>
                <br />
                <label>
                    <input type="password" placeholder='Password' value={password} onChange={handlePasswordChange}  />
                </label>
                <br />
                <label>
                    <input type="password" placeholder='Confirm Password' value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <button type="submit" onClick={()=> console.log("test login ")}>Login</button>
                <p> Already have an account ? <a href="login"><b style={{color:"white"}}> LOGIN HERE</b></a>  </p>
                </div> 
            </form>
          </div>

        </Card.ImgOverlay>
      </Card>   
    </div>
    );
};

export default Register;

