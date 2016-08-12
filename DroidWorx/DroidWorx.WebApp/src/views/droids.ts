import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@autoinject
export class Droids {
    heading = 'Droids';
    droids = [];

    constructor(private http: HttpClient) {
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('http://localhost:5005/api/droids');
        });
    }

    activate() {
        return this.http.fetch('users')
            .then(response => response.json())
            .then(droids => this.droids = droids);
    }
}