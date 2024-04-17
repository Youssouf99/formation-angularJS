import { Component, OnInit } from '@angular/core';
import { Comic, SimpleComic } from '../model';
import { COMIC, COMICS } from '../data';
import { TabBarComponent } from '../tab-bar/tab-bar.component';
import { TabService } from '../services/tab.service';
import { title } from 'process';

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


  // comic: SimpleComic = {
  //   id: 21464,
  //   title: 'Powers (2000)',
  //   issueNumber: 18,
  //   thumbnail: '../assets/image/image_not_available.jpg',
  //   price: 3.45,
  //   description: 'Walker and Pilgrim investigate the death of a member of FG-3, a federally employed and corporate funded trio. Evidence leads Walker to believe a federal cover-up is taking place, and as the investigation spirals out of control both professionally and personally (Zora is killed during a confrontation with FG-3), Walker leaves the police force after exposing the cover-up on television.',
  // }

  //comic: SimpleComic = COMIC;



}
