import React from 'react'
import moment from 'moment'

import {
  StyledListItem,
  StyledContainer,
  StyledComment,
  StyledRootContainer,
  StyledTyping
} from './SectionCommentsStyles'

const SectionComments = ({ comments, typingState }) => {
  const listRef = React.useRef()

  React.useEffect(() => {
    if (listRef.current) listRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [comments, typingState])

  return (
    <StyledRootContainer>
      <StyledContainer
        dataSource={comments}
        itemLayout="horizontal"
        renderItem={comment => (
          <StyledListItem>
            <StyledComment
              author={comment.sender}
              content={comment.message}
              datetime={moment(comment.sendTime).format('MM:DD HH:mm')}
            />
          </StyledListItem>
        )}
      />
      {typingState.userName && (
        <StyledTyping>{`${typingState.userName} is typing...`}</StyledTyping>
      )}
      <div ref={listRef} />
    </StyledRootContainer>
  )
}

export default SectionComments
