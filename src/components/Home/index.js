// Write your JS code here
import Cookies from 'js-cookie'

import LogoutButton from '../LogoutButton'

import './index.css'

import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <h1>Home Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default Home
