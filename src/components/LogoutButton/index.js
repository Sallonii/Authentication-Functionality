// Write your JS code here

import Cookies from 'js-cookie'

import {withRouter} from 'react-router-dom'

// LogoutButton is a wrapper Component for Home/About Component

const LogoutButton = props => {
  const onLogout = () => {
    const {history} = props

    // Removal of token on Logout
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
