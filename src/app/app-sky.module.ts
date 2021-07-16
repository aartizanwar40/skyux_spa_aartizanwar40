import {
  NgModule
} from '@angular/core';

import {
  SkyAvatarModule
} from '@skyux/avatar';

import {
  SkyAlertModule,
  SkyKeyInfoModule
} from '@skyux/indicators';

import {
  SkyFluidGridModule, SkyPageModule
} from '@skyux/layout';

import {
  SkyNavbarModule
} from '@skyux/navbar';

import {
  SkyLabelModule
} from '@skyux/indicators';

import {
  SkyDatepickerModule
} from '@skyux/datetime';

import {
  SkyInputBoxModule
} from '@skyux/forms';

import {
  SkyIdModule
} from '@skyux/core';

import {
  SkyEmailValidationModule
} from '@skyux/validation';

import {
  SkyStatusIndicatorModule
} from '@skyux/indicators';

import {
  SkyPhoneFieldModule
} from '@skyux/phone-field';

import {
  SkyToolbarModule
} from '@skyux/layout';

import {
  SkyRepeaterModule
} from '@skyux/lists';

import {
  SkySearchModule
} from '@skyux/lookup';

import {
  SkyDropdownModule
} from '@skyux/popovers';

import {
  SkyModalModule

} from '@skyux/modals';
import {
  SkyAgGridModule
 } from '@skyux/ag-grid';

 import {
  SkyListModule,
  SkyListToolbarModule
} from '@skyux/list-builder';

import {
  SkyListViewGridModule
} from '@skyux/list-builder-view-grids';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DataEntryGridComponent } from './DataEntryGrid/data-entry-grid.component';
import { SkyDataEntryGridEditModalComponent } from './DataEntryGrid/data-entry-grid-edit-modal.component';
import { SkyDataEntryGridContextMenuComponent } from './DataEntryGrid/data-entry-grid-context-menu.component';

@NgModule({

  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
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
    SkyPageModule
  ],
  bootstrap: [DataEntryGridComponent , SkyDataEntryGridEditModalComponent , SkyDataEntryGridContextMenuComponent]
})
export class AppSkyModule { }
