import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Container, LoginContent, Label, ShowPassword} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showSubmitError: false,
  }

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitSuccess = token => {
    const {history} = this.props
    history.replace('/')
    Cookies.set('jwt_token', token, {expires: 30})
  }

  onChangeShowPassword = () =>
    this.setState(prevState => ({showPassword: !prevState.showPassword}))

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showPassword,
      showSubmitError,
      errorMsg,
    } = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const logoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <Container darkTheme={isDarkTheme}>
              <LoginContent darkTheme={isDarkTheme} onSubmit={this.onLogin}>
                <img src={logoUrl} className="login-logo" alt="logo" />
                <div className="input-container">
                  <Label darkTheme={isDarkTheme} htmlFor="Username">
                    USERNAME
                  </Label>
                  <br />
                  <input
                    id="Username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={this.onChangeUsername}
                    className="input"
                  />
                </div>
                <div className="input-container">
                  <Label darkTheme={isDarkTheme} htmlFor="password">
                    PASSWORD
                  </Label>
                  <br />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={this.onChangePassword}
                    className="input"
                  />
                </div>
                <div className="input-container2">
                  <input
                    checked={showPassword}
                    type="checkbox"
                    id="showPassword"
                    onChange={this.onChangeShowPassword}
                  />
                  <ShowPassword darkTheme={isDarkTheme} htmlFor="showPassword">
                    Show Password
                  </ShowPassword>
                </div>
                <button type="submit" className="submit-btn">
                  Submit
                </button>
                {showSubmitError && (
                  <p className="error-message">*{errorMsg}</p>
                )}
              </LoginContent>
            </Container>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginForm
