import React from 'react'
import { useParams } from 'react-router-dom'

import UserContext from 'context/UserContext'

import {
  StyledContainer,
  StyledPageHeader,
  StyledDescription,
  StyledDescriptionItem
} from './SectionHeaderStyles'

const SectionHeader = () => {
  const { user } = React.useContext(UserContext)
  const { sectionId } = useParams()
  
  return (
    <StyledContainer>
      <StyledPageHeader
        ghost={false}
        title="Section:"
        subTitle={sectionId}
      >
        <StyledDescription size='middle'>
          <StyledDescriptionItem
            label='Your Name'
          >
            {user.name}
          </StyledDescriptionItem>
        </StyledDescription>
      </StyledPageHeader>
    </StyledContainer>
  )
}

export default SectionHeader
