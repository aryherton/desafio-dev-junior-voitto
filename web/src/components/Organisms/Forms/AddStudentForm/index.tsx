import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid'
import { FormGroup, FormSection } from '@/components/Atoms/Layouts/Form/styles';
import { Button, TextField, Select, MenuItem } from '@material-ui/core';
import { buttonTheme, inputTheme } from '@/utils/Config';

import {
  getCursos,
  createCursoAluno,
  createAluno,
  updateAluno,
  updateCursoAluno,
} from '@/services/api';
import { arrState } from '@/utils/help/arrState';
import { FooterLoginForm } from '../LoginForm/styles';
import { changeAddStudent, changeEditStudent } from 'redux/slice/studentSlice';
import { changeUser } from 'redux/slice/userSlice';

const AddStudentForm: React.FC = () => {
  const dispatch = useDispatch();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [course, setCourse] = useState(null);
  const [arrCourses, setArrCourses] = useState([]);
  const [token, setToken] = useState('');
  const editStudent = useSelector((state: any) => state.student.editStudent);

  const submit = async () => {
    const checkStateStudent = nome && email && cep && city && state;
    const checkStateCourse = course;
    let newStudent: IStudent;

    if (checkStateStudent) {
      newStudent = {
        nome,
        email,
        cep,
        cidade: city,
        estado: state,
      };
    } else {
      alert('Preencha todos os campos!');
      dispatch(changeAddStudent(false));
      return;
    }
    
    if (checkStateStudent && checkStateCourse) {
      try {
        const data = await createAluno('/alunos', newStudent, token);
        const id = data.id;

        if (id) {
          const newCourse: ICourseAluno = {
            id_pessoa: +id,
            id_curso: +course,
          }
          await createCursoAluno('/cursoaluno', newCourse, token);
        }
        dispatch(changeAddStudent(false));
        dispatch(changeUser(''));
      } catch (error) {
        console.log(error);
      }
    }

    if (checkStateStudent && !checkStateCourse) {
      try {
        await createAluno('/alunos', newStudent, token);
        dispatch(changeAddStudent(false));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const updateStudent = async () => {
    const updateStudent: IStudent = {
      id: editStudent.id,
      nome,
      email,
      cep,
      cidade: city,
      estado: state,
    };

    if (course) {
      const upCourseStudent: ICourseAluno[] = [{
        id_pessoa: editStudent.id,
        id_curso: +course,
      }];
      
      await updateAluno(
        '/alunos',
        updateStudent,
        token,
      );
      
      await updateCursoAluno('/cursoaluno', upCourseStudent, token);
      dispatch(changeEditStudent(false));
    } else {
      await updateAluno('/alunos', updateStudent, token);
    }
    dispatch(changeAddStudent(false));
  };

  useEffect(() => {
    if (editStudent) {
      setNome(editStudent.nome);
      setEmail(editStudent.email);
      setCep(editStudent.cep);
      setCity(editStudent.cidade);
      setState(editStudent.estado);
    }

    ( async () => {
      try {
        const { token } = JSON.parse(localStorage.getItem('token'));
        setToken(token);
        const data = await getCursos('/cursos', token);
        
        setArrCourses(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [editStudent]);

  return (
    <FormSection>
      <main>
        <FormGroup>
          <TextField
            value={nome}
            onChange={({ target }) => setNome(target.value)}
            variant={inputTheme}
            margin="dense"
            type="text"
            label={!nome && "Digite o nome"}
            style={{
              background: 'yellow',
              border: 'none',
              borderRadius: '10px',
              height: '40px',
              marginLeft: '10px',
            }}
          />
          <TextField
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            variant={inputTheme}
            margin="dense"
            type="text"
            label={ !email && 'Digite um email' }
            style={{
              background: 'yellow',
              border: 'none',
              borderRadius: '10px',
              height: '40px',
              marginLeft: '10px',
            }}
          />
          <TextField
            value={cep}
            onChange={({ target }) => setCep(target.value)}
            variant={inputTheme}
            margin="dense"
            type="text"
            label={!cep && "Digite o cep"}
            style={{
              background: 'yellow',
              border: 'none',
              borderRadius: '10px',
              height: '40px',
              marginRight: '5px',
            }}
          />
          <TextField
            value={city}
            onChange={({ target }) => setCity(target.value)}
            variant={inputTheme}
            margin="dense"
            type="text"
            label={!city && "Digite uma cidade" }
            style={{
              background: 'yellow',
              border: 'none',
              borderRadius: '10px',
              height: '40px',
              marginRight: '5px',
            }}
          />
          <Select
            value={state}
            variant={inputTheme}
            margin="dense"
            label={!state && "Selecione um estado" }
            style={{
              background: 'yellow',
              border: 'none',
              borderRadius: '10px',
              height: '40px',
              marginRight: '5px',
            }}
          >
            {arrState.map((item: string) => (
              <MenuItem
                key={ nanoid() }
                value={item}
                onClick={() => setState(item)}
              >
                {item}
              </MenuItem>
            )) }
          </Select>
          <Select
            value={course}
            variant={inputTheme}
            margin="dense"
            label={!course && "Selecione um curso" }
            style={{
              background: 'yellow',
              border: 'none',
              borderRadius: '10px',
              height: '40px',
              marginRight: '5px',
            }}
          >
            {arrCourses && arrCourses.map((item: ICourse) => (
              <MenuItem
                key={ nanoid() }
                value={item.nome}
                onClick={() => setCourse(item.id)}
              >
                {item.nome}
              </MenuItem>
            ))}
          </Select>
        </FormGroup>
      </main>
      <FooterLoginForm>
        <Button
          className="firstButton"
          fullWidth
          onClick={ editStudent ? updateStudent : submit }
          color="secondary"
          variant={buttonTheme}
        >
          Cadastra
        </Button>
      </FooterLoginForm>
    </FormSection>
  );
};

export default AddStudentForm;
