import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LogicTestForm from '@/components/Organisms/Forms/LogicTestForm';
import Dashboard from '@/components/Templates/Layouts/Dashboard';
import { logicTestText } from '@/constants/Texts';
import Modal from '@/components/Modal';
import LoginForm from '@/components/Organisms/Forms/LoginForm';
import { getUserByToken } from '@/services/api';
import { changeUser } from '../../redux/slice/userSlice';

const Operations: React.FC = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector<IUser>((state: any) => state.user.user);

  useEffect(() => {
    const keyToken = localStorage.getItem('token');

    if (!keyToken) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }

    if (keyToken && !user) {  
      const { token } = keyToken && JSON.parse(keyToken);
      (async () => {        
        const user = await getUserByToken('/users/bytoken', token);
        dispatch(changeUser(user));
      })();
    }
  }, []);

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
