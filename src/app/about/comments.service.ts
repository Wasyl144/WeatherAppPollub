import { Injectable } from '@angular/core';
import { Comments } from './Comments';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private dataSource = new BehaviorSubject<Comments>({id:0,nickname:'',mail:'',comment:''});
  currentData = this.dataSource.asObservable(); //do debuggowania

  constructor() { }

  //Setter danych, next oznacza następną wartość która zostanie wykryta

  setData(data: Comments) { 
    this.dataSource.next(data);
    console.log(this.currentData);
  }

  //GETTER danych
  getData() {
    return this.dataSource.asObservable();
  }
}

