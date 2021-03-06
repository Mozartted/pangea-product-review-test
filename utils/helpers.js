import getCurrencySymbol from "currency-symbol-map"

export function insertItem(array, index, item) {
    return [
        ...array.slice(0, index),
        item,
        ...array.slice(index)
    ];
}


export function removeItem(array, index) {
    return [
        ...array.slice(0, index),
        ...array.slice(index + 1)
    ];
}

export const getSymbol = (currency) => {
    return getCurrencySymbol(currency) || ""
}

export const formatCurrency = (value) => {
    const numberFormat2 = new Intl.NumberFormat();
    return numberFormat2.format(value)
}