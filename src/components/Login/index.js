// Write your JS code here
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {username: 'rahul', password: 'rahul@2021'}

  onSuccessLogin = jwtToken => {
    console.log(jwtToken)
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    const {history} = this.props

    // On Successful login user is moved to home page
    history.replace('/')
  }

  onLogin = async event => {
    const {username, password} = this.state

    event.preventDefault()
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessLogin(data.jwt_token)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')

    // Authenticated User
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    // Unauthenticated User
    return (
      <form onSubmit={this.onLogin} className="login-container">
        <h1>Please Login</h1>
        <div>
          <button type="submit">Login with Sample Creds</button>
        </div>
      </form>
    )
  }
}

export default Login
