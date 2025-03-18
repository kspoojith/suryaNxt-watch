import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
`

export const WrapContainer = styled.div`
  display: flex;
`
export const HomeContent = styled.div`
  background-color: '#f8fafc';
  height: 90vh;
  width: 100%;
  font-family: 'Roboto';
  overflow-y: auto;
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  min-height: 30vh;
  background-size: cover;
  padding: 20px;
  paddin-left: 30px;
  @media screen and (max-width: 576px) {
    min-height: 20vh;
  }
`
export const BannerTop = styled.div`
  display: flex;
  justify-content: space-between;
`
export const BannerLogo = styled.img`
  width: 150px;
  @media screen and (max-width: 576px) {
    width: 80px;
    height: 20px;
  }
`

export const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`
export const BannerText = styled.p`
  color: #231f20;
  font-weight: 500;
  width: 320px;
  margin-top: 20px;
  @media screen and (max-width: 576px) {
    font-size: 15px;
    width: 250px;
  }
`
export const GetBtn = styled.button`
  background: transparent;
  border: 2px solid #231f20;
  padding: 5px;
  color: #231f20;
  font-weight: 500;
  margin-top: 30px;
  font-family: 'Roboto';
  font-size: 14px;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    margin-top: 20px;
  }
`
export const VideoSection = styled.div`
  padding: 20px;
  @media screen and (max-width: 576px) {
    padding: 0px;
  }
`

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  border: 2px solid #94a3b8;
  heightL 30pxl;
  width: 300px;
  margin-left: 10px;
`
export const SearchInput = styled.input`
  background: transparent;
  height: 30px;
  border: none;
  outline: none;
  font-family: 'Roboto';
  font-weight: 500;
  width: 100%;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`
export const SearchIcon = styled.button`
  border: none;
  height: 30px;
  width: 40px;
  font-size: 14px;
  background-color: #d7dfe9;
  cursor: pointer;
`
export const VideosContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`
export const LoadingView = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
