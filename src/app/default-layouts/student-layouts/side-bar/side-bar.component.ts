import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  showFiller = false;
  @ViewChild('drawer') drawer: MatDrawer | undefined;

  toggleDrawer() {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }

}
