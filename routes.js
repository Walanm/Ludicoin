const routes = require('next-routes')();

routes
    .add('/cadastroProfessor', '/cadastroProfessor')
    .add('/cadastroAluno', '/cadastroAluno')
    .add('/professor/:endereco', '/professor/indexProfessor')
    .add('/professor/:endereco/disciplinas/new', '/professor/disciplinas/new')
    .add('/professor/:endereco/disciplinas/show', '/professor/disciplinas/show')
    .add('/professor/:endereco/disciplinas/:id/update', '/professor/disciplinas/update')
    .add('/professor/:endereco/professores/show', '/professor/professores/show')
    .add('/professor/:endereco/professores/new', '/professor/professores/new')
    .add('/professor/:endereco/turmas/show', '/professor/turmas/show')
    .add('/professor/:endereco/turmas/new', '/professor/turmas/new')
    .add('/professor/:endereco/turmas/:id/update', '/professor/turmas/update')
    .add('/professor/:endereco/turmas/showall', '/professor/turmas/showall')
    .add('/professor/:endereco/turmas/:id/atividades/show', '/professor/turmas/atividades/show')
    .add('/professor/:endereco/turmas/:id/atividades/new', '/professor/turmas/atividades/new')
    .add('/professor/:endereco/turmas/:id/atividades/cotacao', '/professor/turmas/atividades/cotacao')
    .add('/professor/:endereco/turmas/:id/participantes/matriculados', '/professor/turmas/participantes/matriculados')
    .add('/professor/:endereco/turmas/:id/participantes/matricula', '/professor/turmas/participantes/matricula')
    .add('/professor/:endereco/turmas/:id/participantes/todasNotas', '/professor/turmas/participantes/todasNotas')
    .add('/professor/:endereco/turmas/:id/atividades/:idatividade/notas', '/professor/turmas/atividades/notas')
    .add('/aluno/:endereco', '/aluno/indexAluno')
    .add('/aluno/:endereco/matriculaAluno', '/aluno/matriculaAluno')
    .add('/aluno/:endereco/turma/:id', '/aluno/turma')
    .add('/aluno/:endereco/turma/:id/verAlunos', '/aluno/verAlunos')
    .add('/aluno/:endereco/boletim', '/aluno/boletim');

module.exports = routes;
