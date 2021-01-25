import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-agents-sign-in',
  templateUrl: './agents-sign-in.component.html',
  styleUrls: ['./agents-sign-in.component.css']
})

export class AgentsSignInComponent {
  public submitted = false;
  public oppoSuits: any = ['Handle VIN of the car', 'Women', 'Boys', 'Inspiration']

  constructor(public fb: FormBuilder) { }

  public oppoSuitsForm: any = this.fb.group({
    name: ['', [Validators.required]]
  })

  changeSuit(e: any) {
    this.oppoSuitsForm.get('name').setValue(e.target.value, {
      onlySelf: true
    })
  }

  /* Select Dropdown error handling */
  public handleError = (controlName: string, errorName: string) => {
    return this.oppoSuitsForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    this.submitted = true;
    alert(JSON.stringify(this.oppoSuitsForm.value))
  }
}
