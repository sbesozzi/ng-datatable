import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
// tslint:disable-next-line:import-blacklist
import { Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { DatatableService } from '../../services/datatable.service';

import { User } from '../../../models/user';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  private users: User[];

  constructor(
    private  _datatableService: DatatableService
  ) {
    this.showUsers();
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      order: [[1, 'asc']],
    };
  }

  private showUsers() {
    this._datatableService.getUsers().subscribe((data) => {
      this.dtTrigger.next();
      this.users = data;
    });


    // const userData = this._datatableService.getUsers();
    // console.log(userData);

    // this.dtTrigger.next();
    // this.users = userData;
  }

}
