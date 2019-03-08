import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UnimiAddressBlockComponent } from "./unimi-address-block/unimi-address-block.component";
import { UnimiAddressCityStateZipPipe } from "./unimi-address-city-state-zip.pipe";
import { UnimiAddressCityStatePipe } from "./unimi-address-city-state.pipe";
import { UnimiNormalizeAddressPipe } from "./unimi-normalize-address.pipe";

const exported = [UnimiAddressBlockComponent, UnimiAddressCityStateZipPipe, UnimiAddressCityStatePipe, UnimiNormalizeAddressPipe];

@NgModule({
  imports: [CommonModule],
  declarations: [exported],
  exports: [exported],
})
export class UnimiAddressModule {}
