import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  background-color: var(--white);
  justify-content: space-around;
  width: 100%;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);

  a {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: var(--small);
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.75rem 0;
    color: var(--mid-grey);

    &.active {
      color: var(--mid-orange);
    }
  }
`
