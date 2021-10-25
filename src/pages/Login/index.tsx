import React, { FC} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/big-logo.svg';
import Google from '../../assets/google.svg';
import Discord from '../../assets/discord.svg';
import './style.scss';
import { useHistory } from 'react-router-dom';

const Login: FC = () => {

    const history = useHistory();

    onsubmit = () => {
        history.push('/dashboard');
    }

    return (
        <div className="auth-page login-page">
            <div className="content fade-in">
                <div className="title">
                    <span className="white">Welcome, </span>
                    <span className="blue">Login to continue</span>
                </div>
                <div className="auth-card">
                    <form>
                        <div className="inputs">
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required  />
                        </div>
                        <div className="check-group">
                            <div className="check">
                                <label className="check-container">
                                    <input type="checkbox" id="remember" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <label className="label" htmlFor="remember">Remember me</label>
                        </div>
                        <div className="w-100 d-flex">
                            <button type="submit" className="mx-auto">Login</button>
                        </div>
                    </form>
                    <div className="login-with w-100 d-flex">
                        <span className="mx-auto">Login with</span>
                        <div className="buttons mx-auto">
                            <button> <img src={Google} alt="google" /> Google</button>
                            <button><img src={Discord} alt="discord" />Discord</button>
                        </div>
                    </div>
                    <div className="link-group">
                        <span>Dont have a account? </span>
                        <Link to="/register" className="auth-link">Sign up</Link>
                    </div>
                </div>
                <div className="w-100 d-flex">
                    <img src={Logo} alt="logo" className="mx-auto logo" />
                </div>
            </div>
            
        </div>
    )
}

export default Login;
