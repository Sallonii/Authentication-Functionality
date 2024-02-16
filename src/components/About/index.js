import Cookies from 'js-cookie'
import './index.css'

import Header from '../Header'

const About = props => {
  const {history} = props

  const onLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <>
      <Header />
      <form onSubmit={onLogout} className="about-container">
        <h1>About Route</h1>
        <div>
          <button type="submit">Logout</button>
        </div>
      </form>
    </>
  )
}

export default About
