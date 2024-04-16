import { Component } from '@angular/core';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})
export class TabBarComponent {
  tabs: string[] = ['All', 'Powers', 'Chewbacca', 'Ultimate Spider-Man'];
  selectedIndex: number = 0;

  isSelected(index: number): boolean {
    return index === this.selectedIndex;
  }

  selectTab(index: number): void {
    this.selectedIndex = index;
  }

  constructor(private tabService: TabService) { }

}
