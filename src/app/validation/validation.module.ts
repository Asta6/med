import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidationPageRoutingModule } from './validation-routing.module';

import { ValidationPage } from './validation.page';
import { TaskService } from './task.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidationPageRoutingModule
  ],
  declarations: [ValidationPage],
  providers: [TaskService] // Injection du service dans le module
})
export class ValidationPageModule {}
