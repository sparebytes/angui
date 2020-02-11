import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-lazy-dialog-example",
  templateUrl: "./lazy-dialog-example.component.html",
  styleUrls: ["./lazy-dialog-example.component.scss"],
})
export class LazyDialogExampleComponent {
  constructor(
    public dialogRef: MatDialogRef<LazyDialogExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LazyDialogExampleComponent.DialogOpen,
  ) {}

  static openDialog(dialog: MatDialog, data: LazyDialogExampleComponent.DialogOpen) {
    const dialogRef: LazyDialogExampleComponent.DialogRef = dialog.open(LazyDialogExampleComponent, {

      data: data,
    });
    return dialogRef;
  }
}

export module LazyDialogExampleComponent {
  export interface DialogOpen {}
  export interface DialogClose {}
  export type DialogRef = MatDialogRef<LazyDialogExampleComponent, DialogClose>;
}
