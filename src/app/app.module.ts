// external
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // added
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // added
import { MaterialModule } from '@angular/material';

// @ngx-form
import { FormMaterialModule } from '@ngx-form/material'; // added
import { FormElementModule } from '@ngx-form/element'; // added

// internal
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // added
    FormsModule, // added
    ReactiveFormsModule, // added
    MaterialModule,

    FormElementModule.forRoot(), // added
    FormMaterialModule // added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
