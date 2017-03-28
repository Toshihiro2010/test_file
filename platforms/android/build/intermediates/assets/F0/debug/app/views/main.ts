import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "views/main.html",
})
export class MainComponent { 
    
    private username = "";
    private password = "";

    private btnLogin(){
        console.log("GO LOGIN");
        console.log("username => " , this.username);
        console.log("password = > " , this.password);
        
    }


}
