import * as numeral from "numeral";

export class CreditConverterValueConverter {

    toView(value) {
        numeral.language('galacticbasic', {
            delimiters: {
                thousands: ' ',
                decimal: '.'
            },
            abbreviations: {
                thousand: 'k',
                million: 'm',
                billion: 'b',
                trillion: 't'
            },
            ordinal: function (number) {
                return number === 1 ? 'st' : 'th';
            },
            currency: {
                symbol: ""
            }
        });

        // switch between languages
        numeral.language('galacticbasic');
        return numeral(value).format('$ 0.0 a');
    }

    fromView(value) {

    }
}

