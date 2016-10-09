import { HttpAbstraction } from '../../framework/http-abstraction';

export class Droids {
    public header = 'Droids';
    public droids = [];

    private http;

    public constructor() {
        this.http = new HttpAbstraction();
    }

    public activate() {
        this.http.GetResource("/api/droids")
            .then(data => this.droids = data);
    }

}