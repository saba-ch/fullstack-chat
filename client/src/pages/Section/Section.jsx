import React from 'react'
import { useParams } from 'react-router-dom'

import { useComments } from 'hooks'

import SectionHeader from './SectionHeader'
import SectionComments from './SectionComments'
import SectionInput from './SectionInput'

import { StyledContainer } from './SectionStyles'

const Section = () => {
  const { sectionId } = useParams()
  const { comments, sendMessage } = useComments({ sectionId })
  return (
    <StyledContainer>
      <SectionHeader />
      <SectionComments comments={comments} />
      <SectionInput sendMessage={sendMessage} />
    </StyledContainer>
  )
}

export default Section
