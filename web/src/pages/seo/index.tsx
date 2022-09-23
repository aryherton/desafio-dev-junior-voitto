import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import PostsOfBlog from '@/components/Organisms/PostsOfBlog';
import Dashboard from '@/components/Templates/Layouts/Dashboard';
import Modal from '@/components/Modal';
import LoginForm from '@/components/Organisms/Forms/LoginForm';

const SEOPage: React.FC = () => {
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
      title="SEO Test"
      description={
        <p>Aqui você terá acesso à um post de artigo. Otimize-o o máximo que conseguir. Lembre-se é que a página seja bem vista pelo google, ou seja, não se esqueça da acessibilidade</p>
      }
    >
      {isModalOpen && (
        <Modal>
          <LoginForm />
        </Modal>
      )}
      <PostsOfBlog />
    </Dashboard>
  );
};

export default SEOPage;
