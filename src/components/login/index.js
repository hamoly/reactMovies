import React from 'react';
import Logo from '../logo'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
const Login = (props) => {
    const {handleLogIn, handleSignUp} = props
    return (
		<div className="d-flex justify-content-center h-100 mt-200">
			<div className="user_card">
				<div className="d-flex justify-content-center">
					<div className="brand_logo_container mt-5 bg-dark">
						<Logo className="loginLogo" alt="Logo" />
					</div>
				</div>
				<div className="d-flex justify-content-center form_container">
					<form>
						<div className="input-group mb-3">
							<div className="input-group-append">
                                <span className="input-group-text bg-danger">
                                    <FontAwesomeIcon icon={faUser} className="mr-2"/>
                                </span>
							</div>
                            <input type="email" name="email" className="form-control input_user"
                            placeholder="E-mail" id="email" required autoFocus/>
						</div>
						<div className="input-group mb-2">
							<div className="input-group-append">
                                <span className="input-group-text bg-danger">
                                    <FontAwesomeIcon icon={faKey} className="mr-2"/>
                                </span>
							</div>
                            <input type="password" name="email" className="form-control input_pass"
                            placeholder="Password" id="password" required/>
						</div>
						<div className="d-flex justify-content-center mt-3 login_container">
                            <Link to="/" display="movies" type="button" name="button" onClick={handleLogIn} className="btn btn-danger login_btn">
                            Login
                            </Link>
                            <Link to="/" display="movies" type="button" name="button" onClick={handleSignUp} className="btn btn-danger login_btn">
                            Sign-up
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
		</div>
    )
}
export default Login;