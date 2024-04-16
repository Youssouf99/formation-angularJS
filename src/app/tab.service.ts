import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private titleChangedSource: Subject<string> = new Subject<string>;
  titleChanged$: Observable<string> = this.titleChangedSource.asObservable();

  constructor() { }

  changeTitle(title: string) {
    this.titleChangedSource.next(title);
  }
}
