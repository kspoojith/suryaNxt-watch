import {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'

import ThemeContext from './context/ThemeContext'

import './App.css'

const tabs = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED VIDEOS',
  none: 'NONE',
}

class App extends Component {
  state = {isDarkTheme: false, activeTab: tabs.home}

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeTab = value => {
    this.setState({activeTab: value})
  }

  render() {
    const {isDarkTheme, activeTab} = this.state
    return (
      <BrowserRouter>
        <ThemeContext.Provider
          value={{
            isDarkTheme,
            activeTab,
            changeTab: this.changeTab,
            changeTheme: this.changeTheme,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
          </Switch>
        </ThemeContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App
