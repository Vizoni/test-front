import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: var(--radius-px);
  margin: 0 0.5rem;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--white);
  margin: 0.5rem 0.75rem;
  border: 1px solid var(--background);
  border-radius: var(--radius-px);

  &:first-child {
    margin: 0.75rem 0.75rem 0.5rem 0.75rem;
  }

  &:last-child {
    margin: 0.5rem 0.75rem 0.75rem 0.75rem;
  }

  img {
    width: 5rem;
    margin: 0.5rem 0.25rem;
    object-fit: contain;
  }

  div {
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
    width: 100%;
    justify-content: space-between;

    .text {
      color: var(--light-black);
      font-size: var(--small);
      /* line-height: 1rem; */
    }

    .price {
      color: var(--black);
      font-size: var(--normal);
      /* line-height: 1.06rem; */
      font-weight: bold;
      margin: 0 0.25rem 0.25rem 0;
      display: flex;
      justify-content: end;
    }
  }
`
