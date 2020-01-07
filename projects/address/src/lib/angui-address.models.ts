export interface AnguiAddressStrict {
  street1: string;
  street2: string;
  street3: string;
  cityName: string;
  stateCode: string;
  postalCode: string;
  countryCode: string;
}

export interface AnguiAddressLoose {
  street1?: string | null;
  street2?: string | null;
  street3?: string | null;
  line1?: string | null;
  line2?: string | null;
  line3?: string | null;
  cityName?: string;
  city?:
    | {
        name?: string | null;
      }
    | string
    | null;
  stateCode?: string | null;
  state?:
    | {
        name?: string | null;
        stateCode?: string | null;
      }
    | string
    | null;
  zip?: string | null;
  zipCode?: string | null;
  postalCode?: string | null;
  countryCode?: string | null;
}

export module AnguiAddressLoose {
  export function normalize(address: AnguiAddressLoose | null | undefined): AnguiAddressStrict {
    if (address == null) {
      address = {};
    }
    const result = {
      street1: address.street1 || address.line1 || "",
      street2: address.street2 || address.line2 || "",
      street3: address.street3 || address.line3 || "",
      cityName: address.cityName || (typeof address.city === "string" ? address.city : address.city && address.city.name) || "",
      stateCode:
        address.stateCode || (typeof address.state === "string" ? address.state : address.state && address.state.stateCode) || "",
      postalCode: address.postalCode || address.zipCode || address.zip || "",
      countryCode: address.countryCode || "",
    };
    return result;
  }
}
