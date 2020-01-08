import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProjectModule {
  id: string;
  name: string;
  client: string;
  task: []; 
  dateadded: string;
  notes: [
  ];
  status: string
 }
