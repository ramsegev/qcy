import {useEffect, useContext} from "react";
import {Params} from "./context";
const useMagicNumber = num => {
    const a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    const b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    if ((num = num.toString()).length > 9) return 'overflow';
    const n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (parseInt(n[1]) !== 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'trillion ' : '';
    str += (parseInt(n[2]) !== 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'million ' : '';
    str += (parseInt(n[3]) !== 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (parseInt(n[4]) !== 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (parseInt(n[5]) !== 0) ? ((str !== '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
    return str;
}
const useUpdateLocalStorage = () => {
    const params = useContext(Params);
    let originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
        let event = new Event('itemChange');
        event.value = value; // Optional..
        event.key = key; // Optional..
        document.dispatchEvent(event);
        originalSetItem.apply(this, arguments);
    };
    const localStorageSetHandler = (e) => {
        if (e.key === "widgetList" && params.widgetList !== e.value) {
            params.widgetList = e.value;

        }
    }
    useEffect(() => {
        document.addEventListener("itemChange", localStorageSetHandler, false);
    }, []);

}

export {
    useMagicNumber,
    useUpdateLocalStorage
}
