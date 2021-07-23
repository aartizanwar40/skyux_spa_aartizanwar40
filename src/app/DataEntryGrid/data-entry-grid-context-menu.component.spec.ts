import { TestBed } from '@angular/core/testing';
import { SkyAppTestModule } from '@skyux-sdk/builder/runtime/testing/browser';
import { expect } from '@skyux-sdk/testing';
import { ICellRendererParams } from 'ag-grid-community';
import { SkyDataEntryGridContextMenuComponent } from './data-entry-grid-context-menu.component';

describe('Data grid context menu component', () => {
  /**
   * This configureTestingModule function imports SkyAppTestModule, which brings in all of
   * the SKY UX modules and components in your application for testing convenience. If this has
   * an adverse effect on your test performance, you can individually bring in each of your app
   * components and the SKY UX modules that those components rely upon.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule]
    });
  });

  it('should do something', () => {
    const fixture = TestBed.createComponent(
      SkyDataEntryGridContextMenuComponent
    );
    fixture.detectChanges();
    expect(false).toBe(false);
  });

  it('should call agInit', () => {
    const fixture = TestBed.createComponent(
      SkyDataEntryGridContextMenuComponent
    );
    let component = fixture.componentInstance;
    let params: ICellRendererParams;
    component.agInit(params);
    expect(component.agInit(params)).toBeFalsy();
  });

  it('should call refresh', () => {
    const fixture = TestBed.createComponent(
      SkyDataEntryGridContextMenuComponent
    );
    let component = fixture.componentInstance;
    component.refresh();
    expect(component.refresh()).toBe(false);
  });

  it('should call ActionClicked', () => {
    const fixture = TestBed.createComponent(
      SkyDataEntryGridContextMenuComponent
    );
    let component = fixture.componentInstance;
    let action: any;
    component.actionClicked(action);
    expect(component.actionClicked(action)).toBeTruthy();
  });
});
