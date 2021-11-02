import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  margin: 0 0.5rem;
  height: 50vh;
`

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--white);
  margin: 0.5rem 0.75rem;
  height: 16vh;
  border: 1px solid var(--background);
  border-radius: 3px;

  .text {
    color: var(--light-black);
    font-size: 0.85rem;
    line-height: 16px;
  }

  .price {
    color: var(--black);
    font-size: 1rem;
    line-height: 17px;
    font-weight: bold;
  }
`
