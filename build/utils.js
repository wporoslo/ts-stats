"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (date) {
    var dateParts = date
        .split('/')
        .map(function (value) { return parseInt(value, 10); });
    var day = dateParts[0];
    var month = dateParts[1] - 1;
    var year = dateParts[2];
    return new Date(year, month, day);
};
exports.dateStringToDate = dateStringToDate;
