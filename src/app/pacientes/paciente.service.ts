import { Injectable } from '@angular/core';
import{HttpClient}from 'angular/common/http'
import { Observable } from 'rxjs';
import { Paciente } from './paciente';
import { environment } from '../../environments/environment.development';
@Injectable({provideIn: 'root'}

)


export class PacienteService {
    export class PacienteService {
        private apiUrl = environment.baseUrl + 'courses.json';
      
        constructor(private http: HttpClient) { }
      
        getPacientes(): Observable<Paciente[]> {
          return this.http.get<Paciente[]>(this.apiUrl);
        }
      }
constructor(private http: HttpClient) { }

}
