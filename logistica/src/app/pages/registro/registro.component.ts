import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from  '@ionic/angular';
import { Router } from '@angular/router';
import { IReqRegistro } from '../../models/IReqRegistro.interface';
import { ApiService } from '../../service/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-registro',
  imports:[IonicModule,ReactiveFormsModule, HttpClientModule],
  providers: [ApiService],
  standalone:true,
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent  implements OnInit {

  h() {
    this.router.navigate(['./home']);
  }
  log() {
    this.router.navigate(['./log']);
 }
  conta() {
    this.router.navigate(['./contacto']);
  }


  frmRegistro:FormGroup;

  constructor(private router: Router, private api:ApiService) { 
    this.frmRegistro= new FormGroup({
      nombre: new FormControl('',Validators.required),
      apellido: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      contrasena: new FormControl('',Validators.required),
      direccion: new FormControl('',Validators.required),
    })
   }
  

  ngOnInit() {}


  formulario(data:IReqRegistro){
    this.api.registro(data).subscribe(retorno=>{
      console.log(retorno);
    })
    //console.log("Registro existoso del usuario",this.frmRegistro.value)
  } 
}
