// Write your code here
import Navbar from '../Navbar/index'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const backgroundColor = isDarkTheme ? '#000000' : '#ffffff'
      const fontColor = isDarkTheme ? '#ffffff' : '#000000'
      return (
        <div
          style={{backgroundColor: `${backgroundColor}`}}
          className="home-main"
        >
          <Navbar />
          <div className="home-content">
            <img className="home-logo" src={homeLogo} alt="home" />
            <h1 style={{color: `${fontColor}`}}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
