import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import LogicTestForm from '@/components/Organisms/Forms/LogicTestForm';
import Dashboard from '@/components/Templates/Layouts/Dashboard';
import { logicTestText } from '@/constants/Texts';
import Modal from '@/components/Modal';
import LoginForm from '@/components/Organisms/Forms/LoginForm';

const Operations: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector<IUser>((state: any) => state.user);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));

    if (!token) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [user]);

  return (
    <Dashboard
      title="Teste de Lógica"
      description={
        <>
          <p> Aqui você terá acesso ao teste de lógica.</p>
          {logicTestText}
        </>
      }
    >
      {isModalOpen && (
        <Modal>
          <LoginForm />
        </Modal>
      )}
      <LogicTestForm />
    </Dashboard>
  );
};

export default Operations;
