import React from 'react'
import { useParams } from 'react-router-dom'

import { useComments } from 'hooks'

import { StyledContainer } from './SectionStyles'

const Section = () => {
  const { sectionId } = useParams()
  const { comments } = useComments({ sectionId })
  console.log("🚀 ~ file: Section.jsx ~ line 11 ~ Section ~ comments", comments)
  return (
    <StyledContainer>
      
    </StyledContainer>
  )
}

export default Section
