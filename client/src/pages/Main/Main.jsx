import React from 'react'
import { useHistory } from 'react-router-dom'

import { WelcomeIcon } from 'assets'

import {
  StyledContainer,
  StyledDescription,
  StyledButton,
  StyledImage
} from './MainStyles'

const Main = () => {
  const history = useHistory()

  const onContinue = () => {
    history.push('/enter-name')
  }
  
  return (
    <StyledContainer>
      <StyledDescription>
        Website For People Who Likes To Talk In Facebook Comments Privately
      </StyledDescription>
      <StyledImage
        src={WelcomeIcon}
      />
      <StyledButton
        onClick={onContinue}
        type='primary'
        size='large'
      >
        CONTINUE
      </StyledButton>
    </StyledContainer>
  )
}

export default Main
