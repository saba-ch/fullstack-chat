import React from 'react'
import { useParams } from 'react-router-dom'

import { useComments } from 'hooks'

import { StyledContainer } from './SectionStyles'

const Section = () => {
  const { sectionId } = useParams()
  console.log("🚀 ~ file: Section.jsx ~ line 10 ~ Section ~ sectionId", sectionId)
  const { io } = useComments({ sectionId })
  console.log("🚀 ~ file: Section.jsx ~ line 12 ~ Section ~ io", io)
  return (
    <StyledContainer>
      
    </StyledContainer>
  )
}

export default Section
