import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TodoService} from "../todo.service";
import {of,skip,distinctUntilChanged,pluck,take,merge,map,from,interval,range,fromEvent} from "rxjs";
import {debounceTime, filter} from "rxjs/operators";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.sass']
})
export class TodolistComponent implements OnInit{
  /*
  @ViewChild('btn')b:any
  */

  constructor(private ts:TodoService) { }

  /*obs1 = of(7,89,101,203);
  obs2 = interval(1000);
  obs3 = merge(this.obs1,this.obs2);*/

  obs0 = interval(1000).pipe(
    take(2)
  )

  todos:any;
  ngOnInit(): void {
    this.todos = this.ts.todoList

    /*
    let obs = of(7,78,789).pipe(
      filter(
        (data)=>{
          return data>50
        }
      )
    )
    obs.subscribe(
      (data:any)=>{
        console.log(data)
      }
    )
    */

    /*this.obs3.subscribe(
      (data:any)=>{
        console.log(data)
      }
    )*/

    this.obs0.subscribe(
      (data:any)=>{
        console.log(data)
      }
    )

  }

  /*
  ngAfterViewInit(): void {
    fromEvent(this.b.nativeElement,'keyup')
      .pipe(
        debounceTime(1000)
      )
      .subscribe(
        (data:any)=>{
          console.log(data.target.value)
        }
      )
  }
  */

  removeTodo(index:any){
    this.ts.deleteTodo(index)
  }

}
