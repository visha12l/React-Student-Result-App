import ReactDOM from 'react-dom';
var underscore = require('underscore');

function formatTime (time) {
    let newTime = [time.getHours(), time.getMinutes()];
    let hours = newTime[0] % 12;
    hours = hours ? (hours < 10 ? '0' + hours : hours) : 12;
    let minutes = newTime[1] < 10 ? '0' + newTime[1] : newTime[1];
    let amPm = newTime[0] >= 12 && newTime[0] < 24 ? ' PM' : ' AM';
    return (hours + ':' + minutes + amPm);
};

export function formatTwoDigitNum (number) {
    return number < 10 ? '0' + number : number;
};

export function dashboardDateFormat (timestamp) {
    let newDate = new Date(timestamp);
    newDate = appConstants.listMonthName[newDate.getMonth()] + ' ' + newDate.getDate() + ', ' + newDate.getFullYear();
    return newDate;
};

export function getViewportAvailability (targetElement, menuHeight) {
    let pageOffset = ReactDOM.findDOMNode(targetElement).getBoundingClientRect();
    return (window.innerHeight - pageOffset.top) > (menuHeight + pageOffset.height)
};

export function truncateObjWhiteSpace (formData) {
    let truncatedData = underscore.mapObject(formData, (row, key) => {
        return row.trim();
    });
    return truncatedData;
};

export function formatOrgName (orgName) {
    return orgName ? orgName.toLowerCase().replace(/\s/g, '-') : null;
};

export function truncateToTwoDecimals (fractionValue) {
    if (fractionValue && !isNaN(fractionValue)) {
        let truncatedValue = (Number(fractionValue) < 0 ? Math.ceil(Number(fractionValue) * 100) : Math.floor(Number(fractionValue) * 100)) / 100;
        return truncatedValue % 1 ? truncatedValue.toFixed(2) : truncatedValue;
    }
    return fractionValue;
};

export function isValidPercentage (value) {
    return value && !isNaN(value) && Number(value) <= 100;
};

export function isPositiveInteger (value) {
    return value && !isNaN(value) && Number(value) >= 0 && Number.isInteger(Number(value)) ;
};

export function getSignedPercentage (percentage) {
    return !isNaN(percentage) ? (Number(percentage) < 0 ? `- ${Math.abs(percentage)}` : `+ ${percentage}`) : '-';
};

export function isPositiveNumber (value) {
    return value && !isNaN(value) && Number(value) > 0;
};

export function formatStringOnCount (count, string) {
    if (!isNaN(count) && string) {
        return Number(count) === 1 ? string : `${string}s`;
    }
    return string;
};

export function getClassSet (classObject) {
    if(!underscore.isObject(classObject)) {
        return '';
    }
    return underscore.chain(classObject).map((flag, className) => {
        if(underscore.isString(className) && underscore.isBoolean(flag)) {
            return flag ? className : '';
        }
    }).compact().join(' ').value();
};

export function truncateStringWhiteSpace (text) {
    if (text) {
        text = text.toString().trim();
        return text.replace(/\s\s+/g, ' ');
    }
    return text;
};


export function checkValidEmail(email) {
    var reg =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
};

export function handleShowMoreClick (event) {
    if (event.currentTarget.parentElement.classList.contains('activeScrollWrap')) {
        $(event.currentTarget).text('Expand');
    } else {
        $(event.currentTarget).text('Collapse');
    }
    event.currentTarget.parentElement.classList.toggle('activeScrollWrap');
}
