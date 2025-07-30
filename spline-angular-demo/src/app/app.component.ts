import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSpline = true;

  ngOnInit() {
    setTimeout(() => {
      this.showSpline = false; // Hide iframe after 3 sec
    }, 8000);
  }
}
