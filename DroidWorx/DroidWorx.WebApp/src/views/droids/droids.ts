import {HttpClient} from 'aurelia-fetch-client';
//import {HttpClient} from "aurelia-http-client";
import {autoinject} from 'aurelia-framework';

@autoinject
export class Droids {
    public header = 'Droids';
    public droids = [];

    constructor(private http: HttpClient) {
        //using Http client
        //http.configure(config => {
        //    config.withBaseUrl('http://localhost:5005');
        //    config.withInterceptor({
        //        request(message) {
        //            return message;
        //        },
        //        requestError(error) {
        //            throw error;
        //        },
        //        response(message) {
        //            return message;
        //        },
        //        responseError(error) {
        //            throw error;
        //        }
        //    });

        //using FETCH client
        http.configure
            (config => {
                config
                    .withBaseUrl('http://localhost:5005')
                    .useStandardConfiguration()
                    .withDefaults({
                        //credentials: 'same-origin',

                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Accept': 'application/json',
                            'X-Requested-With': 'Fetch'
                        }
                    })
                    .withInterceptor({
                        request(request) {
                            console.log(`Requesting ${request.method} ${request.url}`);
                            return request; // you can return a modified Request, or you can short-circuit the request by returning a Response
                        },
                        requestError(request) {
                            //console.log(`Request failed! ${request.method} ${request.url}`);
                            return request; // you can return a modified Request, or you can short-circuit the request by returning a Response
                        },
                        response(response) {
                            //console.log(`Received ${response.status} ${response.url}`);
                            return response; // you can return a modified Response
                        },
                        responseError(response) {
                            console.log(`Response failed! ${response.status} ${response.url}`);
                            return response; // you can return a modified Response
                        }
                    });
            });
    }

    activate() {

        //using regular Http client
        //this.http.createRequest('api/droids')
        //    .asGet()
        //    .withBaseUrl('http://localhost:5005')
        //    .withHeader("Access-Control-Allow-Origin", "*")
        //    .send()
        //    .then(response => {
        //        let resp = response.content;
        //        this.droids = resp;
        //        let code = response.statusCode.toString();
        //    });


        //using FETCH client
        console.log("About to FETCH!");
        return this.http.fetch("/api/droids", { mode: "no-cors", cache: "no-cache" })
            .then(response => {
                if (response.status > 199 && response.status < 300) {
                    return response.json();
                } else {
                    console.warn("something wen't horribly wrong!");
                }
            })
            .then(
            droids =>
                this.droids = droids
            );


        //var myInit = {
        //    method: 'GET',
        //    mode: 'no-cors',
        //    cache: 'default'
        //};

        //This fails on chrome, is it bluebird?
        //return this.http.fetch("api/droids", { mode: "no-cors", cache: "no-cache" })
        //    .then(response => {
        //        console.log(response.status);
        //        let json = response.json();
        //        return json;
        //    }).then(droids => {
        //        console.log("setting droids!");
        //        this.droids = droids;
        //        console.log("droids: " + droids);
        //    }).catch(err => {
        //        console.log(err);
        //    }).finally(x => {
        //        console.log(x);
        //    });
    }

}