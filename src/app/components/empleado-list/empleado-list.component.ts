import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {
  listEmpleado: Empleado[] = [
    {archivo: 1, nombre: 'Juan',  apellido: 'Perez', sexo: 'Masculino', salario: 2500},
    {archivo: 2, nombre: 'Maria',  apellido: 'Lopez', sexo: 'Femenino', salario: 1520},
    {archivo: 3, nombre: 'Pedro',  apellido: 'Hernandez', sexo: 'Masculino', salario: 2874},
    {archivo: 4, nombre: 'Antonia',  apellido: 'Martinez', sexo: 'Femenino', salario: 5000},
    {archivo: 5, nombre: 'Andrea',  apellido: 'Escamilla', sexo: 'Femenino', salario: 1950},
    {archivo: 6, nombre: 'Andrea',  apellido: 'Moreno', sexo: 'Femenino', salario: 850}
  ]

  radioButtonSeleccionado = 'Todos';

  constructor() {}

  ngOnInit(): void {}

  obtenerTotalEmpleados(): number {
    return this.listEmpleado.length;
  }

  obtenerTotalFemeninos(): number {
    return this.listEmpleado.filter(list => list.sexo === 'Femenino').length
  }

  obtenerTotalMasculinos(): number {
    return this.listEmpleado.filter(list => list.sexo === 'Masculino').length
  }

  empleadoCountRadioButtonChange(radioButtonSelec: string): void {
    this.radioButtonSeleccionado = radioButtonSelec;
  }



}
