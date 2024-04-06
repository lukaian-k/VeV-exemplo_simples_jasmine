class ModificadorDeTom {
    constructor() {
        this.notas = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    }

    aumentarSemiTom(nota, semiTons) {
        const posicaoDaNota = this.notas.indexOf(nota)
        const posicaoDaNovaNota = (posicaoDaNota + semiTons) % this.notas.length

        return this.notas[posicaoDaNovaNota]
    }

    diminuirSemiTom(nota, semiTons) {
        const posicaoDaNota = this.notas.indexOf(nota)
        let posicaoDaNovaNota = (posicaoDaNota - semiTons) % this.notas.length

        if (posicaoDaNovaNota < 0) {
            posicaoDaNovaNota = this.notas.length + posicaoDaNovaNota
        }

        return this.notas[posicaoDaNovaNota]
    }
}
