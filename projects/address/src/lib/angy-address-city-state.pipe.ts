import { Pipe, PipeTransform } from "@angular/core";
import { AnguiAddressDisplayService } from "./angui-address-display.service";
import { AnguiAddressLoose } from "./angui-address.models";

@Pipe({ name: "anguiAddressCityState" })
export class AnguiAddressCityStatePipe implements PipeTransform {
  constructor(private anguiAddressDisplayService: AnguiAddressDisplayService) {}
  transform(address: AnguiAddressLoose | null): string | null {
    return this.anguiAddressDisplayService.getCityState(address);
  }
}
