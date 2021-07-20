import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SkyAgGridModule } from "@skyux/ag-grid";
import { SkyAvatarModule } from "@skyux/avatar";
import { SkyIdModule } from "@skyux/core";
import { SkyDatepickerModule } from "@skyux/datetime";
import { SkyInputBoxModule } from "@skyux/forms";
import {
  SkyAlertModule,
  SkyKeyInfoModule,
  SkyLabelModule,
  SkyStatusIndicatorModule,
} from "@skyux/indicators";
import {
  SkyFluidGridModule,
  SkyPageModule,
  SkyToolbarModule,
} from "@skyux/layout";
import { SkyListModule, SkyListToolbarModule } from "@skyux/list-builder";
import { SkyListViewGridModule } from "@skyux/list-builder-view-grids";
import { SkyRepeaterModule } from "@skyux/lists";
import { SkySearchModule } from "@skyux/lookup";
import { SkyModalModule } from "@skyux/modals";
import { SkyNavbarModule } from "@skyux/navbar";
import { SkyPhoneFieldModule } from "@skyux/phone-field";
import { SkyDropdownModule } from "@skyux/popovers";
import { SkyEmailValidationModule } from "@skyux/validation";
import { AgGridModule } from "ag-grid-angular";
import { SkyDataEntryGridContextMenuComponent } from "./DataEntryGrid/data-entry-grid-context-menu.component";
import { SkyDataEntryGridEditModalComponent } from "./DataEntryGrid/data-entry-grid-edit-modal.component";
import { DataEntryGridComponent } from "./DataEntryGrid/data-entry-grid.component";

@NgModule({
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  exports: [
    SkyAvatarModule,
    SkyAlertModule,
    SkyKeyInfoModule,
    AgGridModule,
    SkyFluidGridModule,
    SkyNavbarModule,
    SkyLabelModule,
    SkyDatepickerModule,
    SkyInputBoxModule,
    SkyIdModule,
    SkyEmailValidationModule,
    SkyStatusIndicatorModule,
    SkyPhoneFieldModule,
    SkyToolbarModule,
    SkyRepeaterModule,
    SkySearchModule,
    SkyDropdownModule,
    SkyModalModule,
    SkyAgGridModule,
    SkyListViewGridModule,
    SkyListModule,
    SkyListToolbarModule,
    SkyPageModule,
  ],
  bootstrap: [
    DataEntryGridComponent,
    SkyDataEntryGridEditModalComponent,
    SkyDataEntryGridContextMenuComponent,
  ],
})
export class AppSkyModule {}
