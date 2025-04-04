import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TaskComponent } from './task.component';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [TaskComponent],
  exports: [TaskComponent]
})
export class TaskComponentModule {}
