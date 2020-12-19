import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr 1fr;
  justify-content: center;
  height: 100%;
  align-items: center;
`

export const StyledImage = styled.img`
  max-height: 60vh;
  max-width: 100vw;
`


export const StyledDescription = styled.p`
  text-align: center;
  font-size: 20px;
  margin: 0 auto;
  max-width: 250px;
`
export const StyledButton = styled.button`
  border-radius: 15px;
  max-width: 300px;
  min-width: 150px;
  margin: auto auto;
  border: none;
  background-color: #66CCCC;
  color: #fff;
  padding: 10px;
  width: 150px;
  outline: none;
  cursor: pointer;
`