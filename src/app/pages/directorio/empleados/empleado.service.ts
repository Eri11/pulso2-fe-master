import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from './empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  
  //constructor( private http: HttpClient) { }

  constructor(private httpClient: HttpClient) {}
  private baseURL = 'http://localhost/empleado';
  empleados: Empleado[] = [];
/*
  selectedPaciente: Empleado = {
    nombre: '',
    a_paterno: '',
    a_materno: '',
    correo: '',
    passwd: '',
    tipo_usuario: ''
  };*/

  //Metodo para solicitar al servidor, por el metodo GET, los usuarios existentes
  getEmpleado(): Observable<any> {
    const url = `${this.baseURL}`;
    return this.httpClient.get(url);
  }

  createEmpleado(empleado : Empleado): Observable<any> {
    return this.httpClient.post(`${this.baseURL}`, empleado);
  }

  editEmpleado(empleado : Empleado): Observable<any> {
    const id = empleado.id;
    return this.httpClient.patch(`${this.baseURL}/` + id , empleado);
  }

  deleteEmpleado(empleado : Empleado): Observable<any> {
    const id = empleado.id;
    return this.httpClient.delete(`${this.baseURL}/` + id);
  }
}
