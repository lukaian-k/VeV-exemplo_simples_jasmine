describe('Class: ModificadorDeTom', () => {
    let modificadorDeTom

    beforeEach(() => {
        modificadorDeTom = new ModificadorDeTom()
    })

    it('deve aumentar os semi tons corretamente', () => {
        expect(modificadorDeTom.aumentarSemiTom('C', 1)).toEqual('C#')
        expect(modificadorDeTom.aumentarSemiTom('F', 3)).toEqual('G#')
        expect(modificadorDeTom.aumentarSemiTom('B', 2)).toEqual('C#')
    })

    it('deve diminuir os semi tons corretamente', () => {
        expect(modificadorDeTom.diminuirSemiTom('C#', 1)).toEqual('C')
        expect(modificadorDeTom.diminuirSemiTom('G#', 3)).toEqual('F')
        expect(modificadorDeTom.diminuirSemiTom('C#', 2)).toEqual('B')
    })
})
