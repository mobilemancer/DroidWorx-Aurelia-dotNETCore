import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';

@autoinject
export class App {
    header = 'Droids!';
    droids = [];

    constructor(private http: HttpClient) {
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('http://localhost:5005/api/droids');
        });
    }

    activate() {
        return this.http.fetch("")
            .then(response => response.json())
            .then(droids => this.droids = droids);
    }
}