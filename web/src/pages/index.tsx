import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';

import Intro from '@/components/Organisms/Containers/Intro';
import Dashboard from '@/components/Templates/Layouts/Dashboard';
// import OperatorsForm from '@/components/Organisms/Forms/StudentsForm';

const Operations: React.FC = () => {
  const user = useSelector<IUser>((state: any) => state.user.user);
  const arrStudent = useSelector<IStudent[]>((state: any) => state.student.arrStudents);

  useEffect(() => { }, [user, arrStudent]);
  
  return (
    <Dashboard
      title="Home"
      description={
        <p>Olá, aqui será descrito todas as atividades a serem feitas</p>
      }
    >
      <Intro />
    </Dashboard>
  );
};

export default Operations;
