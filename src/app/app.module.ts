import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule}from'@angular/forms';
import{HttpClientModule}from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatComponent } from './cat/cat.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule}from '@angular/material/icon';
import{MatButtonModule}from '@angular/material/button';
import { EditcatComponent } from './cat/editcat/editcat.component';
import {MatTableModule} from '@angular/material/table';
import{MatInputModule}from '@angular/material/input';
import{MatSortModule}from '@angular/material/sort';
import{MatPaginatorModule}from '@angular/material/paginator';
import { EditdeliveryComponent } from './delivery/editdelivery/editdelivery.component';
import { EmpComponent } from './emp/emp.component';
import { EditempComponent } from './emp/editemp/editemp.component';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    DeliveryComponent,
    HeaderComponent,
    EditcatComponent,
    EditdeliveryComponent,
    EmpComponent,
    EditempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule ,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
