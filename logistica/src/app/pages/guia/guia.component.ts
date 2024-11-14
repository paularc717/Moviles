import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from  '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service'
import { IReqGuia } from '../../models/IReqGuia.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-guia',
  templateUrl: './guia.component.html',
  styleUrls: ['./guia.component.scss'],
  imports:[IonicModule,ReactiveFormsModule, HttpClientModule],
  providers: [ApiService],
  standalone:true,

})
export class GuiaComponent  implements OnInit {

  frmGuia:FormGroup;

  constructor(private router: Router, private api:ApiService) {
    this.frmGuia = new FormGroup({
      codigo: new FormControl('',Validators.required),
      nombre: new FormControl('',Validators.required),
      horadeingreso: new FormControl('',Validators.required),
      evento: new FormControl('',Validators.required),
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

  formulario(data:IReqGuia){
    this.api.guia(data).subscribe(retorno=>{
      console.log(retorno)

  //onSubmitTemplate(){
    //console.log(this.frmControles.value)
  })
}
}

