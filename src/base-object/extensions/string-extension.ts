interface String {
    format(...replacements: string[]): string;
    formatUnicorn(...replacements: any): string;
}

if (!String.prototype.format) {

    String.prototype.format = function (): string {
        const args = arguments;
        return this.replace(/{(\d+)}/gm, function (match, number) {
            return ((typeof args[number] != 'undefined' && typeof args[number] == 'string') ? args[number] : match);
        });
    };
}

if (!String.prototype.formatUnicorn) {

    String.prototype.formatUnicorn = function (params: any): string {
        let str: string = this.toString();
        for (let key in params) {
            str = str.split('${' + key + '}').join(params[key].toString());
        }
        return str;
    }

}