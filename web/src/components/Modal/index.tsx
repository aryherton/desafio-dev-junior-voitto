import React from 'react';

import { ModalWrapper, ModalContent } from './styles';

function Modal({ children }): JSX.Element {
  return (
    <ModalWrapper>
      <ModalContent>
        { children }
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal;