import { Injectable } from "@angular/core";
import { AnguiAddressLoose } from "./angui-address.models";

@Injectable({ providedIn: "root" })
export class AnguiAddressDisplayService {
  getCityStateZip(address: AnguiAddressLoose | null | undefined): string | null {
    if (address == null) {
      return null;
    } else {
      address = AnguiAddressLoose.normalize(address);
      const result = [
        address.cityName,
        address.cityName && (address.stateCode || address.zipCode) ? ", " : " ",
        address.stateCode,
        " ",
        address.zipCode,
      ]
        .join("")
        .replace(/ {2,}/g, " ")
        .trim();
      return result;
    }
  }

  getCityState(address: AnguiAddressLoose | null | undefined): string | null {
    if (address == null) {
      return null;
    } else {
      address = AnguiAddressLoose.normalize(address);
      const result = [address.cityName, address.cityName && address.stateCode ? ", " : " ", address.stateCode]
        .join("")
        .replace(/ {2,}/g, " ")
        .trim();
      return result;
    }
  }
}
