import {bindable} from 'aurelia-framework';

export class DroidSpecCustomElement {
    @bindable droid;

    //public name: string;
    //public productSeries: string;
    //public imperialContractId: string;
    //public creditBalance: number;
    //public heigh: number;

    constructor() {
    }

    valueChanged(newValue, oldValue) {

    }
}

