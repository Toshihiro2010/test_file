"use strict";
var core_1 = require("@angular/core");
var fs = require("file-system");
var CallComponent = (function () {
    function CallComponent() {
    }
    CallComponent.prototype.ngOnInit = function () {
        console.log("------------------ngOnInit--------------------");
        this.testcreate();
    };
    CallComponent.prototype.testcreate = function () {
        var self = this;
        console.log("------------------- testcreate --------------------");
        var documents = fs.knownFolders.documents();
        self.folder = documents.getFolder("sound");
        self.file = self.folder.getFile("test.txt");
    };
    return CallComponent;
}());
CallComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        templateUrl: "views/test_call/call-component.html",
    }),
    __metadata("design:paramtypes", [])
], CallComponent);
exports.CallComponent = CallComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYWxsLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBRWxELGdDQUFrQztBQU1sQyxJQUFhLGFBQWE7SUFLdEI7SUFFQSxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0RBQWdELENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVPLGtDQUFVLEdBQWxCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMscURBQXFELENBQUMsQ0FBQztRQUNuRSxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRWhELENBQUM7SUFHTCxvQkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUF4QlksYUFBYTtJQUp6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLHFDQUFxQztLQUNyRCxDQUFDOztHQUNXLGFBQWEsQ0F3QnpCO0FBeEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50ICwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZpbGUtc3lzdGVtXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmlld3MvdGVzdF9jYWxsL2NhbGwtY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIENhbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gICAgcHJpdmF0ZSBmaWxlIDogZnMuRmlsZTtcclxuICAgIHByaXZhdGUgZm9sZGVyIDogZnMuRm9sZGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWR7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS1uZ09uSW5pdC0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgICAgIHRoaXMudGVzdGNyZWF0ZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHRlc3RjcmVhdGUoKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tIHRlc3RjcmVhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAgICAgbGV0IGRvY3VtZW50cyA9IGZzLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcclxuICAgICAgICBzZWxmLmZvbGRlciA9IGRvY3VtZW50cy5nZXRGb2xkZXIoXCJzb3VuZFwiKTtcclxuICAgICAgICBzZWxmLmZpbGUgPSBzZWxmLmZvbGRlci5nZXRGaWxlKFwidGVzdC50eHRcIik7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19