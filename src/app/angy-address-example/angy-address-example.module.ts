import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AngyAddressModule } from "@angy/address";
import { AngyAddressExampleComponent } from "./angy-address-example.component";

const exported = [AngyAddressExampleComponent];

@NgModule({
  imports: [CommonModule, AngyAddressModule],
  declarations: [exported],
  exports: [exported],
})
export class AngyAddressExampleModule {}
