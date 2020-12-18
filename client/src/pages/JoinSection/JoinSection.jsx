import React from 'react'
import { useHistory } from 'react-router-dom'

import UserContext from 'context/UserContext'
import { sectionService, storageService } from 'services'

import {
  StyledContainer,
  StyledBlockContainer,
  StyledJoinHeader,
  StyledCreateHeader,
  StyledIdInput,
  StyledNameInput,
  StyledIdButton,
  StyledNameButton,
  StyledPasswordInput
} from './JoinSectionStyles'

const JoinSection = () => {
  const [sectionId, setSectionId] = React.useState('')
  const [joinPass, setJoinPass] = React.useState('')
  const [createPass, setCreatePass] = React.useState('')
  const [sectionName, setSectionName] = React.useState('')

  const { updateUser } = React.useContext(UserContext)
  
  const history = useHistory()

  const handleJoinSubmit = async (e) => {
    e.preventDefault()

    const { data: section } = await sectionService.joinSection({ id: sectionId, password: joinPass })

    storageService.setJwtToken(section.token)
    
    updateUser({ section })
    
    history.push(`/section/${sectionId}`)
  }

  const handleSectionIdChange = (e) => {
    setSectionId(e.target.value)
  }

  const handleSectionNameChange = (e) => {
    setSectionName(e.target.value)
  }

  const handleCreateSubmit = async (e) => {
    e.preventDefault()

    const { data: section } = await sectionService.createSection({ name: sectionName, password: createPass })

    storageService.setJwtToken(section.token)
    
    updateUser({ section })

    history.push(`/section/${section._id}`)
  }
  
  return (
    <StyledContainer>
      <StyledBlockContainer onSubmit={handleJoinSubmit}>
        <StyledJoinHeader>
          Join Comment Section
        </StyledJoinHeader>
        <StyledIdInput
          onChange={handleSectionIdChange}
          value={sectionId}
          placeholder='Section Id'
          required
        />
        <StyledPasswordInput
          onChange={e => setJoinPass(e.target.value)}
          value={joinPass}
          placeholder='Password'
          type='password'
          required
        />
        <StyledIdButton htmlType='submit'>JOIN</StyledIdButton>
      </StyledBlockContainer>
      <StyledBlockContainer onSubmit={handleCreateSubmit}>
        <StyledCreateHeader>
          Create Comment Section
        </StyledCreateHeader>
        <StyledNameInput
          onChange={handleSectionNameChange}
          value={sectionName}
          placeholder='Section Name'
          required
        />
        <StyledPasswordInput
          onChange={e => setCreatePass(e.target.value)}
          placeholder='Password'
          type='password'
          value={createPass}
          required
        />
        <StyledNameButton htmlType='submit'>CREATE</StyledNameButton>
      </StyledBlockContainer>
    </StyledContainer>
  )
}

export default JoinSection
