import React from 'react'
import { useHistory } from 'react-router-dom'

import UserContext from 'context/UserContext'

import {
  StyledContainer,
  StyledForm,
  StyledInput
} from './EnterNameStyles'

const EnterName = () => {
  const [name, setName] = React.useState('')
  const { updateUser } = React.useContext(UserContext)
  const history = useHistory()

  const onSubmit = (e) => {
    e.preventDefault()
    updateUser({ name })
    history.push('/join-section')
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }
  
  return (
    <StyledContainer>
      <StyledForm onSubmit={onSubmit}>
        <StyledInput onChange={handleChange} value={name} />
      </StyledForm>
    </StyledContainer>
  )
}

export default EnterName
