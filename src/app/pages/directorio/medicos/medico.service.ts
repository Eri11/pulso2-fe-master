import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Medico } from './medico';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class MedicosService implements OnInit { 



  constructor(private httpClient: HttpClient) {}

  private baseURL = 'http://localhost/medico';
//  private baseURL = 'http://pulso2back.click/medico';




  ngOnInit(): void {
 
    this.httpClient.get<Medico[]>('http://localhost/medico').subscribe(
      data => {
        this.medicos = data;
        console.log(this.medicos);
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Client-side error occured.");
      } else {
        console.log("Server-side error occured.");
      }
    });
  }
  medicos: Medico[] = [];

  selectedMedico: Medico = {
    nombre: '',
    a_paterno: '',
    a_materno: '',
    correo: '',
    passwd: '',
    tipo_usuario: '',
    ced_profesional: '',
    e_acceso: '',
  };


    //Metodo para solicitar al servidor, por el metodo GET, los usuarios existentes
    getMedico(): Observable<any> {
      const url = `${this.baseURL}`;
      return this.httpClient.get(url);
    }
  
    createMedico(medico: Medico): Observable<any> {
      return this.httpClient.post(`${this.baseURL}`, medico);
    }
  
    editMedico(medico: Medico): Observable<any> {
      return this.httpClient.put(`${this.baseURL}/${medico.id}`, medico);
    }
  
    deleteMedico(medico: Medico): Observable<any> {
      const id = medico.id;
      return this.httpClient.delete(`${this.baseURL}/` + id);
    }

}
