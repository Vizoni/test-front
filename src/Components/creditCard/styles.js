import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: var(--radius-px);
  margin: 0 0.5rem;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);

  span {
    font-size: var(--smaller);
    color: var(--mid-grey);
    font-weight: bold;
    /* line-height: 0.87rem; */
    margin-bottom: 0.25rem;
  }

  input {
    display: flex;
    border: 1px solid #e7e7e7;
    border-radius: var(--radius-px);
    font-size: var(--normal);
    letter-spacing: 0.08rem;
    /* line-height: 1.18rem; */
    box-shadow: inset 0px 1px 2px 0 rgba(0, 0, 0, 0.2);
    padding: 0.7rem;

    ::placeholder {
      color: #e0e7ee;
      /* line-height: 1.18rem; */
    }
  }
`

export const CardDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    width: 44%;
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  margin: 0.75rem 0.625rem;
`