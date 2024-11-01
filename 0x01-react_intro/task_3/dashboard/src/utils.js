exports.getFullYear = () => {
    return new Date().getFullYear();
}

exports.getFooterCopy = (isIndex) => {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

exports.getLatestNotification = () => '<strong>Urgent requirement</strong> - complete by EOD';


exports.buttonClicked = () => {
    console.log("Close Button has been clicked")
}