import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit{
  /* TODO: reformular como una lista de tareas */
  //creamos tareas que habra que pasar al componente hijo task
  task1: ITask = {
    title: 'Task 1',
    description: 'Description 1',
    completed: false,
    level: Levels.Info //importamos levels
  }
  task2: ITask = {
    title: 'Task 2',
    description: 'Description 2',
    completed: true,
    level: Levels.Urgent //importamos levels
  }

  constructor(){}
  
  ngOnInit(): void {
    
  }

  /* metodo que recibe una tarea */
  deleteTask(task: ITask){
    /* TODO: Sustituir por un Splice para eliminar tarea de la lista de tareas */
    alert(`Se procede a eliminar la tarea : ${task.title}`);
  }

}