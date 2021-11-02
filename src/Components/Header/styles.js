import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  background-color: var(--white);
  justify-content: space-around;
  width: 100%;

  a {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 0.8rem;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.75rem 0;
    color: var(--mid-grey);

    &:active {
      color: var(--mid-orange);
    }
  }
`
