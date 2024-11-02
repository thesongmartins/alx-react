export function getFullYear() {
    return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

export function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD';
}


export function buttonClicked() {
    console.log("Close Button has been clicked")
}