import { NgModule } from "@angular/core";
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./task/task.component";
import { TaskItemComponent } from "./task/task-item/task-item.component";
import { AddTaskDialogComponent } from "./task/add-task-dialog/add-task-dialog.component";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { CardComponent } from "./shared/components/card/card.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        HeaderComponent,
        TaskComponent,
        TaskItemComponent,
        AddTaskDialogComponent,
        UserComponent,
        AppComponent,
        CardComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}