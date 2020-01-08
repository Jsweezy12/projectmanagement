import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ClientsService} from '../../service/clients.service';
import {FormBuilder, FormGroup, Validators ,FormControl , FormArray } from '@angular/forms';
import { formatDate }    from '@angular/common';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



// clientee = {
//   "id": "string",
//   "name": "string",
//   "contact": "string",
//   "phone": "string",
//   "address": "string",
//   "paymentHistory": [
//     {}
//   ],
//   "dateadded": "string",
//   "notes": [
//     {}
//   ],
//   "status": "string",
//   "additionalProp1": {}
// }





// export class TablePaginationExample implements OnInit {
//   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','location','action'];
//   dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

//   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

//   ngOnInit() {
//     this.dataSource.paginator = this.paginator;
//   }
// }




@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})




export class ClientsComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  displayallinfo:FormGroup;
  noteform:FormGroup;
  datasource;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','location','action'];
  // dataSource = ELEMENT_DATA;
  show:boolean=false;
  selectedClient;


  constructor(private client:ClientsService,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.client.getAllClients().subscribe(res =>{
      this.datasource = res;
    })


    this.firstFormGroup = this._formBuilder.group({
      contact: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      address: ['', Validators.required],
      name: ['', Validators.required]
    });


    this.displayallinfo =this._formBuilder.group({
      address: ['', Validators.required],
      name: ['', Validators.required],
      contact: ['', Validators.required],
      phone: ['', Validators.required],
      email: [''],
      id:['']
    });


    this.noteform =this._formBuilder.group({
      title: ['', Validators.required],
      note: ['', Validators.required]
    });
  }

  createclient(){

    let now = new Date()
    let data = this.firstFormGroup.value;
    data.address = this.secondFormGroup.get('address').value;
    data.name = this.secondFormGroup.get('name').value;
    data.dateadded = now;
    console.log(data)
  
    this.client.createClient(data).subscribe(res =>{
      console.log(res)
    },error =>{
      console.log(error)
    });
    this.show=false
  }

  getchange(){
    let data = this.firstFormGroup.value
    let data2 = this.secondFormGroup.value
    console.log(data,data2)
  }

  setClient(client,i){
    console.log(client)
    this.displayallinfo.patchValue(client)
  }

  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  //   console.warn(this.firstFormGroup.value, this.secondFormGroup.value);
  // }
}
