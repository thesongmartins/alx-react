import React from React;
import './Footer.css';

function Footer() {
    return (
        <div className="App-footer">
            Copyright {getFullYear()} - {getFooterCopy()}
        </div>
    )
}
export default Footer;