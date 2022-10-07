import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  fullNameLength = 0;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
        ],
      ],
      email: [''],
      skills: this.fb.group({
        skillName: [''],
        experienceInYears: [''],
        proficiency: ['beginner'],
      }),
    });
  }
  logKeyValuePairs(group: FormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logKeyValuePairs(abstractControl);
      } else {
        console.log('key=', key, 'value =', abstractControl?.value);
      }
    });
  }

  onLoadDataClick(): void {
    this.logKeyValuePairs(this.employeeForm);
  }

  onSubmit(): void {
    console.log(this.employeeForm.controls['fullName'].touched);
    console.log(this.employeeForm.get('fullName')?.value);
  }
}
