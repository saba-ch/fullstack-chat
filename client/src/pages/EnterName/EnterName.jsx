import React from 'react'
import { useHistory } from 'react-router-dom'

import UserContext from 'context/UserContext'
import { storageService } from 'services'

import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledButton
} from './EnterNameStyles'

const EnterName = () => {
  const [name, setName] = React.useState(storageService.getName() || '')
  const { updateUser } = React.useContext(UserContext)
  const history = useHistory()

  const onSubmit = (e) => {
    e.preventDefault()
    updateUser({ name })

    storageService.setName(name)

    history.push('/join-section')
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }
  
  return (
    <StyledContainer>
      <StyledForm onSubmit={onSubmit}>
        <StyledInput onChange={handleChange} value={name} required />
        <StyledButton htmlType='submit'>CONTINUE</StyledButton>
      </StyledForm>
    </StyledContainer>
  )
}

export default EnterName
