var Aluno1 = new Object();
Aluno1.RA = '0030481823038'
Aluno1.Nome = 'Leonardo Henrique Rodrigues Pinheiro'
console.log(Aluno1)

var Aluno1 = {RA: '0030481823038', Nome: 'Leonardo Henrique Rodrigues Pinheiro'};
console.log(Aluno1)

function Aluno(RA, Nome) {
    this.RA = RA;
    this.Nome = Nome;
}

var Aluno1 = new Aluno('0030481823038','Leonardo Henrique Rodrigues Pinheiro');
console.log(Aluno1)