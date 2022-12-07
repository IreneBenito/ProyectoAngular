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
    completed: false,
    level: Levels.Urgent //importamos levels
  }

  constructor(){}
  
  ngOnInit(): void {
    
  }

}