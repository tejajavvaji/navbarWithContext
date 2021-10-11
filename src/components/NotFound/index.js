import Navbar from '../Navbar/index'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const backgroundColor = isDarkTheme ? '#000000' : '#ffffff'
      const fontColor = isDarkTheme ? '#ffffff' : '#000000'
      return (
        <div
          style={{backgroundColor: `${backgroundColor}`}}
          className="home-main"
        >
          <Navbar />
          <div className="home-content">
            <img
              className="home-logo"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              alt="not found"
            />
            <h1 style={{color: `${fontColor}`}}>Lost Your Way?</h1>
            <p style={{color: `${fontColor}`}}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
