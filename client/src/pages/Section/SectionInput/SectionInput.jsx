import React from 'react'

import {
  StyledContainer,
  StyledFormInputContainer,
  StyledFormInput,
  StyledFormButtonContainer,
  StyledFormButton
} from './SectionInputStyles'

const SectionInput = ({ sendMessage }) => {
  const [message, setMessage] = React.useState('')
  
  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(!message) return
    sendMessage(message)
  }
  
  return (
    <StyledContainer>
      <StyledFormInputContainer>
        <StyledFormInput rows={4} onChange={handleChange} value={message} />
      </StyledFormInputContainer>
      <StyledFormButtonContainer>
        <StyledFormButton
          htmlType="submit"
          onClick={onSubmit}
          type="primary"
          size='large'
        >
          Add Comment
        </StyledFormButton>
      </StyledFormButtonContainer>
    </StyledContainer>
  )
}

export default SectionInput
