"use strict";
var core_1 = require("@angular/core");
var MainComponent = (function () {
    function MainComponent() {
        this.username = "";
        this.password = "";
    }
    MainComponent.prototype.btnLogin = function () {
        console.log("GO LOGIN");
        console.log("username => ", this.username);
        console.log("password = > ", this.password);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQU0xQyxJQUFhLGFBQWE7SUFKMUI7UUFNWSxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQVUxQixDQUFDO0lBUlcsZ0NBQVEsR0FBaEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFakQsQ0FBQztJQUdMLG9CQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxhQUFhO0lBSnpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsaUJBQWlCO0tBQ2pDLENBQUM7R0FDVyxhQUFhLENBYXpCO0FBYlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInZpZXdzL21haW4uaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCB7IFxyXG4gICAgXHJcbiAgICBwcml2YXRlIHVzZXJuYW1lID0gXCJcIjtcclxuICAgIHByaXZhdGUgcGFzc3dvcmQgPSBcIlwiO1xyXG5cclxuICAgIHByaXZhdGUgYnRuTG9naW4oKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdPIExPR0lOXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlcm5hbWUgPT4gXCIgLCB0aGlzLnVzZXJuYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBhc3N3b3JkID0gPiBcIiAsIHRoaXMucGFzc3dvcmQpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19