import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AngyAddressModule } from "@angy/address";
import { AngyAddressExampleComponent } from "./angy-address-example.component";

const exported = [AngyAddressExampleComponent];

const routes = [
  {
    path: "",
    component: AngyAddressExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, AngyAddressModule],
  declarations: [exported],
  exports: [exported],
})
export class AngyAddressExampleModule {}
