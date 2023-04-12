const { existsSync, readFileSync, writeFileSync } = require('fs');

module.exports = class InitDatory {
    constructor(value) {
        if (!value) throw 'Constructor \'InitDatory\' needs a valid relative directory.';
        else this.fileName = value, !existsSync(this.fileName) && this.replaceAll();
    };

    findAndDelete(value)  {
        if (typeof value !== 'string') throw 'Method \'findAndDelete\' only accept \'string\'.';
        const currentData = this.listAll(), SearchedElement = currentData.find(column => (column)[value]);
        SearchedElement && currentData.splice(currentData[currentData.indexOf(SearchedElement)], 1);
        return this.replaceAll(currentData);
    };

    replaceAll(value = []) {
        if (!Array.isArray(value) || !value.every(column => typeof column === 'object')) throw 'Method \'replaceAll\' only accept \'object[].\'';
        return writeFileSync(this.fileName, `${JSON.stringify(value)}\n-- DATORY`);
    };

    findInto(value) {
        return (this.listAll()).find(column => (column)[value])?.[value];
    };

    putInto(value) {
        if (typeof value !== 'object') throw 'Method \'putInto\' only accept \'{}\'.';
        const currentData = this.listAll(), SearchedElement = currentData.find(column => (column)[(Object.keys(value)[0])]);
        SearchedElement ? currentData[currentData.indexOf(SearchedElement)] = value : currentData.push(value);
        return this.replaceAll(currentData);
    };

    listAll() {
        return (JSON.parse(readFileSync(this.fileName, 'utf-8').split`\n`[0]));
    };
};