import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/tasks.service'
export interface TableData {
  month: string;
  quantity: number;
  total: number;
}

const TABLE_DATA: TableData[] = [
  { month: 'Enero', quantity: 10, total: 1200 },
  { month: 'Febrero', quantity: 15, total: 1800 },
  { month: 'Marzo', quantity: 20, total: 2400 },
  { month: 'Abril', quantity: 12, total: 1440 },
  { month: 'Mayo', quantity: 8, total: 960 },
];

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: any[] = [];
  constructor(private taskService: TaskService) { }
  data = TABLE_DATA;
  columns: string[] = ['month', 'quantity', 'total'];

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe(
        res => {
          this.tasks = res;
        },
        err => console.log(err)
      )
  }

}