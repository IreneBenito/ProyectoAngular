import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{

  /* usamos undefined para no ponerle un valor estricto , en este caso ponemos que es o indefinido o un ITask
  Ej. definir: { title : '' , description: ''}
  */
  @Input() task: ITask | undefined ; 
  /* encargado de emitir la tarea que se tiene que borrar */
  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>();


  constructor(){}

  ngOnInit(): void {
    
  }

  /* metodo para eliminar tarea */
  deleteTask(){
    //notificamos al componente padre la tarea a eliminar
    this.delete.emit(this.task); 
  }

}
