import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Index0PageRoutingModule } from './index0-routing.module';

import { Index0Page } from './index0.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Index0PageRoutingModule
  ],
  declarations: [Index0Page]
})
export class Index0PageModule {}
