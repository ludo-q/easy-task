import { NgModule } from "@angular/core";
import { UserComponent } from "./user/user.component";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";
import { TaskModule } from "./task/task.module";

@NgModule({
    declarations: [
        HeaderComponent,
        UserComponent,
        AppComponent,
    ],
    imports: [
        BrowserModule,
        SharedModule,
        TaskModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}