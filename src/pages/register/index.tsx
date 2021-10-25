import React, { FC} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/big-logo.svg';

const Register: FC = () => {
    return (
        <div className="auth-page register-page">
            <div className="content fade-in">
                <div className="title">
                    <span className="white">To get started, </span>
                    <span className="blue">Sign up</span>
                </div>
                <div className="auth-card">
                    <form>
                        <div className="inputs">
                            <input type="text" placeholder="Username" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password"  />
                            <input type="password" placeholder="Confirm password"  />
                        </div>
                        <div className="check-group">
                            <div className="check">
                                <label className="check-container">
                                    <input type="checkbox" id="remember" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <label className="label" htmlFor="remember">I have read and agree to Infinity Supply’s 
                                <Link to="/login" className="auth-link">Terms of Service</Link>
                            </label>
                        </div>
                        <div className="w-100 d-flex">
                            <button type="submit" className="mx-auto">Sign up</button>
                        </div>
                    </form>
                </div>
                <div className="w-100 d-flex">
                    <img src={Logo} alt="logo" className="mx-auto logo" />
                </div>
            </div>
            
        </div>
    )
}

export default Register;
