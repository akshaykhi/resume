import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';





@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
user: any;

constructor()
{

}

formDetails = new FormGroup ({
  name : new FormControl('',[Validators.required,Validators.minLength(3)]),
  email: new FormControl ('', [Validators.required, Validators.email]),
  subject : new FormControl('',[Validators.required]),
  message : new FormControl('',[Validators.required])
});

get f() {
  return this.formDetails.controls;
}

res:any="";
submit() {
  const name = this.formDetails.controls['name'].value;
  this.res = `Hi <strong>${name}</strong>, your response submitted successfully.`;

  this.formDetails.reset();

  }


}
