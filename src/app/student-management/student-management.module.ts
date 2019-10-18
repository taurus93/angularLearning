import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentManagementRoutingModule } from './student-management-routing.module';
import {StudentListComponent} from './student-list/student-list.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    StudentListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    StudentManagementRoutingModule
  ]
})
export class StudentManagementModule { }
