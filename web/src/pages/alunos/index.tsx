import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/dist/client/router';

import StudentTable from '@/components/Organisms/Tables/StudentTable';
import Dashboard from '@/components/Templates/Layouts/Dashboard';
import Modal from '@/components/Modal';
import LoginForm from '@/components/Organisms/Forms/LoginForm';
import { getUserByToken } from '@/services/api';
import { changeUser } from '../../redux/slice/userSlice';

const Operations: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector<IUser>((state: any) => state.user.user);

  useEffect(() => {
    const keyToken = localStorage.getItem('token');

    if (!keyToken) {
      setIsModalOpen(true);
    } else if (user.admin) {
      setIsModalOpen(false);
    } else {
      router.push('/');
    }

    if (keyToken && !user) {
      const { token } = keyToken && JSON.parse(keyToken);
      (async () => {
        const user = await getUserByToken('/users/bytoken', token);
        dispatch(changeUser(user));
      })();
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
