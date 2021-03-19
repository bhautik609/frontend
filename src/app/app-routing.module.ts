import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashbordComponent } from './admindashbord/admindashbord.component';
import { AuthgardService } from './authgard.service';
import { AddcatComponent } from './cat/addcat/addcat.component';
import { CatComponent } from './cat/cat.component';
import { EditcatComponent } from './cat/editcat/editcat.component';
import { AdddeliveryComponent } from './delivery/adddelivery/adddelivery.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { EditdeliveryComponent } from './delivery/editdelivery/editdelivery.component';
import { AddempComponent } from './emp/addemp/addemp.component';
import { EditempComponent } from './emp/editemp/editemp.component';
import { EmpComponent } from './emp/emp.component';
import { LoginComponent } from './login/login.component';
import { AddorderComponent } from './order/addorder/addorder.component';
import { EditorderComponent } from './order/editorder/editorder.component';
import { OrderComponent } from './order/order.component';
import { AddorderdetailComponent } from './orderdetail/addorderdetail/addorderdetail.component';
import { EditorderdetailComponent } from './orderdetail/editorderdetail/editorderdetail.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';
import { ProductComponent } from './product/product.component';
import { ViewmoreComponent } from './product/viewmore/viewmore.component';
import { ShellComponent } from './shell/shell.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:ShellComponent,canActivate:[AuthgardService],children:[
  {path:'',component:AdmindashbordComponent},
  {path:'cat',component:CatComponent,canActivate:[AuthgardService]},
  {path:'delivery',component:DeliveryComponent},
  {path:'editcat/:cat_id',component:EditcatComponent},
  {path:'editdelivery/:del_id',component:EditdeliveryComponent},
  {path:'emp',component:EmpComponent},
  {path:'editemp/:emp_id',component:EditempComponent},
  {path:'addcat',component:AddcatComponent},
  {path:'adddelivery',component:AdddeliveryComponent},
  {path:'addemp',component:AddempComponent},
  {path:'orderdetail',component:OrderdetailComponent},
  {path:'editorderdetail/:order_detail_id',component:EditorderdetailComponent},
  {path:'addorderdetail',component:AddorderdetailComponent},
  {path:'order',component:OrderComponent},
  {path:'editorder/:order_id',component:EditorderComponent},
  {path:'addorder',component:AddorderComponent},
  {path:'product',component:ProductComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'editproduct/:product_id',component:EditproductComponent},
  {path:'user',component:UserComponent},
  {path:'edituser/:user_id',component:EdituserComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'view',component:ViewmoreComponent}
  
  ]},
  {path:'**',component:PagenotfoundComponent}
   


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
