import styled from 'styled-components';

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #4D5BF9;
  color: #000;
  width: 40%;
  height: 80%;
  border-radius: 10px;
`;
