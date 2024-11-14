import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from  '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { IReqContacto } from '../../models/IReqContacto.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
  imports:[IonicModule,ReactiveFormsModule, HttpClientModule],
  providers: [ApiService],
  standalone:true,
  
})
export class ContactoComponent  implements OnInit {

  frmContacto:FormGroup;

  constructor(private router: Router, private api:ApiService) {
    this.frmContacto= new FormGroup({
      nombre: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      texto: new FormControl('',Validators.required),
    })
   }

  h() {
    this.router.navigate(['./home']);
  }
  reg() {
    this.router.navigate(['./registro']);
  }
  log() {
    this.router.navigate(['./log']);
  }
  

  ngOnInit() {}
    


  formulario(data:IReqContacto){
    this.api.contacto(data).subscribe(retorno=>{
      console.log(retorno)

  //onSubmitTemplate(){
    //console.log(this.frmControles.value)
  })
}
}

