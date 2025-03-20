import { Component, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  taskInput = '';
  task = signal<string | undefined>(undefined);
  tasks = signal([{ name: 'Task 1' }, { name: 'Task 2' }, { name: 'Task 3' }]);
  addTask() {
    this.tasks.update((taskList) => {
      const newTask = { name: this.taskInput };
      let newTaskList = [...taskList, newTask];
      return newTaskList;
    });
  }
}
