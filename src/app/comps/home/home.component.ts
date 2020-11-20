import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

interface todos {
  id: number;
  done: boolean;
  text: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public cards = [
    {
      title: 'card one',
      img: 'img1.jpg',
    },
    {
      title: 'card two',
      img: 'img2.JPG',
    },
    {
      title: 'card three',
      img: 'img3.jpg',
    },
  ];
  @ViewChild('todoText') todoTextInput: ElementRef;
  toDos: todos[] = [
    {
      id: 0,
      done: true,
      text: 'todo one',
    },
    {
      id: 1,
      done: false,
      text: 'todo two',
    },
  ];
  lastId: number;
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getTodos();
  }
  updateId() {
    if (this.toDos === null) {
      this.lastId = 0;
    } else {
      if (this.toDos.length === 0) {
        this.lastId = 0;
      } else {
        this.lastId = this.toDos.slice(-1)[0].id + 1;
      }
    }
  }
  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.toDos));
  }
  getTodos() {
    if (JSON.parse(localStorage.getItem('todos')) != null) {
      this.toDos = JSON.parse(localStorage.getItem('todos'));
    }
  }
  addTodo(todoText: string) {
    if (!todoText) {
      let snackBarRef = this._snackBar.open(
        'please write something to do ',
        'ok',
        {
          duration: 500,
        }
      );
      snackBarRef.onAction().subscribe(() => {
        console.log('hi');
      });
      return;
    }
    console.log(todoText);
    this.updateId();
    let myId: number = this.lastId;
    let myTodo: todos = {
      id: myId,
      done: false,
      text: todoText,
    };
    this.todoTextInput.nativeElement.value = '';
    this.toDos.push(myTodo);
    this.saveTodos();
  }
  deleteTodo(id: number) {
    this.toDos = this.toDos.filter((todo) => todo.id - id);
    this.saveTodos();
  }
  toDoDone(id: number) {
    this.toDos.forEach((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
    });
    this.saveTodos();
  }
}
