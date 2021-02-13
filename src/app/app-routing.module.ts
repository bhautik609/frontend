import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { EditcatComponent } from './cat/editcat/editcat.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { EditdeliveryComponent } from './delivery/editdelivery/editdelivery.component';
import { EditempComponent } from './emp/editemp/editemp.component';
import { EmpComponent } from './emp/emp.component';

const routes: Routes = [
  {path:'',component:CatComponent},
  {path:'delivery',component:DeliveryComponent},
  {path:'editcat/:cat_id',component:EditcatComponent},
  {path:'editdelivery/:del_id',component:EditdeliveryComponent},
  {path:'emp',component:EmpComponent},
  {path:'editemp/:emp_id',component:EditempComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
