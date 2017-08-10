import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiveInfoModal } from './live-info-modal';

@NgModule({
  declarations: [
    LiveInfoModal,
  ],
  imports: [
    IonicPageModule.forChild(LiveInfoModal),
  ],
})
export class LiveInfoModalModule {}
