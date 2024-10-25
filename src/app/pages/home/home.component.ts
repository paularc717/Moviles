import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [ IonicModule ],
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
