import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SkyAgGridService } from '@skyux/ag-grid';
import { SkyModalCloseArgs, SkyModalService } from '@skyux/modals';
import { GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { SkyDataEntryGridEditModalContext } from './data-entry-grid-edit-modal-context';
import { SkyDataEntryGridEditModalComponent } from './data-entry-grid-edit-modal.component';

@Component({
  selector: 'app-data-entry-grid',
  templateUrl: './data-entry-grid.component.html',
  styleUrls: ['./data-entry-grid.component.scss']
})
export class DataEntryGridComponent {
  public gridData: any;
  public columnDefs = [
    { headerName: 'First Name', field: 'fname' },
    { headerName: 'Last Name', field: 'lname' },
    { headerName: 'Contact Number', field: 'phoneControl' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Date of Birth', field: 'myDate' },
    { headerName: 'Address', field: 'address' }
  ];
  public gridApi: GridApi;
  public gridOptions: GridOptions;
  public searchText: string;

  constructor(
    private agGridService: SkyAgGridService,
    private http: HttpClient,
    private modalService: SkyModalService
  ) {}

  // tslint:disable-next-line: use-lifecycle-interface
  public ngOnInit(): void {
    this.gridData = this.http.get('http://localhost:3000/users');
    this.gridOptions = {
      columnDefs: this.columnDefs,
      onGridReady: (gridReadyEvent) => this.onGridReady(gridReadyEvent)
    };
    this.gridOptions = this.agGridService.getGridOptions({
      gridOptions: this.gridOptions
    });
  }
  public onGridReady(gridReadyEvent: GridReadyEvent): void {
    this.gridApi = gridReadyEvent.api;

    this.gridApi.sizeColumnsToFit();
  }
  public openModal(): void {
    const context = new SkyDataEntryGridEditModalContext();
    context.gridData = this.gridData;
    const options = {
      providers: [
        { provide: SkyDataEntryGridEditModalContext, useValue: context }
      ],
      ariaDescribedBy: 'docs-edit-grid-modal-content',
      size: 'large'
    };

    const modalInstance = this.modalService.open(
      SkyDataEntryGridEditModalComponent,
      options
    );
    modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
      /*if (result.reason === "cancel" || result.reason === "close") {
        alert("Edits canceled!");
      } else {
        this.gridData = result.data;
        this.gridApi.refreshCells();
        alert("Saving data!");
      }*/
    });
  }
  public searchApplied(searchText: string): void {
    this.searchText = searchText;
    this.gridApi.setQuickFilter(searchText);
  }
}
