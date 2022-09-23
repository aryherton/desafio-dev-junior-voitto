import CursoAluno from '../services/AtribuirCursoAlunoService';
import UserServices from '../services/UserServices';
import Jwt from '../services/help/jwt';

class CursoAlunoController {
  async create(req, res) {
    const { authorization } = req.headers;
    
    if (!authorization) {
      return res.status(401)
      .json({
        error: 'Token não enviado'
      });
    }
    
    const checkToken = Jwt.verifyToken(authorization);
    
    if (!checkToken) {
      return res.status(401)
      .json({
        error: 'Token inválido'
      });
    }
    
    const { admin } = await UserServices.findUserByEmail(checkToken.email);
    
    if (!admin) {
      return res.status(401)
      .json({
        error: 'Usuário não autorizado'
      });
    }
    
    try {
      await CursoAluno.execute(req.body);
      return res.status(200).end();
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        error: 'Erro ao cadastrar aluno'
      });
    }
  }
  
  // async update(req, res) {
  //   const {
  //     authorization
  //   } = req.headers;
    
  //   if (!authorization) {
  //     return res.status(401)
  //     .json({
  //       error: 'Token não enviado'
  //     });
  //   }
    
  //   const checkToken = Jwt.verifyToken(authorization);
    
  //   if (!checkToken) {
  //     return res.status(401)
  //     .json({
  //       error: 'Token inválido'
  //     });
  //   }
    
  //   const {
  //     admin
  //   } = await UserServices.findUserByEmail(checkToken.email);
    
  //   if (!admin) {
  //     return res.status(401)
  //     .json({
  //       error: 'Usuário não autorizado'
  //     });
  //   }
    
  //   try {
  //     const aluno = await AlunoService.update(req.body);
  //     return res.status(200).json(aluno);
  //   } catch (error) {
  //     console.log(error.message);
  //     res.status(500).json({
  //       error: 'Erro ao atualizar aluno'
  //     });
  //   }
  // }
  
  // async delete(req, res) {
  //   const {
  //     authorization
  //   } = req.headers;
    
  //   if (!authorization) {
  //     return res.status(401)
  //     .json({
  //       error: 'Token não enviado'
  //     });
  //   }
    
  //   const checkToken = Jwt.verifyToken(authorization);
    
  //   if (!checkToken) {
  //     return res.status(401)
  //     .json({
  //       error: 'Token inválido'
  //     });
  //   }
    
  //   const {
  //     admin
  //   } = await UserServices.findUserByEmail(checkToken.email);
    
  //   if (!admin) {
  //     return res.status(401)
  //     .json({
  //       error: 'Usuário não autorizado'
  //     });
  //   }
    
  //   try {
  //     await AlunoService.delete(req.params);
  //     return res.status(204).end();
  //   } catch (error) {
  //     console.log(error.message);
  //     res.status(500).json({
  //       error: 'Erro ao deletar aluno'
  //     });
  //   }
  // }
}

export default new CursoAlunoController();
