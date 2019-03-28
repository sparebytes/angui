import { Component } from "@angular/core";
import { AngyLazyDialogService } from "@angy/lazy-dialog";

@Component({
  selector: "app-lazy-dialog-trigger-example",
  templateUrl: "./lazy-dialog-trigger-example.component.html",
  styleUrls: ["./lazy-dialog-trigger-example.component.scss"],
  providers: [AngyLazyDialogService],
})
export class LazyDialogTriggerExampleComponent {
  constructor(private angyLazyDialogService: AngyLazyDialogService) {}

  async openLazyDialog() {
    const dialogRef = this.angyLazyDialogService.openDialog({
      module: "LazyDialogExampleModule",
      component: "LazyDialogExampleComponent",
    });
  }
}
