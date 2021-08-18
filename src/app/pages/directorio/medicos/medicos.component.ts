import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';
import { Medico } from './medico';
import { MedicosService } from './medico.service';

@Component({
  selector: 'ngx-medicos',
  //templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss'],
  template: `
    <ng2-smart-table 
    [settings]="settings" 
    [source]="source"
 
    (createConfirm)="onCreateConfirm($event)"></ng2-smart-table>
  `
/* 
  (deleteConfirm)="onDeleteConfirm($event)"
  (editConfirm)="onSaveConfirm($event)" */
})
export class MedicosComponent  {
  medico: Medico;
  source: ServerDataSource;

    constructor(http: HttpClient, private medicosService: MedicosService) {
      this.source = new ServerDataSource(http, { endPoint: 'http://localhost/medico' });
      this.medico = new Medico();
    }


  settings = {   
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i (click)="create()" class="nb-checkmark" ></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark" ></i> ',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
        nombre: {
        title: 'Nombre',
        type: 'string',
        filter: false,
        
      },
      a_paterno: {
        title: 'Apellido Paterno',
        type: 'string',
        filter: false
      },
      a_materno: {
        title: 'Apellido Materno',
        type: 'string',
        filter: false

      },
      correo: {
        title: 'Correo',
        type: 'string',
        filter: false
      },

      ced_profesional: {
        title: 'CED',
        type: 'string',
        filter: false

      },
    },
  };

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'nombre',
        search: query
      },
      {
        field: 'a_paterno',
        search: query
      },
      {
        field: 'email',
        search: query
      }
    ], false); 
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }
  /*
  onCreateConfirm(event) {
    const data = {"nombre" : event.newData.employee_name,
                "a paterno" : event.newData.employee_salary
                };
    this.medicosService.createMedico(data).subscribe();        
    }

*/

  
  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      //call to remote api, remember that you have to await this
      const data = {"nombre" : event.newData.nombre,
                "a_paterno" : event.newData.a_paterno
                };
      event.confirm.resolve(this.create(data));
    } else {
      event.confirm.reject();
    }
  }

  create(data: any) {
    const medicoData = {
      nombre: data.nombre,
      a_paterno: data.a_paterno
    };
    this.medicosService.createMedico(medicoData).subscribe();
   // this.get();
  // return "lol"
  }

    
}