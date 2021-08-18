import { HttpClient, } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource, ServerDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-medicos',
  //templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss'],
  template: `
    <ng2-smart-table 
    [settings]="settings" 
    [source]="source"
    (deleteConfirm)="onDeleteConfirm($event)"
    (editConfirm)="onSaveConfirm($event)"
    (createConfirm)="onCreateConfirm($event)"></ng2-smart-table>
  `
})
export class MedicosComponent  {

  source: ServerDataSource;

    constructor(http: HttpClient) {
      this.source = new ServerDataSource(http, { endPoint: 'http://localhost/medico' });
    }


  settings = {   
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate:true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
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
        filter: false,
        editable: false,
        addable: false,

      },
    },
  };

  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }


  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['nombre'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
      event.newData['nombre'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  /* 
  
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  } */

 /*  onSearch(query: string = '') {
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
  }*/
  


    
}