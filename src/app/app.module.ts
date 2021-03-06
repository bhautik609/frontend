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
import { AddcatComponent } from './cat/addcat/addcat.component';
import { AdddeliveryComponent } from './delivery/adddelivery/adddelivery.component';
import { AddempComponent } from './emp/addemp/addemp.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { AddorderdetailComponent } from './orderdetail/addorderdetail/addorderdetail.component';
import { EditorderdetailComponent } from './orderdetail/editorderdetail/editorderdetail.component';
import { OrderComponent } from './order/order.component';
import { EditorderComponent } from './order/editorder/editorder.component';
import { AddorderComponent } from './order/addorder/addorder.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';
import { UserComponent } from './user/user.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import {MatRadioModule} from '@angular/material/radio';
import{MatSelectModule}from '@angular/material/select';
import { AdmindashbordComponent } from './admindashbord/admindashbord.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import { ShellComponent } from './shell/shell.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import{MatSidenavModule}from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS,MAT_DATE_LOCALE } from '@angular/material/core';

import{ChartsModule}from 'ng2-charts';
import { ViewmoreComponent } from './product/viewmore/viewmore.component';
import{MatDialogModule}from '@angular/material/dialog';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewmoruserComponent } from './user/viewmoruser/viewmoruser.component';
import{DialogModule}from 'primeng/dialog';
import{MatCheckboxModule}from '@angular/material/checkbox';
import { AdddeliveryboyComponent } from './adddeliveryboy/adddeliveryboy.component';
import { TrackComponent } from './track/track.component';
import { TrcakdisplayComponent } from './track/trcakdisplay/trcakdisplay.component';
import { UpdatetrackComponent } from './track/updatetrack/updatetrack.component';
import { AddassignorderComponent } from './delivery/addassignorder/addassignorder.component';
import { ViewmororderComponent } from './order/viewmororder/viewmororder.component';
import { DashbordComponent } from './dashbord/dashbord.component';
@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    DeliveryComponent,
    HeaderComponent,
    EditcatComponent,
    EditdeliveryComponent,
    EmpComponent,
    EditempComponent,
    AddcatComponent,
    AdddeliveryComponent,
    AddempComponent,
    OrderdetailComponent,
    AddorderdetailComponent,
    EditorderdetailComponent,
    OrderComponent,
    EditorderComponent,
    AddorderComponent,
    ProductComponent,
    AddproductComponent,
    EditproductComponent,
    UserComponent,
    EdituserComponent,
    AdduserComponent,
    AdmindashbordComponent,
    LoginComponent,
    ShellComponent,
    PagenotfoundComponent,
    ViewmoreComponent,
    FeedbackComponent,
    ProfileComponent,
    ViewmoruserComponent,
    AdddeliveryboyComponent,
    TrackComponent,
    TrcakdisplayComponent,
    UpdatetrackComponent,
    AddassignorderComponent,
    ViewmororderComponent,
    DashbordComponent
    
    
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
    MatRadioModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    LayoutModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatNativeDateModule,
    ChartsModule,
    MatDialogModule,
    MatListModule,
    DialogModule,
    MatCheckboxModule
  


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
