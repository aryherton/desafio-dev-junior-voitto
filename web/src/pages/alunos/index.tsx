import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import StudentTable from '@/components/Organisms/Tables/StudentTable';
import Dashboard from '@/components/Templates/Layouts/Dashboard';
import Modal from '@/components/Modal';
import LoginForm from '@/components/Organisms/Forms/LoginForm';
// import { registerUser } from '@/services/api';

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
      title="Alunos"
      description={
        <p>Aqui você terá acesso à todos os alunos do nosso banco de dados</p>
      }
    >
      {isModalOpen && (
        <Modal>
          <LoginForm />
        </Modal>
      )}
      <StudentTable />
    </Dashboard>
  );
};

export default Operations;
