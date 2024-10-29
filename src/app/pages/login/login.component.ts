import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'
import { ApiService } from '../../service/api.service';
import { IReqLogin } from '../../models/IReqLogin.interfase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,  
  imports: [ IonicModule, ReactiveFormsModule, FormsModule], 
  providers: [ApiService],
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent  implements OnInit {
  
  frmLogin: FormGroup;

  constructor(private api:ApiService) {    
    this.frmLogin =  new FormGroup({
      user: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required)
    })
  }
  
  login(data:IReqLogin){         
    console.log(data);
    this.api.login(data).subscribe(datosretorno => {
       console.log(datosretorno);
    })
  }

  ngOnInit() {}
}
