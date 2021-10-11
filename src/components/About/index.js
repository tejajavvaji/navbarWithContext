import Navbar from '../Navbar/index'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const backgroundColor = isDarkTheme ? '#000000' : '#ffffff'
      const fontColor = isDarkTheme ? '#ffffff' : '#000000'
      return (
        <div
          style={{backgroundColor: `${backgroundColor}`}}
          className="home-main"
        >
          <Navbar />
          <div className="home-content">
            <img className="home-logo" src={homeLogo} alt="about" />
            <h1 style={{color: `${fontColor}`}}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
