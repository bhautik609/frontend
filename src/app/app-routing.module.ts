import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcatComponent } from './cat/addcat/addcat.component';
import { CatComponent } from './cat/cat.component';
import { EditcatComponent } from './cat/editcat/editcat.component';
import { AdddeliveryComponent } from './delivery/adddelivery/adddelivery.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { EditdeliveryComponent } from './delivery/editdelivery/editdelivery.component';
import { AddempComponent } from './emp/addemp/addemp.component';
import { EditempComponent } from './emp/editemp/editemp.component';
import { EmpComponent } from './emp/emp.component';

const routes: Routes = [
  {path:'',component:CatComponent},
  {path:'delivery',component:DeliveryComponent},
  {path:'editcat/:cat_id',component:EditcatComponent},
  {path:'editdelivery/:del_id',component:EditdeliveryComponent},
  {path:'emp',component:EmpComponent},
  {path:'editemp/:emp_id',component:EditempComponent},
  {path:'addcat',component:AddcatComponent},
  {path:'adddelivery',component:AdddeliveryComponent},
  {path:'addemp',component:AddempComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
