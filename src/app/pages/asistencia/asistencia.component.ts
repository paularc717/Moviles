import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'
import { ApiService } from '../../service/api.service';
import { IReqLogin } from '../../models/IReqLogin.interfase';
import { IEvento } from '../../models/IEvento.interface';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss'],
  standalone: true,  
  imports: [ IonicModule, ReactiveFormsModule, FormsModule],
  providers: [ApiService],
})
export class AsistenciaComponent  implements OnInit {

  frmRegistro: FormGroup; 
  eventos: IEvento[] = []; 

  constructor(private api:ApiService) { 
    this.frmRegistro =  new FormGroup({
      evento: new FormControl('', Validators.required),
      codigo: new FormControl('', Validators.required),
      persona: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      hora: new FormControl('', Validators.required)
    })

    this.api.eventos().subscribe(datos => {
      console.log(datos);
      this.eventos = datos;
    })

  }

  ngOnInit() {}

  login(data:IReqLogin){         
    console.log(data);
    // this.api.login(data).subscribe(datosretorno => {
    //    console.log(datosretorno);
    // })
  }

}
