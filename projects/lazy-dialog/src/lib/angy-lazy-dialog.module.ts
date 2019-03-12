import { ModuleWithProviders, NgModule, SystemJsNgModuleLoader } from "@angular/core";
import { AngyLazyDialogNamePathMap } from "./angy-lazy-dialog-name-path-map";
import { ANGY_LAZY_DIALOG, ANGY_LAZY_DIALOG_NG_MODULE_FACTORY_LOADER } from "./angy-lazy-dialog-token";

@NgModule({
  imports: [],
  declarations: [],
  entryComponents: [],
  exports: [],
})
export class AngyLazyDialogModule {
  static forRoot(namePathMap: AngyLazyDialogNamePathMap): ModuleWithProviders {
    return {
      ngModule: AngyLazyDialogModule,
      providers: [
        {
          provide: ANGY_LAZY_DIALOG_NG_MODULE_FACTORY_LOADER,
          useClass: SystemJsNgModuleLoader,
        },
        {
          provide: ANGY_LAZY_DIALOG,
          useValue: namePathMap,
        },
      ],
    };
  }
}
