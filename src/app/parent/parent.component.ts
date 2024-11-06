import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first, map } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  // signupForm: FormGroup = new FormGroup({
  //   firstname: new FormControl('', [Validators.required]),
  //   lastname: new FormControl('', [Validators.required]),
  // });
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.signupForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
    })
    
  }

  ngOnInit(): void {
    // console.log(this.name);
  }

  receiveMessage($event: any) {
    console.log('hello');
  }

  getValue() {
    this.signupForm.valid;
    // this.signupForm.setValue({'firstname': 'John', 'lastname': 'Doe'});
    console.log(this.signupForm.value);
  }

  getData() {
    this.api.weatherData('kannur').pipe(map(data=> {
      data = data['location']
    })).subscribe(data => {
      console.log(data,'data');
    })
  }
}
