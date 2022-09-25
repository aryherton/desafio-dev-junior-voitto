import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import {
  Container,
  Table,
  Head,
  Item,
  BodyLine,
  Message,
  TableMobile,
  Separator
} from './styles';
import { toast } from 'react-toastify';
import useWindowSize from '@/hooks/useWindowSize';
import { Button } from '@material-ui/core';
import { buttonTheme } from '@/utils/Config';
import { deleteAluno } from '@/services/api';
import { changeAddStudent, changeEditStudent } from '../../../../redux/slice/studentSlice';

const StudentTable: React.FC = () => {
  const dispatch = useDispatch();
  const [students, setStudents] = useState<IStudent[]>([]);
  const mobile = useWindowSize().width < 900;
  const arrStudent = useSelector<IStudent[]>((state: any) => {
    return state.student.arrStudents;
  }) as IStudent[];
  const user = useSelector((state: any) => state.user.user);
  
  
  const openCreateStudentModal = (): void => {
    dispatch(changeAddStudent(true));
  };
  
  const editStud = async (idStudent: number) => {
    const studentsEdit = arrStudent
    .filter((student) => student.id === idStudent);
    dispatch(changeEditStudent(studentsEdit[0]));
    dispatch(changeAddStudent(true));
  }
  
  const deleteStudent = async (id: number) => {
    if (user.admin) {
      try {
        const { token } = JSON.parse(localStorage.getItem('token'));
        await deleteAluno(`/alunos/${id}`, token);
        const newArrStudents = students.filter((student) => student.id !== id);
        setStudents(newArrStudents);
      } catch (error) {
        toast.error('Erro ao deletar aluno!');
      }
    }
  };

  useEffect(() => setStudents(arrStudent), [arrStudent, user]);

  return (
    <Container>
      <header>
        <Button
          fullWidth
          onClick={() => openCreateStudentModal()}
          color="primary"
          variant={buttonTheme}
        >
          Adicionar usuário
        </Button>
      </header>

      {students ? (
        !mobile ? (
          <>
            <Table>
              <Head>
                <Item> ID </Item>
                <Item> Nome </Item>
                <Item> E-Mail </Item>
                <Item> cep </Item>
                <Item> estado </Item>
                <Item> cidade </Item>
                <Item> EDITAR </Item>
                <Item> EXCLUIR </Item>
              </Head>
              {students &&
                students.map((student, key) => (
                  <BodyLine key={key}>
                    <Item> {student.id} </Item>
                    <Item> {student.nome} </Item>
                    <Item> {student.email} </Item>
                    <Item> {student.cep} </Item>
                    <Item> {student.estado} </Item>
                    <Item> {student.cidade} </Item>
                    <Item>
                      <button
                        onClick={ () => editStud(student.id) }
                      >
                        editar
                      </button>
                    </Item>
                    <Item>
                      <button
                        onClick={ () => deleteStudent(student.id) }
                      >
                        excluir
                      </button>
                    </Item>
                  </BodyLine>
                ))}
            </Table>
          </>
        ) : (
          <>
            {students &&
              students.map((student: IStudent) => (
                <TableMobile key={ nanoid() }>
                  <Head>
                    <Item> ID </Item>
                  </Head>
                  <BodyLine key={nanoid()}>
                    <Item> {student.id} </Item>
                  </BodyLine>
                  <Head>
                    <Item> Nome </Item>
                  </Head>
                  <BodyLine key={nanoid()}>
                    <Item> {student.nome} </Item>
                  </BodyLine>
                  <Head>
                    <Item> Email </Item>
                  </Head>
                  <BodyLine key={nanoid()}>
                    <Item> {student.email} </Item>
                  </BodyLine>
                  <Head>
                    <Item> Cep </Item>
                  </Head>
                  <BodyLine key={nanoid()}>
                    <Item> {student.cep} </Item>
                  </BodyLine>
                  <Head>
                    <Item> Estado</Item>
                  </Head>
                  <BodyLine key={nanoid()}>
                    <Item> {student.estado} </Item>
                  </BodyLine>
                  <Head>
                    <Item>Cidade </Item>
                  </Head>
                  <BodyLine key={nanoid()}>
                    <Item> {student.cidade} </Item>
                  </BodyLine>
                </TableMobile>
              ))}
          </>
        )
      ) : (
        <Message>
          <p>Você ainda não fez nenhuma alteração</p>
        </Message>
      )}
    </Container>
  );
};

export default StudentTable;
