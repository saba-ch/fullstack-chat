import styled from 'styled-components'
import { Input } from 'antd'

export const StyledRootContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #66CCCC;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledContainer = styled.div`
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    height: calc(100% - 160px);
    width: calc(100% - 160px);
  }
  @media (max-width: 768px) {
    height: calc(100% - 60px);
    width: calc(100% - 60px);
  }
  margin: auto;
  border-radius: 20px;
  background-color: #fff;
`

export const StyledLeftContainer = styled.div`
  display: grid;
`

export const StyledRightContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none
  }
`

export const StyledImage = styled.img`
  max-height: calc(100vh - 160px);
`

export const StyledBlockContainer = styled.form`
  :first-child {
    border-bottom: 2px solid #66CCCC;
  }
  border-right: 2px solid #66CCCC;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 15px;
`

export const StyledJoinHeader = styled.div`

`

export const StyledCreateHeader = styled.div`

`

export const StyledPasswordInput = styled(Input)`
  width: 50%;
  @media (max-width: 768px) {
    width: 80%;
  }
`

export const StyledIdInput = styled(Input)`
  width: 50%;
  @media (max-width: 768px) {
    width: 80%;
  }
`

export const StyledIdButton = styled.button`
  border-radius: 15px;
  max-width: 300px;
  border: none;
  background-color: #66CCCC;
  color: #fff;
  padding: 10px;
  width: 150px;
  margin: 0 auto;
  outline: none;
  cursor: pointer;
`


export const StyledNameInput = styled(Input)`
  width: 50%;
  @media (max-width: 768px) {
    width: 80%;
  }
`

export const StyledNameButton = styled.button`
  border-radius: 15px;
  max-width: 300px;
  border: none;
  background-color: #66CCCC;
  color: #fff;
  padding: 10px;
  width: 150px;
  margin: 0 auto;
  outline: none;
  cursor: pointer;
`
