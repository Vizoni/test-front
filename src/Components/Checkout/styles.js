import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  justify-content: space-around;
  border: 1px solid var(--mid-grey);
  border-radius: var(--radius-px);
  margin: 1.25rem 0.5rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0.25rem 1rem;
    font-size: var(--mid);
    /* line-height: 1.06rem; */
    text-transform: uppercase;
    color: var(--light-black);

    &:first-child {
      margin: 1rem 1rem 0.25rem 1rem;
    }

    &:nth-child(3) {
      color: var(--light-orange);
    }

    &:last-child {
      font-weight: bolder;
      margin: 0.75rem 1rem 1rem 1rem;
    }
  }
`
