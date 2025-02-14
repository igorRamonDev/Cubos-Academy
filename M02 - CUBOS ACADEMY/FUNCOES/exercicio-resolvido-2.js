const usuario = []

function verificaIdade (idade) {
    usuario[usuario.lenght] = {
        idade,
    }
    if (idade <= 21) {
        let status = "jovem"
        console.log(status)
    } else if (idade >= 22 && idade <= 65) {
        status = "adulto(a)"
        console.log(status)
    } else if (idade >= 66) {
        status = "idoso(a)"
        console.log(status)
    } else {
        return "invalido"
        console.log(invalido)
    }
}

verificaIdade(27)