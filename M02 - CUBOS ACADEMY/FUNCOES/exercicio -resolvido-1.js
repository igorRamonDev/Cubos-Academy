const usuarios = [];

function cadastrarUsuario (usuario) {
    usuarios[usuarios.length] = {
    nome: usuario.nome,
    email: usuario.idade,
    profissao: usuario.profissao,
    altura: usuario.altura
    }   
    console.log(`Ola! meu nome e ${usuario.nome}, sou um jovem de ${usuario.idade} anos, sou ${usuario.profissao} e tenho ${usuario.altura} de altura.`);
}

const maria = {
    nome: "Maria",
    idade: 30,
    profissao: "Desenvolvedora",
    altura: 1.7,
};

cadastrarUsuario(maria);
