import styled from 'styled-components'

const getBackgroundColor = props => {
  if (props.active) {
    return props.darkTheme ? '#424242' : '#cbd5e1'
  }
  return ''
}

export const LinkItem = styled.div`
  background: transparent;
  color: ${props => (props.darkTheme ? '#d7dfe9' : '#606060')};
  background-color: ${props => getBackgroundColor(props)};
  padding-left: 30px;
  cursor: pointer;
`
export const LinkText = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin-left: 15px;
`
export const ContactHeading = styled.p`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  font-weight: 500;
  margin-bottom: 20px;
`
export const MediaSymbols = styled.div`
  display: flex;
  align-items: center;
`
