import styled from 'styled-components';

export const FooterLoginForm = styled.footer`
  display: flex;
  margin-left: 30%;
  width: 100%;
  height: 3.5rem;

  .firstButton {
    width: 170px;
    margin-right: 50px;
    margin-left: 30px;
    height: 3.5rem;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    background: var(--color-tertiary);
    transition: var(--transition);
  }

  .firstButton:hover {
    background: var(--color-tertiary-dark);
    color: #000FF4;
  }

  .secondButton {
    justify-self: flex-end;
    width: 140px;
    height: 3.5rem;
    border-radius: 0.5rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: #fff4f4;
    background: none;
    border: none;
    transition: var(--transition);
  }

  .secondButton:hover {
    border: none;
    font-size: 1.2rem;
  }
`;