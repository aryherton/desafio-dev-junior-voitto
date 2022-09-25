import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import StudentTable from '@/components/Organisms/Tables/StudentTable';
import Dashboard from '@/components/Templates/Layouts/Dashboard';
import Modal from '@/components/Modal';
import LoginForm from '@/components/Organisms/Forms/LoginForm';
import AddStudentForm from '@/components/Organisms/Forms/AddStudentForm';
import { getUserByToken, getAlunos } from '@/services/api';
import { changeUser } from '../../redux/slice/userSlice';
import { changeArrStudents } from '../../redux/slice/studentSlice';

const Operations: React.FC = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector<IUser>((state: any) => state.user.user);
  const addStudent = useSelector((state: any) => state.student.addStudent);

  useEffect(() => {
    const keyToken = localStorage.getItem('token');

    if (!keyToken) setIsModalOpen(true);

    if (keyToken && !user) {
      const { token } = keyToken && JSON.parse(keyToken);
      (async () => {
        const user = await getUserByToken('/users/bytoken', token);
        const arrAlunos = await getAlunos('/alunos', token);
        setIsModalOpen(false);
        dispatch(changeArrStudents(arrAlunos));
        dispatch(changeUser(user));
      })();
    }
  }, [addStudent]);  
  
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
      {addStudent && (
        <Modal>
          <AddStudentForm />
        </Modal>
      )}
      <StudentTable />
    </Dashboard>
  );
};

export default Operations;
