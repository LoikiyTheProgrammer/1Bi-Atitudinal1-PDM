let aluno01 = { // objeto aluno01
    nome: "João Felipe", // atributo nome
    idade: 22, // atributo idade
    cursando: ["Algebra", "Informatica", "Farmacia"], // atributo cusrando
    presença: ["08-03-2023", "09-03-2023"], // atributo presença
    ra: "2253942", // atributo ra
}

function validaCadastro(){ //função para validar o cadastro do aluno
    if(aluno01.nome.length<10){ // esse if verifica se o nome tem menos que 10 caracteres
        console.log("Erro: O nome do aluno deve ter no mínimo 10 caracteres") // mensagem de erro pro nome
    }

    if(aluno01.idade<14){ // esse if verifica se a idade é menor que 14
        console.log("Erro: A idade do aluno deve ser maior que 14") // mensagem de erro pra idade
    }

    if(aluno01.cursando[3] === "Undefined"){ // esse if verifica se a quarta posição da array cursando esta undefined
        console.log("Erro: O aluno deve estar cursando no mínimo 3 matéria") // mensagem de erro pro cursando
    }

    if(aluno01.presença[2] === "Undefined"){ // esse if verifica se a 3 posição da array presença esta undefined
        console.log("Erro: O aluno deve ter no mínimo 2 presenças") // mensagem de erro pra presença
    }

    if(aluno01.ra.length<7){ // esse if verifica se o ra tem menos que 7 caracteres
        console.log("Erro: O RA do aluno deve ter 7 caracteres") // mensagem de erro pro ra
    }

    return validaCadastro
}

let aluno02 = { // objeto aluno02
    nome: "Fabio Andrade", // atributo nome
    idade: 13, // atributo idade
    cursando: ["Algebra", "Informatica"], // atributo cusrando
    presença: ["08-03-2023"], // atributo presença
    ra: "2253", // atributo ra
}

function validaCadastro(){ //função para validar o cadastro do aluno
    if(aluno02.nome.length<10){ // esse if verifica se o nome tem menos que 10 caracteres
        console.log("Erro: O nome do aluno deve ter no mínimo 10 caracteres") // mensagem de erro pro nome
    }

    if(aluno02.idade<14){ // esse if verifica se a idade é menor que 14
        console.log("Erro: A idade do aluno deve ser maior que 14") // mensagem de erro pra idade
    }

    if(aluno02.cursando[3] == "Undefined"){ // esse if verifica se a quarta posição da array cursando esta undefined
        console.log("Erro: O aluno deve estar cursando no mínimo 3 matéria") // mensagem de erro pro cursando
    }

    if(aluno02.presença[2] == "Undefined"){ // esse if verifica se a 3 posição da array presença esta undefined
        console.log("Erro: O aluno deve ter no mínimo 2 presenças") // mensagem de erro pra presença
    }

    if(aluno02.ra.length<7){ // esse if verifica se o ra tem menos que 7 caracteres
        console.log("Erro: O RA do aluno deve ter 7 caracteres") // mensagem de erro pro ra
    }

    return validaCadastro
}