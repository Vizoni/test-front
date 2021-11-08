import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  background-color: var(--mid-orange);
  border-radius: var(--radius-px);
  color: var(--white);
  /* font-size: var(--big); */
  font-size: 0.68rem;
  text-transform: uppercase;
  margin: 0 0.5rem;
  /* line-height: 1.5rem; */
  letter-spacing: 0.03rem;
  justify-content: center;
  align-items: center;
  height: 3.75rem;
  border: var(--radius-px) solid var(--mid-orange);
  border-radius: var(--radius-px);
  box-shadow: 0 3px 0px 0px var(--dark-orange), 0 2px 4px 0px rgba(0, 0, 0, 0.25);
`
