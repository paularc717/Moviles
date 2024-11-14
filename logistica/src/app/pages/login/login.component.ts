import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { IReqLogin } from '../../models/IReqLogin.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  providers: [ApiService],
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  frmLogin: FormGroup;

  constructor(private api: ApiService) {
    this.frmLogin = new FormGroup({
      user: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required)
    })
  }
  login(data: IReqLogin) {
    console.log('Login data:', data);  // Asegúrate de que los datos son correctos

    this.api.login(data).subscribe(
      (response) => {
        console.log('Datos recibidos:', response);
      },
      (error) => {
        console.error('Error de login:', error);
      }
    );
  }


  ngOnInit() { }
}

