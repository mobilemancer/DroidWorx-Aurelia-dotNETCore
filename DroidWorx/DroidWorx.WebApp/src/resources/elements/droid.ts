import {bindable} from 'aurelia-framework';

export class Droid {
    @bindable name;
    @bindable productSeries;
    @bindable imperialContractId;
    @bindable creditBalance;
    @bindable height;



    valueChanged(newValue, oldValue) {

    }
}

