import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';

@autoinject
export class Droids {
    public header = 'Droids';
    public droids = [];

    constructor(private http: HttpClient) {
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('http://localhost:5005/');
        });
    }

    activate() {
        var myHeaders = new Headers();

        var myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'no-cors',
            cache: 'default'
        };

        console.log("About to FETCH!");

        //return this.http.fetch("api/droids", { mode: "no-cors", cache: "no-cache" })
        //    .then(response => response.json())
        //    .then(droids => this.droids = droids);


        //This fails on chrome, is it bluebird?
        return this.http.fetch("api/droids", { mode: "no-cors", cache: "no-cache" })
            .then(response => {
                console.log(response.status);
                let json = response.json();
                return json;
            })
            .then(droids => {
                console.log("setting droids!");
                this.droids = droids;
                console.log("droids: " + droids);
            })
            .catch(err => {
                console.log(err);
            });

    }

    private logResp(response: any): void {
    }
}