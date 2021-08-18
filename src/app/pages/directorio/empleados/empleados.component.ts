import { HttpClient, } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource, ServerDataSource } from 'ng2-smart-table';
import { Empleado } from './empleado';
import { EmpleadoService } from './empleado.service';


@Component({
  selector: 'ngx-empleados',
  styleUrls: ['./empleados.component.scss'],
  template: `
  <ng2-smart-table 
  [settings]="settings" 
  (createConfirm)="onCreateConfirm($event)" 
  (editConfirm)="onEditConfirm($event)"
  (deleteConfirm)="onDeleteConfirm($event)"  
  [source]="source">
  </ng2-smart-table>
  `
})

export class EmpleadosComponent {

  empleado: Empleado;
  source: ServerDataSource;

    constructor(http: HttpClient, private empleadoService: EmpleadoService) {
      this.source = new ServerDataSource(http, { endPoint: 'http://localhost/empleado' });
      this.empleado = new Empleado();
    }


  settings = {   
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark" ></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark" ></i> ',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
      
    },
    columns: {
      id: {
        title: '_id',
        type: 'string',
        filter: false,
        editable: false,
        
      },
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
      passwd: {
        title: 'passwd',
        type: 'string',
        filter: false

      },
      tipo_usuario: {
        title: 'tipo_usuario',
        type: 'string',
        filter: false

      },
    },
  };

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      const id = {"id" : event.data.id};
      event.confirm.resolve(this.delete(id));
    } else {
      event.confirm.reject();
    }
  }
  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      //call to remote api, remember that you have to await this
      const data = {"nombre" : event.newData.nombre,
                "a_paterno" : event.newData.a_paterno,
                "a_materno": event.newData.a_materno,
                "correo": event.newData.correo,
                "passwd": event.newData.passwd,
                "tipo_usuario": event.newData.tipo_usuario
                };
      event.confirm.resolve(this.create(data));
    } else {
      event.confirm.reject();
    }
  }
  onEditConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      //call to remote api, remember that you have to await this
      const newdata = {"id": event.data.id ,nombre : event.newData.nombre,
                a_paterno : event.newData.a_paterno
                };
      event.confirm.resolve(this.edit(newdata));
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
  

  
  

  create(data: any) {
    const medicoData = {
      nombre: data.nombre,
      a_paterno: data.a_paterno,
      a_materno: data.a_materno,
      correo: data.correo,
      passwd: data.passwd,
      tipo_usuario: data.tipo_usuario
    };
    this.empleadoService.createEmpleado(medicoData).subscribe();
  }

  edit(data: any) {
    const medicoData = {
      id: data.id,
      nombre: data.nombre,
      a_paterno: data.a_paterno,
      a_materno: data.a_materno,
      correo: data.correo
    };
    this.empleadoService.editEmpleado(medicoData).subscribe();
  }

  delete(id_m: any) {
    this.empleadoService.deleteEmpleado(id_m).subscribe();
    //this.get();
  }
}