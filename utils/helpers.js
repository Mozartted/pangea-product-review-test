// helper functions to work with lots of stuffs
import uuidGenerator from "uuid/v4"
import crypto from "crypto"
import {useLocation} from "react-router-dom"
import moment from "moment"

export function insertItem(array, index, item) {
    return [
        ...array.slice(0, index),
        item,
        ...array.slice(index)
    ];
}

// A custom hook that builds on useLocation to parse
// the query string for you.
export function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  

export function removeItem(array, index) {
    return [
        ...array.slice(0, index),
        ...array.slice(index + 1)
    ];
}

export function generateUUID(){
    const code = uuidGenerator();
    return ('TRANS_REF-'+code)
}

export const integrityValue = (payload) => {
    let hashedPayload = '';
    const keys =  Object.keys(payload).sort();
    for(var index in keys){
        const key = keys[index];
        hashedPayload += payload[key];
    }
    let hashString = hashedPayload + process.env.REACT_APP_RAVE_SECRET_KEY;

    const shaHash = crypto.createHash('sha256').update(hashString, 'utf8').digest('hex');
    return shaHash;
}

export const formatCurrency = (value) => {
    const options2 = { style: 'currency', currency: 'NGN' };
    const numberFormat2 = new Intl.NumberFormat('en-US', options2);

    return numberFormat2.format(value)
} 

export const momentInTime = (date) => {
    // updates for the next space.
    return moment(date).format("DD MMM, YYYY")
}

export const momentInTimeDate = (date) => {
    return moment(date).format("DD MMM, YYYY HH:mm")
}

export const momentInThePast = (date) => {
    return moment(date).isBefore(moment(new Date()))
}

export const percentageOfSuccess = (milestones) => {
    return (milestones.filter((item) => item.disburseStatus == "CONFIRMED").length / milestones.length) * 100
}

export const milestoneCalls = (milestones) => {
    // get number that are completed
    let realscore = milestones.filter((item) => item.disburseStatus == "CONFIRMED");
    let score = `${realscore.length}/${milestones.length}`
    return score;
}