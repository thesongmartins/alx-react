exports.getFullYear = () => {
    return new Date().getFullYear();
}

exports.getFooterCopy = (isIndex) => {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}
