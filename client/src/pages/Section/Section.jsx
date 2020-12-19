import React from 'react'
import { useParams } from 'react-router-dom'

import { useComments } from 'hooks'
import NotificationSound from 'assets/notification_tune.mp3'

import SectionHeader from './SectionHeader'
import SectionComments from './SectionComments'
import SectionInput from './SectionInput'

import { StyledContainer } from './SectionStyles'

const Section = () => {
  const { sectionId } = useParams()
  const { comments, sendMessage, sentTyping, typingState, soundRef } = useComments({ sectionId })

  return (
    <StyledContainer>
      <SectionHeader />
      <SectionComments
        comments={comments}
        typingState={typingState}
      />
      <SectionInput
        sendMessage={sendMessage}
        sentTyping={sentTyping}
        typingState={typingState}
      />
      <audio
        style={{ display: 'none' }}
        src={NotificationSound}
        ref={soundRef}
      />
    </StyledContainer>
  )
}

export default Section
