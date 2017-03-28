import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { MainComponent } from "./views/main";
import { CallComponent } from "./views/test_call/call-component";

const routes: Routes = [
    { path: "", redirectTo: "call", pathMatch: "full" },
    { path: "main", component: MainComponent },
    { path: "call" , component: CallComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }