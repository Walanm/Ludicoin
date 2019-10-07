module.exports = {
    webpack(cfg) {
      cfg.plugins = cfg.plugins.filter(plugin => {
        if (plugin.constructor.name === "UglifyJsPlugin") {
          return false;
        } else {
          return true;
        }
      });
  
      return cfg;
    },

    async exportPathMap () {
      // we fetch our list of posts, this allow us to dynamically generate the exported pages
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_page=1'
      )
      const postList = await response.json()
  
      // tranform the list of posts into a map of pages with the pathname `/post/:id`
      const pages = postList.reduce(
        (pages, post) =>
          Object.assign({}, pages, {
            [`/post/${post.id}`]: {
              page: '/post',
              query: { id: post.id }
            }
          }),
        {}
      )
  
      // combine the map of post pages with the home
      return Object.assign({}, pages, {
        '/': { page: '/' }
      })
    }
  
};

/*
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
*/