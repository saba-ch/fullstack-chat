import styled from 'styled-components'
import { Comment, List } from 'antd';

export const StyledContainer = styled(List)`
  /* overflow-y: scroll; */
  /* padding: 0 20px; */
`

export const StyledRootContainer = styled.div`
  overflow-y: scroll;
  padding: 0 20px;
  position: relative;
`

export const StyledListItem = styled.li`
`

export const StyledComment = styled(Comment)`
  background-color: #F2F3F5;
  margin: 10px;
  padding: 10px;
  border-radius: 20px;

  .ant-comment-content-author-name {
    color: #000;
    font-weight: bold;
    font-size: 16px;
  }
`

export const StyledTyping = styled.p`
  position: absolute;
  bottom: 5px;
`
