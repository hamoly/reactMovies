import React from 'react';
import Logo from '../../logo'
import Button from '../../button'
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

const Login = (props) => {
    const {setEmailState, setPasswordState, setStateUserForm, email, password, display, userStateMsg} = props
    const renderRedirect = () => {
        if(userStateMsg === 'You are logged in successfully') {
            return <Redirect to='/' display="movies" />
        }
    }
    return (
		<div className="d-flex justify-content-center h-100 mt-200">
			<div className="user_card">
				<div className="d-flex justify-content-center">
					<div className="brand_logo_container mt-5 bg-dark">
						<Logo className="loginLogo" alt="Logo" />
					</div>
				</div>
				<div className="d-flex justify-content-center form_container">
					<form onSubmit={e => e.preventDefault()}>
						<div className="input-group mb-3">
							<div className="input-group-append">
                                <span className="input-group-text bg-danger">
                                    <FontAwesomeIcon icon={faUser} className="mr-2"/>
                                </span>
							</div>
                            <input type="email" value={email} onChange={email => setEmailState(email)} name="email" className="form-control input_user"
                            placeholder="E-mail" id="email" autoComplete="current-email" required autoFocus/>
						</div>
						<div className="input-group mb-2">
							<div className="input-group-append">
                                <span className="input-group-text bg-danger">
                                    <FontAwesomeIcon icon={faKey} className="mr-2"/>
                                </span>
							</div>
                            <input type="password" value={password} onChange={(password) => setPasswordState(password)} name="password" className="form-control input_pass"
                            placeholder="Password" id="password" autoComplete="current-password" required/>
                        </div>
                        {(userStateMsg === 'You are logged out successfully')
                        ?
                        ''
                        :
                        <div className="d-flex justify-content-center mt-3 login_container">
                            {userStateMsg}
                        </div>
                        }
                        <div className="d-flex justify-content-center mt-3 login_container">
                            {display === 'login'
                            ?
                                <Button onClick={e => setStateUserForm(e)} display="movies" name="Login">
                                </Button>
                            :
                                <Button onClick={e => setStateUserForm(e)} name="Sign-up">
                                </Button>
                            }
                        </div>
                        {renderRedirect()}
                    </form>
                </div>
            </div>
		</div>
    )
}
export default Login;