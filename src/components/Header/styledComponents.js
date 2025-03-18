import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-family: 'Roboto';
`
export const LogoImage = styled.img`
  width: 150px;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 30px;
  }
`

export const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const MobileNav = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const ThemeButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`

export const ProfileImg = styled.img`
  width: 30px;
  margin-left: 20px;
`
export const LogoutBtn = styled.button`
  background: none;
  border: 2px solid ${props => (props.darkTheme ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.darkTheme ? '#ffffff' : '#3b82f6')};
  padding: 5px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-left: 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 90px;
`
export const LogoutSection = styled.div`
  background-color: #272727;
  padding: 30px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`
export const LogoutDescription = styled.p`
  color: #ffffff;
  text-align: center;
  margin-bottom: 40px;
`
export const CancelButton = styled.button`
  background: none;
  border: 2px solid #d7dfe9;
  color: #d7dfe9;
  padding: 5px;
  width: 90px;
  border-radius: 5px;
  cursor: pointer;
`
export const ConfirmBtn = styled.button`
  background-color: #3b82f6;
  border: none;
  color: #ffffff;
  padding: 5px;
  width: 90px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
`
export const MenuBtn = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`

export const MobileLogout = styled.button`
  background: none;
  border: none;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  font-size: 20px;
  cursor: pointer;
`
export const MobileMenuBar = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${props =>
    props.darkTheme
      ? '0 4px 6px rgba(255, 255, 255, 0.1), 0 1px 3px rgba(255, 255, 255, 0.08)'
      : '0 4px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'};
  background-color: ${props => (props.darkTheme ? '#272727' : '#ffffff')};
  width: 250px;
`

export const MenuItem = styled.button`
  background: none;
  border: none;
  height: 25px;
  margin-bottom: 20px;
  font-size: 20px;
  color: ${props => (props.darkTheme ? '#ebebeb' : '#00306e')};
  text-align: center;
  border-bottom: 2px solid ${props => (props.darkTheme ? '#424242' : '#cbd5e1')};
  width: 100%;
  padding-bottom: 40px;
  padding-top: 20px;
  margin-bottom: 0px;
`
