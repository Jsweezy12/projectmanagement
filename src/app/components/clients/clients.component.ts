import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ClientsService} from '../../service/clients.service';
import {FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



// clientee = {
//   "id": "",
//   "name": "string",
//   "client": "string",
//   "task": [
//     {}
//   ],
//   "dateadded": "string",
//   "notes": [
//     {}
//   ],
//   "status": "string",
//   "additionalProp1": {}
// }

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}
];



export class TablePaginationExample implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','location','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}




@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})




export class ClientsComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','location','action'];
  dataSource = ELEMENT_DATA;
  constructor(private client:ClientsService,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  createclient(){
   let data ={}
    this.client.createClient(data).subscribe(res =>{
      console.log(res)
    },error =>{
      console.log(error)
    })
  }
}
