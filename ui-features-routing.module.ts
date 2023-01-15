import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiFeaturesComponent } from './ui-features.component';
import { GridComponent } from './grid/grid.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { SearchComponent } from './search-fields/search-fields.component';
import { RegisComponent } from './regis/regis.component';
import { LoginComponent } from './login/login.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { ChangepassComponent } from './changepass/changepass.component';




const routes: Routes = [{
  path: '',
  component: UiFeaturesComponent,
  children: [ {
    path: 'grid',
    component: GridComponent,
  }, {
    path: 'icons',
    component: IconsComponent,
  }, {
    path: 'typography',
    component: TypographyComponent,
  },{
    path:'regis',
    component:RegisComponent
  },{
    path:'forgotpass',
    component:ForgotpassComponent

  },
  {
    path:'changepass',
    component:ChangepassComponent

  },
  {
    path:'login',
    component:LoginComponent
  }, {
    path: 'search-fields',
    component: SearchComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiFeaturesRoutingModule { }
