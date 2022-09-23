import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormGroup, FormSection } from '@/components/Atoms/Layouts/Form/styles';
import { toast } from 'react-toastify';
import { Button, TextField } from '@material-ui/core';
import { buttonTheme, inputTheme } from '@/utils/Config';

import { changeUser } from '../../../../redux/slice/userSlice';
import { registerUser, loginGetToken } from '@/services/api';
import { FooterLoginForm } from './styles';

const LoginForm: React.FC = () => {
  const dispatch = useDispatch<any>();
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setPassword] = useState<string>('');
  const [firstBtn, setFirstBtn] = useState<string>('Entrar');
  const [secondBtn, setSecondBtn] = useState<string>('Cadastre-se');

  const submit = async (valueBtn: string): Promise<void> => {
    switch (valueBtn) {
      case 'Entrar':
        if (email === null || senha === null) {
          toast('Preencha todos os campos', {
            position: toast.POSITION.BOTTOM_CENTER,
            type: 'error',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          });
        } else {
          const user = await loginGetToken('users', { email, senha });
          
          localStorage.setItem('token', JSON.stringify({ token: user.token }));
          dispatch(changeUser(user));
        }
        break;
      case 'Cadastre-se':
        setFirstBtn('Cadastrar');
        setSecondBtn('Login');
        break;
      case 'Cadastrar':
        if (nome === null || email === null || senha === null) {
          toast('Preencha todos os campos', {
            position: toast.POSITION.BOTTOM_CENTER,
            type: 'error',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          });
        } else {
          const user = await registerUser('/users', { nome, email, senha });
          
          localStorage.setItem('token', JSON.stringify({ token: user.token }));
          dispatch(changeUser(user));
        }
        break;
      default:
        setFirstBtn('Entrar');
        setSecondBtn('Cadastre-se');
    }
  };

  return (
    <FormSection>
      <main>
        <FormGroup>
          {firstBtn === 'Cadastrar' && (
            <TextField
              value={nome}
              onChange={({ target }) => setNome(target.value)}
              variant={inputTheme}
              margin="dense"
              type="text"
              label={!nome && "Digite seu nome"}
              style={{
                background: 'yellow',
                border: 'none',
                borderRadius: '10px',
                height: '40px',
                marginLeft: '10px',
              }}
            />
          )}
          <TextField
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            variant={inputTheme}
            margin="dense"
            type="text"
            label={ !email && 'Digite seu email' }
            style={{
              background: 'yellow',
              border: 'none',
              borderRadius: '10px',
              height: '40px',
              marginLeft: '10px',
            }}
          />
          <TextField
            value={senha}
            onChange={({ target }) => setPassword(target.value)}
            variant={inputTheme}
            margin="dense"
            type="password"
            label={ !senha && "Digite sua senha" }
            style={{
              background: 'yellow',
              border: 'none',
              borderRadius: '10px',
              height: '40px',
              marginRight: '5px',
            }}
          />
        </FormGroup>
      </main>
      <FooterLoginForm>
        <Button
          className="firstButton"
          fullWidth
          onClick={() => submit(firstBtn)}
          color="secondary"
          variant={buttonTheme}
        >
          {firstBtn}
        </Button>
        <Button
          className="secondButton"
          fullWidth
          onClick={() => submit(secondBtn)}
          color="secondary"
          variant={buttonTheme}
        >
          { secondBtn }
        </Button>
      </FooterLoginForm>
    </FormSection>
  );
};

export default LoginForm;
