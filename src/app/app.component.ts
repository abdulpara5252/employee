import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Guid } from "guid-typescript";
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public id: Guid;
  submitted:boolean=false;
  NewId: number = 0;
  designattionForm1:any=[]
  Designation:any=['.NET DEVELOPER','ANDROID DEVELOPER','JAVA DEVELOPER','WEB DEVELOPER']
  Grade:any=['Exellent','Average','Good','Poor']
  designattionForm: any;

  constructor(public fb: FormBuilder){
    console.log("On Page Load");
    this.DesignationForm.controls['id'].setValue(0);
  }
   DesignationForm=this.fb.group({
    id: [],
    firstname: ['',Validators.required],
    lastname: ['',Validators.required],
    DOB:['',Validators.required],
    DesignationValue :['',Validators.required],
    GradeValue:['',Validators.required]
   })
   onSubmit(){
     debugger
     if (this.DesignationForm.controls['id'].value == 0 || this.DesignationForm.controls['id'].value == null) {
      this.NewId = this.NewId + 1;
    } else {
      this.NewId = this.DesignationForm.controls['id'].value;
    }
    // this.id = Guid.create();
    this.submitted = true;
    if (!this.DesignationForm.invalid) {
      if (this.DesignationForm.controls['id'].value == 0 || this.DesignationForm.controls['id'].value == null) {
        let fields = {

          id: this.NewId,
          firstName: this.DesignationForm.value.firstname,
          lastName: this.DesignationForm.value.lastname,
          DOB: this.DesignationForm.value.DOB,
          Designation: this.DesignationForm.value.DesignationValue,
          Grade: this.DesignationForm.value.GradeValue,
        }
        this.designattionForm1.push(fields);
        this.DesignationForm.reset();
          
      } else {
        debugger
        this.designattionForm1[this.NewId - 1].firstName = this.DesignationForm.value.firstname;
        this.designattionForm1[this.NewId - 1].lastName = this.DesignationForm.value.lastname;
        this.designattionForm1[this.NewId - 1].DOB = this.DesignationForm.value.DOB;
        this.designattionForm1[this.NewId - 1].Designation = this.DesignationForm.value.DesignationValue;
        this.designattionForm1[this.NewId - 1].Grade = this.DesignationForm.value.GradeValue;
      }
      console.log(this.designattionForm1);
      //  Array.slice( 0 ,5 );
    }
    console.log("ID===" + this.NewId);
   }
   onCancel(){
     debugger
    this.DesignationForm.reset();
   }
   onEdit(data){
     debugger
    console.log(data);
    this.DesignationForm.controls['id'].setValue(data.id);
    this.DesignationForm.controls['firstname'].setValue(data.firstName);
    this.DesignationForm.controls['lastname'].setValue(data.lastName);
    this.DesignationForm.controls['DOB'].setValue(data.DOB);
    this.DesignationForm.controls['DesignationValue'].setValue(data.Designation);
    this.DesignationForm.controls['GradeValue'].setValue(data.Grade);

   }
   onDelete(i){ 
     debugger
     var result = confirm("ARE YOU SURE YOU want to delete?");
    if (result) {
      this.designattionForm1.splice(i,1);
    }
  }
}
   
