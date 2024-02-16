import Cookies from 'js-cookie'

import {Redirect, Route} from 'react-router-dom'

// ProtectedRoute is the Wrapper Component which returns Home/About Route Component.

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')
  // Unauthenticated User will be redirect to login page
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  // Authenticated User will be redirect to respected page
  return <Route {...props} />
}

export default ProtectedRoute
