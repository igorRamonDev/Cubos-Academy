type TPessoa = {
	nome: string
	sobrenome: string
	nomeCompleto: () => void
}

type TPessoa2 = {
	nome: string
	sobrenome: string
	nomeCompleto: (idade: number) => void
}

const pessoa: TPessoa = {
	nome: 'Guido',
	sobrenome: 'Cerqueira',
	nomeCompleto: function () {
		console.log(`${pessoa.nome} ${pessoa.sobrenome}`)
	}
}

const pessoa2: TPessoa2 = {
	nome: 'João',
	sobrenome: 'Cerqueira',
	nomeCompleto: function (idade: number) {
		console.log(`${this.nome} ${this.sobrenome}, ${idade} anos`)
	}
}

pessoa2.nomeCompleto(30)