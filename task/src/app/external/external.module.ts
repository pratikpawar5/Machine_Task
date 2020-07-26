import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MATERIAL_MODULE = [
  FormsModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[MATERIAL_MODULE]
})
export class ExternalModule { }
