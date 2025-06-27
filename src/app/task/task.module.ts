import { NgModule } from "@angular/core";
import { AddTaskDialogComponent } from "./add-task-dialog/add-task-dialog.component";
import { TaskItemComponent } from "./task-item/task-item.component";
import { TaskComponent } from "./task.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AddTaskDialogComponent,
        TaskItemComponent,
        TaskComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    exports: [
        TaskComponent
    ]
})
export class TaskModule {}