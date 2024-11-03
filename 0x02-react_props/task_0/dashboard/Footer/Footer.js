import React from React;

function Footer() {
    return (
        <div className="App-footer">
            Copyright {getFullYear()} - {getFooterCopy()}
        </div>
    )
}