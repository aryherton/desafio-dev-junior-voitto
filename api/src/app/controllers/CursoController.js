import CursoService from '../services/CursoServices';

class CursoController {
    async findAll(_req, res) {
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

    async read(req, res) {
        // TODO
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
            res.status(500).json({
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
