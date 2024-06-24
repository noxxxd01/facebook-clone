import { useState } from 'react';
import axios from 'axios'
import './Home.css'

const Home = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/users/create', { email, password });
            console.log(response.data);
        } catch (error) {
            console.error(error);
            alert('Login failed');
        }
    };

  return (
    <div className="container flex">
      <div className="facebook-page flex">
        <div className="text">
          <h1>facebook</h1>
          <p>Connect with friends and the world </p>
          <p> around you on Facebook.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email or phone number" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <div className="link">
            <button type="submit" className="login">Login</button>
            <a href="#" className="forgot">Forgot password?</a>
          </div>
          <hr/>
          <div className="button">
            <a href="#">Create new account</a>
          </div> 
        </form>
      </div>
    </div>
  )
}

export default Home