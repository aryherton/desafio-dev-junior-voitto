interface ICursoAlunoses {
  id_pessoa: number;
  id_curso: number;
};

interface ICourse {
  id: number;
  nome: string;
  CursoAlunos: ICursoAlunoses;
};