import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--grey);
  justify-content: space-around;
  width: 100%;
`

export const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0.5rem 0 0.5rem;

  span {
    text-transform: uppercase;
    color: var(--light-orange);
    font-size: var(--mid);
    line-height: 17px;
    font-weight: bold;
    margin: 0.5rem 0;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  justify-content: space-around;
  border-radius: var(--radius-px);
  margin: 0 0.5rem 1rem 0.5rem;
  padding: 0.5rem 0;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);

  span {
    text-transform: uppercase;
    font-size: var(--mid);
    line-height: 17px;
    color: var(--black);
    margin: 0 0.75rem;
  }
`
