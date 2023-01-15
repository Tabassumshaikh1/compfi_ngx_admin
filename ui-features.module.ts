import { NgModule } from '@angular/core';
import { NbAlertModule, NbCardModule, NbIconModule, NbPopoverModule, NbSearchModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { UiFeaturesRoutingModule } from './ui-features-routing.module';
import { UiFeaturesComponent } from './ui-features.component';
import { GridComponent } from './grid/grid.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { SearchComponent } from './search-fields/search-fields.component';
import { RegisComponent } from './regis/regis.component';
import { LoginComponent } from './login/login.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { ChangepassComponent } from './changepass/changepass.component';


const components = [
  UiFeaturesComponent,
  GridComponent,
  IconsComponent,
  TypographyComponent,
  SearchComponent,
  RegisComponent,
  LoginComponent,
];

@NgModule({
  imports: [
    NbCardModule,
    NbPopoverModule,
    NbSearchModule,
    NbIconModule,
    NbAlertModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    UiFeaturesRoutingModule,
  ],
  declarations: [
    ...components,
    ForgotpassComponent,
    ChangepassComponent,
   
    
  ],
})
export class UiFeaturesModule { }
