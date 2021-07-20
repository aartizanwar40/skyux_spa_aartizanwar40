import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ApiService } from "../shared/api.service";

@Component({
  selector: "app-grid-view",
  templateUrl: "./grid-view.component.html",
  styleUrls: ["./grid-view.component.scss"],
})
export class GridViewComponent {
  public columnDefs = [
    { headerName: "First Name", field: "fname" },
    { headerName: "Last Name", field: "lname" },
    { headerName: "Contact Number", field: "phoneControl" },
    { headerName: "Email", field: "email" },
    { headerName: "Date of Birth", field: "myDate" },
    { headerName: "Address", field: "address" },
  ];
  public rowData: any;
  constructor(private api: ApiService, private http: HttpClient) {}

  // tslint:disable-next-line: use-lifecycle-interface
  public ngOnInit(): void {
    this.rowData = this.http.get("http://localhost:3000/posts");
  }

  public deleteAllUser(id: any) {
    this.api.deleteUser(id).subscribe((res: any) => {
      alert("User Deleted");
    });
  }
}
