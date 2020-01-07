import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AnguiAddressModule } from "@angui/address";
import { AnguiAddressExampleComponent } from "./angui-address-example.component";

const exported = [AnguiAddressExampleComponent];

const routes = [
  {
    path: "",
    component: AnguiAddressExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, AnguiAddressModule],
  declarations: [exported],
  exports: [exported],
})
export class AnguiAddressExampleModule {}
