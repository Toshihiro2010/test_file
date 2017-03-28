import { Component , OnInit} from "@angular/core";

import * as fs from "file-system";

@Component({
    selector: "ns-app",
    templateUrl: "views/test_call/call-component.html",
})
export class CallComponent implements OnInit{

    private file : fs.File;
    private folder : fs.Folder;

    constructor(){

    }

    ngOnInit(): void{
        console.log("------------------ngOnInit--------------------");
        this.testcreate();
    }
    
    private testcreate(){
        let self = this;
        console.log("------------------- testcreate --------------------");
        let documents = fs.knownFolders.documents();
        self.folder = documents.getFolder("sound");
        self.file = self.folder.getFile("test.txt");

    }


}
