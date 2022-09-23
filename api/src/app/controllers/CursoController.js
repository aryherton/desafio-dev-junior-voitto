import CursoService from '../services/CursoServices';
import UserServices from '../services/UserServices';
import Jwt from '../services/help/jwt';

class CursoController {
  async findAll(req, res) {
    try {
      const cursos = await CursoService.findAll()
      res.status(200).json(cursos);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: 'Erro ao listar cursos'
      });
    }
  }
  
  async findByIdCurso(req, res) {
    try {
      const curso = await CursoService.findByIdCurso(req.params);
      return res.status(200).json(curso);
    } catch (error) {}
  }
  
  async create(req, res) {
    try {
      const cursos = await CursoService.created(req.body);
      return res.status(200).json(cursos);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        error: 'Erro ao cadastrar cursos'
      });
    }
  }
  
  async update(req, res) {
    try {
      const cursos = await CursoService.update(req.body);
      return res.status(200).json(cursos);
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        error: 'Erro ao atualizar cursos'
      });
    }
  }
  
  async delete(req, res) {
    try {
      await CursoService.delete(req.params);
      return res.status(204).end();
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        error: 'Erro ao deletar cursos'
      });
    }
  }
}

export default new CursoController();
