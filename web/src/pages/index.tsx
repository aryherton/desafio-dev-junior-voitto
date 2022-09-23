import React from 'react';
import Intro from '@/components/Organisms/Containers/Intro';
// import OperatorsForm from '@/components/Organisms/Forms/StudentsForm';
import { useRouter } from 'next/dist/client/router';

import Dashboard from '@/components/Templates/Layouts/Dashboard';

const Operations: React.FC = () => {
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
