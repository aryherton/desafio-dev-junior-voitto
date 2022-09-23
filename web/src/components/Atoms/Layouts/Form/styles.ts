import styled from 'styled-components';

export const FormSection = styled.form`
  border-radius: var(--border-radius);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * {
    margin-top: 1rem;
  }

  > footer {
    width: 100%;
    > div {
      width: 100%;
    }
  }

  > main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40%;
  }
`;

export const FormGroup = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:first-of-type{
    margin-top: 0;
  }

  > div {
    width: 100% !important;
    margin-right: 1rem;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;
