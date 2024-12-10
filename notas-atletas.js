class NotasAtletas {
    constructor(objAtletas){
        this.objAtletas = objAtletas
    }

    obterMaiorNota(){
        return this.objAtletas[this.objAtletas.length - 1]
    }

    obterMenorNota(){
        return this.objAtletas[0]
    }

    obterRelatorioAtletas(){
        

        for (let i = 0; i < this.objAtletas.length; i++) {
            let notasOrdenadas = this.objAtletas[i].notas.sort((a, b) => a - b);
            let notasRecortadas = notasOrdenadas.slice(1,4);
            console.log(`Atleta: ${this.objAtletas[i].nome}\nNotas Obtidas: ${notasOrdenadas}\nMédia Válida: ${this.mediaNotas(notasRecortadas)}\n` );
            
        }

    }

    somaNotas(notas) {
        let somaNotas = 0;
        notas.forEach(nota => {
            
            
            somaNotas += nota;
            
        });
    
        return somaNotas;
    }

    mediaNotas(notas){
        return this.somaNotas(notas) / notas.length
    }



}

let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
];

let notas = new NotasAtletas(atletas);
notas.obterRelatorioAtletas();
