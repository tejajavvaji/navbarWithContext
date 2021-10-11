// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onToggleTheme = () => {
        toggleTheme()
      }
      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const backgroundColor = isDarkTheme ? '#333333' : '#ffffff'
      const themeLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const fontColor = isDarkTheme ? '#ffffff' : '#171f46'
      return (
        <nav
          style={{backgroundColor: `${backgroundColor}`}}
          className="nav-main"
        >
          <img className="logo" src={logoUrl} alt="website logo" />
          <ul className="nav-links-container">
            <li>
              <Link style={{color: `${fontColor}`}} className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                style={{color: `${fontColor}`}}
                className="link"
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          <button type="button" testid="theme">
            <img
              onClick={onToggleTheme}
              className="logo"
              src={themeLogo}
              alt="theme"
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
