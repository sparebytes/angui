import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AnguiAddressBlockComponent } from "./angui-address-block/angui-address-block.component";
import { AnguiAddressCityStateZipPipe } from "./angui-address-city-state-zip.pipe";
import { AnguiAddressCityStatePipe } from "./angui-address-city-state.pipe";
import { AnguiNormalizeAddressPipe } from "./angui-normalize-address.pipe";

const exported = [AnguiAddressBlockComponent, AnguiAddressCityStateZipPipe, AnguiAddressCityStatePipe, AnguiNormalizeAddressPipe];

@NgModule({
  imports: [CommonModule],
  declarations: [exported],
  exports: [exported],
})
export class AnguiAddressModule {}
