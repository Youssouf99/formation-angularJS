import { Component, OnInit } from '@angular/core';
import { Comic } from '../model';
import { COMICS } from '../data';
import { TabService } from '../services/tab.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit {
  comics: Comic[] = COMICS;

  constructor(private tabService: TabService) { }

  ngOnInit() {
    this.tabService.titleChanged$.subscribe(title => {
      if (title === null || title === "All") {
        this.comics = COMICS;
      } else {
        this.comics = COMICS.filter(comic => comic.title.includes(title));
      }
    })

  }


}
