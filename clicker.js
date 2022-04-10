function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function bot() {
    while (true) {
        try {
            let button = document.querySelector('.PlainButton_btn__CRXH4');
            button.click();
            await sleep(100);
            console.log("Mint button clicked");
        } catch (err) {
            console.log("Button not ready");
            await sleep(5000);
        }
    }
}

(function() {
    'use strict';
    bot();
})();
