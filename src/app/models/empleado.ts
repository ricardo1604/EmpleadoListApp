export class Empleado {
    archivo: number;
    nombre: string;
    apellido: string;
    sexo: string;
    salario: number;

    constructor(archivo: number, nombre: string, apellido: string, sexo: string, salario: number) {
        this.archivo = archivo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
        this.salario = salario;
    }
}