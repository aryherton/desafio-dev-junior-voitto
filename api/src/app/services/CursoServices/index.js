import Curso from '../../models/Curso';

class CursoServices {
  static async created(obj_curso) {
    const curso = await Curso
    .create(obj_curso);
    return curso;
  }
  
  static async findAll() {
    const cursos = await Curso.findAll();
    return cursos;
  }
  
  static async update(curso) {
    const { id } = curso;
    await Curso.update(curso, {
      where: {
        id
      }
    });
    return curso;
  }
  
  static async delete({ id }) {
    await Curso.destroy({
      where: {
        id
      }
    });
  }
}

export default CursoServices;