class escuela{
    cursos = ['Matematica','Lengua']
    cursoMatematica
    cursoLengua
    constructor(cursoMatematica:string,cursoLengua:string){
        this.cursoMatematica = cursoMatematica
        this.cursoLengua = cursoLengua
    }
    verListaCurso(){
        return this.cursos
    }
    verAlumnosPorCursos(){
        console.info('el alumno '+this.cursoMatematica +' esta en matematica' )
        console.info('el alumno '+this.cursoLengua +' esta en lengua ' )

    }
}
let alumnos = new escuela('Matias Gomez','Gonzalo Alvares') 
console.info(alumnos.verListaCurso())
alumnos.verAlumnosPorCursos()
