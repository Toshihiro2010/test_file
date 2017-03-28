"use strict";
var core_1 = require("@angular/core");
var fs = require("file-system");
var MainComponent = (function () {
    function MainComponent() {
        this.isItemVisible = false;
    }
    MainComponent.prototype.onCreateFile = function () {
        var _this = this;
        // >> fs-create-all-code
        var documents = fs.knownFolders.documents();
        this.folder = documents.getFolder(this.folderName || "testFolder");
        this.file = this.folder.getFile((this.fileName || "testFile") + ".txt");
        this.file.writeText(this.fileTextContent || "some random content")
            .then(function (result) {
            // Succeeded writing to the file.
            _this.file.readText()
                .then(function (res) {
                _this.successMessage = "Successfully saved in " + _this.file.path;
                _this.writtenContent = res;
                _this.isItemVisible = true;
            });
        }).catch(function (err) {
            // Error
        });
        // << fs-create-all-code
    };
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        templateUrl: "views/main.html",
    })
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQUMxQyxnQ0FBa0M7QUFNbEMsSUFBYSxhQUFhO0lBSjFCO1FBWVcsa0JBQWEsR0FBWSxLQUFLLENBQUM7SUF5QjFDLENBQUM7SUFwQlUsb0NBQVksR0FBbkI7UUFBQSxpQkFtQkM7UUFsQkcsd0JBQXdCO1FBQ3hCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksWUFBWSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksVUFBVSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFFeEUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxxQkFBcUIsQ0FBQzthQUM3RCxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1IsaUNBQWlDO1lBQ2pDLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2lCQUNmLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBQ0wsS0FBSSxDQUFDLGNBQWMsR0FBRyx3QkFBd0IsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDaEUsS0FBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNSLFFBQVE7UUFDWixDQUFDLENBQUMsQ0FBQztRQUNQLHdCQUF3QjtJQUM1QixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDO0FBakNZLGFBQWE7SUFKekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxpQkFBaUI7S0FDakMsQ0FBQztHQUNXLGFBQWEsQ0FpQ3pCO0FBakNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZpbGUtc3lzdGVtXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvbWFpbi5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IHsgXHJcbiAgICBcclxuICAgIHB1YmxpYyBmb2xkZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZmlsZU5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBmaWxlVGV4dENvbnRlbnQ6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgc3VjY2Vzc01lc3NhZ2U6IHN0cmluZztcclxuICAgIHB1YmxpYyB3cml0dGVuQ29udGVudDogc3RyaW5nO1xyXG4gICAgcHVibGljIGlzSXRlbVZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgZmlsZTogZnMuRmlsZTtcclxuICAgIHB1YmxpYyBmb2xkZXI6IGZzLkZvbGRlcjtcclxuXHJcbiAgICBwdWJsaWMgb25DcmVhdGVGaWxlKCkge1xyXG4gICAgICAgIC8vID4+IGZzLWNyZWF0ZS1hbGwtY29kZVxyXG4gICAgICAgIGxldCBkb2N1bWVudHMgPSBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5mb2xkZXIgPSBkb2N1bWVudHMuZ2V0Rm9sZGVyKHRoaXMuZm9sZGVyTmFtZSB8fCBcInRlc3RGb2xkZXJcIik7XHJcbiAgICAgICAgdGhpcy5maWxlID0gdGhpcy5mb2xkZXIuZ2V0RmlsZSgodGhpcy5maWxlTmFtZSB8fCBcInRlc3RGaWxlXCIpICsgXCIudHh0XCIpO1xyXG5cclxuICAgICAgICB0aGlzLmZpbGUud3JpdGVUZXh0KHRoaXMuZmlsZVRleHRDb250ZW50IHx8IFwic29tZSByYW5kb20gY29udGVudFwiKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gU3VjY2VlZGVkIHdyaXRpbmcgdG8gdGhlIGZpbGUuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGUucmVhZFRleHQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBcIlN1Y2Nlc3NmdWxseSBzYXZlZCBpbiBcIiArIHRoaXMuZmlsZS5wYXRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndyaXR0ZW5Db250ZW50ID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzSXRlbVZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gRXJyb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gPDwgZnMtY3JlYXRlLWFsbC1jb2RlXHJcbiAgICB9XHJcbn0iXX0=