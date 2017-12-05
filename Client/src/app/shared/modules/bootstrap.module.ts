import { NgModule } from '@angular/core';

import {
  ButtonsModule,
  ModalModule,
  TabsModule
} from 'ngx-bootstrap';

@NgModule({
  imports: [
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot()
  ],
  exports: [
    ButtonsModule,
    TabsModule,
    ModalModule
  ]
})
export class BootstrapModule { }
