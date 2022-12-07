import { Component, Input, OnInit } from '@angular/core';
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

  constructor(){}

  ngOnInit(): void {
    
  }

  /* metodo para eliminar tarea */
  deleteTask(){
    console.log('Delete a task', this.task?.title)
  }

}
