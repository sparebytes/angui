import { Component } from "@angular/core";
import { AnguiLazyDialogService } from "@angui/lazy-dialog";

@Component({
  selector: "app-lazy-dialog-trigger-example",
  templateUrl: "./lazy-dialog-trigger-example.component.html",
  styleUrls: ["./lazy-dialog-trigger-example.component.scss"],
  providers: [AnguiLazyDialogService],
})
export class LazyDialogTriggerExampleComponent {
  constructor(private anguiLazyDialogService: AnguiLazyDialogService) {}

  async openLazyDialog() {
    const dialogRef = this.anguiLazyDialogService.openDialog({
      module: "LazyDialogExampleModule",
      component: "LazyDialogExampleComponent",
    });
  }
}
