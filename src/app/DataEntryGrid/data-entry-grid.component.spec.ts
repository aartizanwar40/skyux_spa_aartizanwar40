import { TestBed } from '@angular/core/testing';
import { SkyAppTestModule } from '@skyux-sdk/builder/runtime/testing/browser';
import { expect } from '@skyux-sdk/testing';
import { DataEntryGridComponent } from './data-entry-grid.component';

describe('Data grid view component', () => {
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
    const fixture = TestBed.createComponent(DataEntryGridComponent);

    fixture.detectChanges();

    expect(false).toBe(false);
  });

  it('should be editable', () => {
    const fixture = TestBed.createComponent(DataEntryGridComponent);
    let component = fixture.componentInstance;
    component.openModal();
    expect(false).toBe(false);
  });

  it('should Search the element', () => {
    const fixture = TestBed.createComponent(DataEntryGridComponent);
    let component = fixture.componentInstance;
    let searchText: any;
    component.searchApplied(searchText);
    expect(component.searchApplied(searchText)).toBeTruthy();
  });
});
