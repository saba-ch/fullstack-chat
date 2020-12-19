import styled from 'styled-components'
import { Descriptions, PageHeader } from 'antd'

export const StyledContainer = styled.div`
`

export const StyledPageHeader = styled(PageHeader)`
  background-color: #66CCCC;
  div > span {
    color: #fff;
  }
`

export const StyledDescription = styled(Descriptions)`
  div > span {
    color: #fff;
  }
`

export const StyledDescriptionItem = styled(Descriptions.Item)`
  color: #fff;
`
