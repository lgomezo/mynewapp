import { Component, OnInit } from '@angular/core';
import { Paciente } from './paciente';
import { dataPacientes } from './dataPacientes';
@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {
  

  pacientes: Array<Paciente>=[]
  constructor() { }
  getPacienteList():Array<paciente>(
    return dataPacientes;
  )

  ngOnInit() {
  }
this.pacientes= this.getPacienteList
}
