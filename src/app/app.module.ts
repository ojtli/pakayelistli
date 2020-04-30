import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {AmoxtlatiloyanModule} from 'amoxtlatiloyan';
import {AgmxCoreModule} from 'agmx-core';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {environment as env} from '../environments/environment';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {HelpDialogComponent, SearchPanelComponent} from './search-panel/search-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HelpDialogComponent,
    SearchPanelComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    AgmxCoreModule.forRoot({
      apiKey: 'replace-this',
      libraries: ['places'],
      language: 'es',
      // apiVersion: '3.exp',
      apiVersion: '3.40.6',
      region: 'NI'
    }),
    AmoxtlatiloyanModule.forRoot(env.api, 'replace-this'),
    MatProgressBarModule,
    MatFormFieldModule,
    MatTableModule,
    MatSlideToggleModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
