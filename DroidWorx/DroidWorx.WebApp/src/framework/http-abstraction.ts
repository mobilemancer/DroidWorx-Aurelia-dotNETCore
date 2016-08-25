import {HttpClient} from 'aurelia-fetch-client';

export class HttpAbstraction {
    private http: HttpClient;

    constructor() {
        this.http = new HttpClient();

        //using FETCH client
        this.http.configure
            (config => {
                config
                    .withBaseUrl('http://localhost:5005')
                    .useStandardConfiguration()
                    .withDefaults({
                        mode: 'cors',
                        headers: {
                            'Access-Control-Allow-Origin': 'http://localhost:5000',
                            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
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

    public GetResource(endPoint: string): any {
        return this.http.fetch(endPoint, { mode: "no-cors", cache: "no-cache" })
            .then(response => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    console.warn("something wen't horribly wrong!");
                }
            });
    }


}
