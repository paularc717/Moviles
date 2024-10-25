import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular'
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IonicModule, HttpClientModule],
  templateUrl: './app.component.html',
  providers: [HttpClient],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'logistica';
  constructor(private router: Router) {}

  irA(ruta: string){
    this.router.navigate([`/${ruta}`]);
  }
}
