import React from 'react'
import { useHistory } from 'react-router-dom'

import {
  StyledContainer,
  StyledDescription,
  StyledButton
} from './MainStyles'

const Main = () => {
  const history = useHistory()

  const onContinue = () => {
    history.push('/enter-name')
  }
  
  return (
    <StyledContainer>
      <StyledDescription>
        hey
      </StyledDescription>
      <StyledButton onClick={onContinue}>CONTINUE</StyledButton>
    </StyledContainer>
  )
}

export default Main
