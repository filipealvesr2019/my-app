const { getvideoaula } = require("..");

describe("getvideoaula", () => {
    it("deve retornar uma video aula com o mesmo nome", () => {
        const nomeAula = 'testes unitarios aula 1';
        const videoaula = getvideoaula(nomeAula);
        const urlAulaTeste = "www.testeaula.com/01";
        console.log(videoaula)

        expect(videoaula.nome).toBe(nomeAula);
        expect(videoaula.url).toBe(urlAulaTeste);
    })
    it("não deve ser capar de retornar a video aula caso o nome seja diferente do nome dado",() =>  {
        const nomeAula = 'Aula não existe';
        const videoaula = getvideoaula(nomeAula);
     
        expect(videoaula.ok).toBe(false);
        expect(videoaula.erro).toBe("aula não encontrada com esse nome: " + nomeAula);
    })
});