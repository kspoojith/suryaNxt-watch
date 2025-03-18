import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LoginContent = styled.form`
  background-color: ${props => (props.darkTheme ? '#000000' : '#ffffff')};
  border-radius: 5px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  font-family: 'Roboto';
  width: 400px;
  @media screen and (max-width: 576px) {
    width: 300px;
  }
`
export const Label = styled.label`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#64748b')};
  font-weight: 500;
  font-size: 15px;
  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`

export const ShowPassword = styled.label`
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#1e293b')};
  font-weight: 500;
  margin-left: 5px;
  font-size: 15px;
`
