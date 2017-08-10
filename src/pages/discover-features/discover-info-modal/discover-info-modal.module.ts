import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiscoverInfoModal } from './discover-info-modal';

@NgModule({
  declarations: [
    DiscoverInfoModal,
  ],
  imports: [
    IonicPageModule.forChild(DiscoverInfoModal),
  ],
})
export class DiscoverInfoModalModule {}
