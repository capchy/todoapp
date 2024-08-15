import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todobar',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './todobar.component.html',
  styleUrl: './todobar.component.css'
})
export class TodobarComponent {
  taskarray =[{taskname:'brush teeth',iscomplete: false}]
  load(taskform:NgForm) {
    this.taskarray.push({taskname:taskform.controls['task'].value, iscomplete:false})
    
    taskform.reset();
  }
  delete(i:number){
    // console.log(i);
    this.taskarray.splice(i,1);
    }
  oncheck(i:number){
    this.taskarray[i].iscomplete=!this.taskarray[i].iscomplete

  }
  
}
