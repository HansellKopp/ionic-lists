import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPipeModule } from '../../modules/shared-pipes.module';
import { ListsComponent } from './lists/lists.component'

@NgModule({
  declarations: [
    ListsComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    SharedPipeModule
  ],
  exports: [
    ListsComponent
  ]
})
export class ComponentsModule { }
