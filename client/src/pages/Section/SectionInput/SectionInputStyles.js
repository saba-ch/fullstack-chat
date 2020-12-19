import styled from 'styled-components'

export const StyledContainer = styled.form`
  display: flex;
  border-top: 1px solid #66CCCC;
  padding: 0 30px;
  justify-content: center;
  width: 100%;
  align-items: center;
`

export const StyleSubContainer = styled.div`
  width: 100%;
  height: 30px;
  position: relative;
  grid-gap: 10px;
  display: grid;
  grid-template-columns: 7fr 1fr;
  ::focus {
    height: auto;
  }
`

export const StyledFormInput = styled.input`
  height: 100%;
  width: 100%;
  height: 30px;
  border: 2px solid #66CCCC;
  border-radius: 15px;
  padding: 10px;
  outline: none !important;
  ::focus {
    height: auto;
  }
`

export const StyledFormButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const StyledSendIcon = styled.img`
  width: 25px;
`
