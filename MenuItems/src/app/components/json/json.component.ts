import { Component } from '@angular/core';
import {GridOptions} from "ag-grid-community";
import sampledata from '../../../assets/sample.json';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html'
})
export class JsonComponent {
  gridOptions: GridOptions;
  paginationPageSize;
  defaultColDef;

  constructor() {
    this.gridOptions = <GridOptions>{};
    this.defaultColDef = {
      sortable: true,
      filter: true,
      resizable: true,
      editable: true,
    };
   this.paginationPageSize = 10;
    this.gridOptions.columnDefs = [
        {
            headerName: "Email Address",
            field: "Email Address",
            width: 300
        },
        {
            headerName: "First Name",
            field: "First Name",
            width: 300
        },
        {
          headerName: "Last Name",
          field: "Last Name",
          width: 300
      },

    ];

    this.gridOptions.rowData = sampledata;
}

}
