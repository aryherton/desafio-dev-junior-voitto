import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

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

const StudentTable: React.FC = () => {
  const [students, setStudents] = useState<IStudent[]>([]);
  const mobile = useWindowSize().width < 900;
  const arrStudent = useSelector<IStudent[]>((state: any) => {
    return state.student.arrStudents;
  }) as IStudent[];
  const user = useSelector((state: any) => state.user.user);
  console.log("user");
  useEffect(() => setStudents(arrStudent), [arrStudent]);

  const openCreateStudentModal = (): void => {
    alert('Abrir modal de criação de aluno');
  };

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
                      <button>editar</button>
                    </Item>
                    <Item>
                      <button
                        onClick={() => deleteStudent(student.id)}
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
              students.map((student: IStudent, key: React.Key) => (
                <TableMobile>
                  <Head>
                    <Item> ID </Item>
                  </Head>
                  <BodyLine key={key}>
                    <Item> {student.id} </Item>
                  </BodyLine>
                  <Head>
                    <Item> Nome </Item>
                  </Head>
                  <BodyLine key={key}>
                    <Item> {student.nome} </Item>
                  </BodyLine>
                  <Head>
                    <Item> Email </Item>
                  </Head>
                  <BodyLine key={key}>
                    <Item> {student.email} </Item>
                  </BodyLine>
                  <Head>
                    <Item> Cep </Item>
                  </Head>
                  <BodyLine key={key}>
                    <Item> {student.cep} </Item>
                  </BodyLine>
                  <Head>
                    <Item> Estado</Item>
                  </Head>
                  <BodyLine key={key}>
                    <Item> {student.estado} </Item>
                  </BodyLine>
                  <Head>
                    <Item>Cidade </Item>
                  </Head>
                  <BodyLine key={key}>
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
