import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { throttleTime } from 'rxjs';

@Component({
  selector: 'app-reactive-forms-demo',
  templateUrl: './reactive-forms-demo.component.html',
  styleUrls: ['./reactive-forms-demo.component.css']
})
export class ReactiveFormsDemoComponent implements OnInit {

  operatingSystems: string[] = [
    'Windows 10',
    'Linux',
    'Mac OS'
  ];

  laptopGroup: FormGroup = this.formBuilder.group({
    processor: new FormControl('', [Validators.required, Validators.minLength(4), peshoValidator]),
    storage: new FormGroup({
      ram: new FormControl(''),
      hardDisk: new FormControl(),
    }),
    os: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.laptopGroup.valueChanges.pipe(throttleTime(1000)).subscribe(() => {
      console.log(this.laptopGroup.get('processor')!.value);
      
    })
  }

  onSubmit(): void {
    console.log(this.laptopGroup.value);
    console.log(this.laptopGroup.controls);
    
    
  }

}

const peshoValidator: ValidatorFn = (control: AbstractControl) => {
  const value = control.value;
  if(value !== 'Pesho') {
    return { pesho: true};
  }

  return null;
}
