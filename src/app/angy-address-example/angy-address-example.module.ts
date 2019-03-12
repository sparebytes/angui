import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UnimiAddressModule } from "@unimi/address";
import { UnimiAddressExampleComponent } from "./unimi-address-example.component";

const exported = [UnimiAddressExampleComponent];

@NgModule({
  imports: [CommonModule, UnimiAddressModule],
  declarations: [exported],
  exports: [exported],
})
export class UnimiAddressExampleModule {}
