export class ContractFormatValueConverter {
    toView(value) {
        if (value === "00000000-0000-0000-0000-000000000000") {
            return "No";
        }
        return "Yes";
    }

    fromView(value) { }
}