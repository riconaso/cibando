import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'cibando'

  images = [
    {id: 1,
    label: 'Spaghetti al pomodoro'},
    {id: 2,
      label: 'Tagliata di manzo'},
    {id: 3,
      label: 'Tiramisù'}
  ];



  percorso = "../assets/images/carousel-";

  colore = "rosso";
}
