import React from 'react'
import moment from 'moment'

import {
  StyledListItem,
  StyledContainer,
  StyledComment
} from './SectionCommentsStyles'

const SectionComments = ({ comments }) => {
  return (
    <StyledContainer
      dataSource={comments}
      itemLayout="horizontal"
      renderItem={comment => (
        <StyledListItem>
          <StyledComment
            author={comment.sender}
            // avatar={item.avatar}
            content={comment.message}
            datetime={moment(comment.sendTime).format('MM:DD HH:mm')}
          />
        </StyledListItem>
      )}
    />
  )
}

export default SectionComments
