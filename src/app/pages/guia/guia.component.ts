import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-guia',
  standalone: true,
  templateUrl: './guia.component.html',
  imports: [ IonicModule ],
  styleUrls: ['./guia.component.scss'],
})
export class GuiaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
