import { Component, OnInit } from "@angular/core";
import { SkyAgGridService } from "@skyux/ag-grid";
import { SkyModalInstance } from "@skyux/modals";
import {
  ColDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
} from "ag-grid-community";
import { UserModel } from "../login/login.model";
import { SkyDataEntryGridEditModalContext } from "./data-entry-grid-edit-modal-context";

@Component({
  selector: "sky-demo-edit-modal-form",
  templateUrl: "./data-entry-grid-edit-modal.component.html",
})
export class SkyDataEntryGridEditModalComponent implements OnInit {
  public columnDefs: ColDef[];
  public gridApi: GridApi;
  public gridData: UserModel[];
  public gridOptions: GridOptions;

  constructor(
    private agGridService: SkyAgGridService,
    public context: SkyDataEntryGridEditModalContext,
    public instance: SkyModalInstance
  ) {}

  public ngOnInit(): void {
    this.gridData = this.context.gridData;
    this.columnDefs = [
      { headerName: "First Name", field: "fname" },
      { headerName: "Last Name", field: "lname" },
      { headerName: "Contact Number", field: "phoneControl" },
      { headerName: "Email", field: "email" },
      { headerName: "Date of Birth", field: "myDate" },
      { headerName: "Address", field: "address" },
    ];

    this.gridOptions = {
      columnDefs: this.columnDefs,
      onGridReady: (gridReadyEvent) => this.onGridReady(gridReadyEvent),
    };
    this.gridOptions = this.agGridService.getEditableGridOptions({
      gridOptions: this.gridOptions,
    });
  }

  public onGridReady(gridReadyEvent: GridReadyEvent): void {
    this.gridApi = gridReadyEvent.api;
    this.gridApi.sizeColumnsToFit();
  }
}
