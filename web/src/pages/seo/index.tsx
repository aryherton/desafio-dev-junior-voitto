import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostsOfBlog from '@/components/Organisms/PostsOfBlog';
import Dashboard from '@/components/Templates/Layouts/Dashboard';
import Modal from '@/components/Modal';
import LoginForm from '@/components/Organisms/Forms/LoginForm';
import { getUserByToken } from '@/services/api';
import { changeUser } from '../../redux/slice/userSlice';

const SEOPage: React.FC = () => {
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
