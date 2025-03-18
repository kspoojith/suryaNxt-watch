import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import {IoSearch} from 'react-icons/io5'
import {ThreeDots} from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoCard from '../VideoCard'
import ThemeContext from '../../context/ThemeContext'
import {
  HomeContainer,
  WrapContainer,
  HomeContent,
  Banner,
  BannerTop,
  BannerLogo,
  BannerText,
  CloseBtn,
  SearchForm,
  GetBtn,
  VideoSection,
  SearchInput,
  SearchIcon,
  VideosContainer,
  LoadingView,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
  initial: 'INITIAL',
}

class Home extends Component {
  state = {
    showBanner: true,
    searchValue: '',
    finalSearchValue: '',
    videosData: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  closeBanner = () => this.setState({showBanner: false})

  changeSearchValue = event => this.setState({searchValue: event.target.value})

  onSearching = event => {
    event.preventDefault()
    const {searchValue} = this.state
    this.setState({finalSearchValue: searchValue}, this.getVideos)
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {finalSearchValue} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${finalSearchValue}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      this.setState({
        videosData: data.videos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideosData = () => {
    const {videosData} = this.state
    return (
      <VideosContainer>
        {videosData.map(eachItem => (
          <VideoCard data={eachItem} key={eachItem.id} />
        ))}
      </VideosContainer>
    )
  }

  renderLoadingView = () => (
    <div>
      <ThreeDots color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {showBanner, searchValue, apiStatus} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <HomeContainer data-testid="home" darkTheme={isDarkTheme}>
              <Header />
              <WrapContainer>
                <SideBar />
                <HomeContent>
                  {showBanner && (
                    <Banner>
                      <BannerTop>
                        <BannerLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <CloseBtn
                          data-testid="close"
                          type="button"
                          onClick={this.closeBanner}
                        >
                          <IoMdClose />
                        </CloseBtn>
                      </BannerTop>
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <GetBtn>GET IT NOW</GetBtn>
                    </Banner>
                  )}
                  <VideoSection>
                    <SearchForm onSubmit={this.onSearching}>
                      <SearchInput
                        darkTheme={isDarkTheme}
                        value={searchValue}
                        onChange={this.changeSearchValue}
                        type="search"
                        placeholder="Search"
                      />
                      <SearchIcon type="submit">
                        <IoSearch />
                      </SearchIcon>
                    </SearchForm>
                    {this.renderLoadingView()}
                    {this.renderVideosData()}
                  </VideoSection>
                </HomeContent>
              </WrapContainer>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
