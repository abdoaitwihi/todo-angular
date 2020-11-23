import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared';

interface todos {
  id: number;
  done: boolean;
  text: string;
  focus?: boolean;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('todoText') todoTextInput: ElementRef;
  today: number = Date.now();
  toDos: todos[] = [
    {
      id: 0,
      done: true,
      text: 'todo one',
      focus: false,
    },
    {
      id: 1,
      done: false,
      text: 'todo two',
      focus: true,
    },
  ];
  lastId: number;
  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getTodos();
    setTimeout(() => {
      this.focusOnInput();
    }, 300);
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
  focusOnInput() {
    this.todoTextInput.nativeElement.focus();
  }
  getTodos() {
    if (JSON.parse(localStorage.getItem('todos')) != null) {
      this.toDos = JSON.parse(localStorage.getItem('todos'));
    }
  }
  addTodo(todoText: string) {
    this.focusOnInput();
    if (!todoText) {
      let snackBarRef = this._snackBar.open(
        'please write something to do ',
        'ok',
        {
          duration: 1000,
        }
      );
      snackBarRef.onAction().subscribe(() => {
        this.focusOnInput();
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
  updateTodo(target) {
    this.toDos.forEach((todo) => {
      if (todo.id === +target.id) {
        todo.text = target.value;
      }
    });
    this.saveTodos();
  }
  deleteTodo(id: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { message: 'are you sure you wanna delte this to do' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.toDos = this.toDos.filter((todo) => todo.id - id);
        this.saveTodos();
        this._snackBar.open('you deleted a todo', '', {
          duration: 1000,
        });
      }
    });
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
