import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ClientsService} from '../../service/clients.service';
import {ProjectsService} from '../../service/projects.service';
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

  projectJson:{
    "name": "string",
    "client": "string",
    "task": [
      {}
    ],
    "dateadded": "string",
    "notes": [
      {}
    ],
    "status": "string",
  }

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  displayallinfo:FormGroup;
  projectFormGroup:FormGroup;
  noteform:FormGroup;
  datasource;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','location','action'];
  // dataSource = ELEMENT_DATA;
  show:boolean=false;
  showproject:boolean=false;
  selectedClient;
  clientnotes;


  constructor(private client:ClientsService,
    private projects: ProjectsService,
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

    this.projectFormGroup=this._formBuilder.group({
      name: ['', Validators.required]
    });
  }

  createclient(){

    let now = new Date()
    let data = this.firstFormGroup.value;
    data.address = this.secondFormGroup.get('address').value;
    data.name = this.secondFormGroup.get('name').value;
    data.dateadded = now;
    data.paymentHistory= [
        ];
        data.notes= [
        ],
        data.status= "string",
    console.log(data)
  
    this.client.createClient(data).subscribe(res =>{
      console.log(res)
    },error =>{
      console.log(error)
    });
    this.show=false
  }

  close(){
    this.show=false
  }

  getchange(){
    let data = this.firstFormGroup.value
    let data2 = this.secondFormGroup.value
    console.log(data,data2)
  }

  setClient(client,i){
    console.log(client);
    this.clientnotes= client.notes
    this.displayallinfo.patchValue(client)
  }

  addnote(){
    let now = new Date()
    let data ={
    title : this.noteform.get('title').value,
    note : this.noteform.get('note').value,
    dateadded : now
    }
    console.log(this.displayallinfo.get("id").value,data);
    let parse = this.datasource.filter(elem =>{
      return elem.id == this.displayallinfo.get("id").value
    })
    parse[0].notes.push(data);
    let sent ={
      notes: parse[0].notes
    }
    
    this.updateclient(this.displayallinfo.get("id").value,sent)
  }

 updateclient(id,data){
   this.client.updateClient(id,data);
 }

 addproject(){
  this.showproject= true
  this.projectJson

 }

  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  //   console.warn(this.firstFormGroup.value, this.secondFormGroup.value);
  // }
}
