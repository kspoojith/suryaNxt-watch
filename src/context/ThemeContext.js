import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  activeTab: 'HOME',
  changeTab: () => {},
})

export default ThemeContext
