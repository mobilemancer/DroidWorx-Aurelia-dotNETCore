import {autoinject} from "aurelia-framework";
import {RouterConfiguration, Router} from "aurelia-router";

@autoinject
export class App {
    private router: Router;

    configureRouter(config: RouterConfiguration, router: Router): void {
        this.router = router;
        config.title = "Droid Worx";
        config.map([
            { route: ["", "home", "index"], name: "home",   moduleId: "views/home/index",   title: "Home" },
            { route: "droids",              name: "home",   moduleId: "views/droids/droids",       title: "Droids",    nav: true}
        ]);
    }
}