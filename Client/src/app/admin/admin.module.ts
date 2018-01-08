import { NgModule } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { SharedModule } from '@shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogService } from '@services/dialog.service';

@NgModule({
   imports: [
      SharedModule,
      AdminRoutingModule
   ],
   declarations: [
      UserListComponent,
      UserFormComponent
   ],
   entryComponents: [
     UserFormComponent
   ],
   providers: [
      DialogService
   ]
})
export class AdminModule { }
