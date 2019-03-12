import { InjectionToken, NgModuleFactoryLoader } from "@angular/core";
import { AngyLazyDialogNamePathMap } from "./angy-lazy-dialog-name-path-map";

export const ANGY_LAZY_DIALOG = new InjectionToken<AngyLazyDialogNamePathMap>("ANGY_LAZY_DIALOG");
export const ANGY_LAZY_DIALOG_NG_MODULE_FACTORY_LOADER = new InjectionToken<NgModuleFactoryLoader>("ANGY_LAZY_DIALOG_NG_MODULE_FACTORY_LOADER");

