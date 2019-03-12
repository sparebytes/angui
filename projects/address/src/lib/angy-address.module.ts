import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AngyAddressBlockComponent } from "./angy-address-block/angy-address-block.component";
import { AngyAddressCityStateZipPipe } from "./angy-address-city-state-zip.pipe";
import { AngyAddressCityStatePipe } from "./angy-address-city-state.pipe";
import { AngyNormalizeAddressPipe } from "./angy-normalize-address.pipe";

const exported = [AngyAddressBlockComponent, AngyAddressCityStateZipPipe, AngyAddressCityStatePipe, AngyNormalizeAddressPipe];

@NgModule({
  imports: [CommonModule],
  declarations: [exported],
  exports: [exported],
})
export class AngyAddressModule {}
