import styled from 'styled-components'
import { Input } from 'antd'

import { EnterName } from 'assets'

export const StyledContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background-image: url(${EnterName});
  /* background-position: center; */
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
`

export const StyledForm = styled.form`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 70px;
`

export const StyledInput = styled(Input)`
  width: 80vw;
  height: 5vh;
  /* border: 2px solid #66CCCC; */
`

export const StyledButton = styled.button`
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
