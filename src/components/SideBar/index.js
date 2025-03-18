import {MdHome, MdPlaylistAdd} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import {
  LinkItem,
  LinkText,
  ContactHeading,
  MediaSymbols,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const tabs = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED VIDEOS',
  none: 'NONE',
}

const SideBar = props => {
  const activeIconStyle = 'active-icon'
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, activeTab, changeTab} = value
        return (
          <div className="desktop-sidebar">
            <div className="pages">
              <LinkItem
                active={activeTab === tabs.home}
                darkTheme={isDarkTheme}
                onClick={() => changeTab(tabs.home)}
              >
                <div className="link-item">
                  <MdHome
                    className={`link-icon ${
                      activeTab === tabs.home ? activeIconStyle : ''
                    }`}
                  />
                  <LinkText className="link-txt">Home</LinkText>
                </div>
              </LinkItem>
              <LinkItem
                darkTheme={isDarkTheme}
                active={activeTab === tabs.trending}
                onClick={() => changeTab(tabs.trending)}
              >
                <div className="link-item">
                  <HiFire
                    className={`link-icon ${
                      activeTab === tabs.trending ? activeIconStyle : ''
                    }`}
                  />
                  <LinkText className="link-txt">Trending</LinkText>
                </div>
              </LinkItem>
              <LinkItem
                darkTheme={isDarkTheme}
                active={activeTab === tabs.gaming}
                onClick={() => changeTab(tabs.gaming)}
              >
                <div className="link-item">
                  <SiYoutubegaming
                    className={`link-icon ${
                      activeTab === tabs.gaming ? activeIconStyle : ''
                    }`}
                  />
                  <LinkText className="link-txt">Gaming</LinkText>
                </div>
              </LinkItem>
              <LinkItem
                darkTheme={isDarkTheme}
                active={activeTab === tabs.savedVideos}
                onClick={() => changeTab(tabs.savedVideos)}
              >
                <div className="link-item">
                  <MdPlaylistAdd
                    className={`link-icon ${
                      activeTab === tabs.savedVideos ? activeIconStyle : ''
                    }`}
                  />
                  <LinkText className="link-txt">Saved Videos</LinkText>
                </div>
              </LinkItem>
            </div>
            <div className="contact-section">
              <ContactHeading darkTheme={isDarkTheme}>
                CONTACT US
              </ContactHeading>
              <MediaSymbols>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  width="35px"
                  alt="facebook logo"
                  className="media-icon"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  width="35px"
                  alt="twitter logo"
                  className="media-icon"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  width="35px"
                  alt="linked in logo"
                  className="media-icon"
                />
              </MediaSymbols>
              <ContactHeading darkTheme={isDarkTheme}>
                Enjoy! Now to see your channels and recommendations!
              </ContactHeading>
            </div>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SideBar
