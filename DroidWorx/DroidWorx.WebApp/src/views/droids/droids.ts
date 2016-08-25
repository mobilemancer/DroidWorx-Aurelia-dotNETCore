import { HttpAbstraction } from '../../framework/http-abstraction';
//import {autoinject} from 'aurelia-framework';

//@autoinject
export class Droids {
    public header = 'Droids';
    public droids = [];
    private http;

    constructor() {
        this.http = new HttpAbstraction();
    }

    activate() {
        this.http.GetResource("/api/droids")
            .then(data => this.droids = data);
    }

}