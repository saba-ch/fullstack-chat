import React from 'react'

import { SendIcon } from 'assets'

import {
  StyledContainer,
  StyledFormInput,
  StyleSubContainer,
  StyledFormButton,
  StyledSendIcon
} from './SectionInputStyles'

const SectionInput = ({ sendMessage, sentTyping, typingState }) => {
  const [message, setMessage] = React.useState('')
  
  const handleChange = (e) => {
    sentTyping()
    setMessage(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(!message) return
    sendMessage(message)
    setMessage('')
  }
  
  return (
    <StyledContainer>
      <StyleSubContainer>
        <StyledFormInput
          onChange={handleChange}
          placeholder='Add Comment'
          value={message}
        />
        <StyledFormButton
          htmlType="submit"
          onClick={onSubmit}
          type="primary"
          size='small'
        >
          <StyledSendIcon src={SendIcon} alt='Send' />
        </StyledFormButton>
      </StyleSubContainer>
    </StyledContainer>
  )
}

export default SectionInput
