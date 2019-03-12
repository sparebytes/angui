import { Inject, Injectable, Injector, NgModuleFactory, NgModuleFactoryLoader, NgModuleRef, OnDestroy } from "@angular/core";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";
import { AngyLazyDialogNamePathMap } from "./angy-lazy-dialog-name-path-map";
import { ANGY_LAZY_DIALOG, ANGY_LAZY_DIALOG_NG_MODULE_FACTORY_LOADER } from "./angy-lazy-dialog-token";

export interface AngyLazyOpenDialog {
  moduleRef: NgModuleRef<any>;
  dialogRef: MatDialogRef<any>;
  autoDestroy: boolean;
}

@Injectable()
export class AngyLazyDialogService implements OnDestroy {
  constructor(
    @Inject(ANGY_LAZY_DIALOG) private angyLazyDialogNamePathMap: AngyLazyDialogNamePathMap,
    @Inject(ANGY_LAZY_DIALOG_NG_MODULE_FACTORY_LOADER) private ngModuleFactoryLoader: NgModuleFactoryLoader,
    private injector: Injector,
  ) {}

  private openDialogs: AngyLazyOpenDialog[] = [];

  ngOnDestroy() {
    const openDialogs = this.openDialogs;
    this.openDialogs = [];
    const errors: any[] = [];
    for (const openDialog of openDialogs) {
      if (openDialog.autoDestroy) {
        try {
          openDialog.dialogRef.close();
          openDialog.moduleRef.destroy();
        } catch (error) {
          errors.push(error);
        }
      }
    }
    if (errors.length > 0) {
      throw errors;
    }
  }

  getModulePath(name: string): string {
    const modulePath = this.angyLazyDialogNamePathMap[name];
    if (modulePath == null || modulePath === "") {
      throw new Error(`AngyLazyDialogService.getModulePath("${name}"): Path is not provided in @Inject(ANGY_LAZY_DIALOG)`);
    }
    return modulePath;
  }

  async openDialog<O, C>(options: {
    module: string;
    component: string;
    autoDestroy?: boolean | null;
    config?: MatDialogConfig<O>;
  }): Promise<MatDialogRef<any, C>> {
    const modulePath = this.getModulePath(options.module);
    const moduleFactory: NgModuleFactory<any> = await this.ngModuleFactoryLoader.load(modulePath);
    const moduleRef: NgModuleRef<any> = moduleFactory.create(this.injector);
    try {
      const DialogComponent = (moduleFactory.moduleType as any)[options.component];
      if (DialogComponent == null) {
        throw new Error(
          `AngyLazyDialogService.openDialog(): "${options.component}" is not a static property on the module named "${
            options.module
          }".`,
        );
      }
      const dialog = moduleRef.injector.get(MatDialog);
      const dialogRef = dialog.open(DialogComponent, options.config);
      dialogRef.afterClosed().subscribe(() => {
        moduleRef.destroy();
      });
      this.openDialogs.push({
        moduleRef,
        dialogRef,
        autoDestroy: options.autoDestroy !== false,
      });
      return dialogRef;
    } catch (error) {
      moduleRef.destroy();
      throw error;
    }
  }
}
