import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {AgmxCoreModule} from 'agmx-core';
import {MatCardModule} from '@angular/material/card';
import {SearchPanelComponent} from './search-panel/search-panel.component';
import {AmoxtlatiloyanModule} from 'amoxtlatiloyan';
import {environment as env} from '../environments/environment';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {By} from '@angular/platform-browser';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatSnackBarModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        AgmxCoreModule.forRoot({
          apiKey: 'test',
          libraries: ['places'],
          language: 'es',
          // apiVersion: '3.exp',
          apiVersion: '3.40.6',
          region: 'NI'
        }),
        AmoxtlatiloyanModule.forRoot(env.api, 'test'),
      ],
      declarations: [
        AppComponent,
        SearchPanelComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the app and have as title pakayelistli', () => {
    expect(app).toBeTruthy();
    expect(app.title).toEqual('pakayelistli');

  });

  it('should set center when hospital is selected', () => {
    const shouldBeTheCenter = {lat: 1, lng: 1};
    const searchPanelComponent = fixture.debugElement.query(By.directive(SearchPanelComponent));
    // searchPanelComponent.triggerEventHandler('hospitalSelected', shouldBeTheCenter);
    searchPanelComponent.componentInstance.hospitalSelected.emit(shouldBeTheCenter);
    expect(app.center).toEqual(shouldBeTheCenter);
  });

});
