/** 
 * This function loads jQuery onto a page and works even if it already exists on the page.
 * This is necessary to add to any page you'd like to use these techniques on.
 * Be sure to run this first before hacking, each time you refresh the page.
 */ 
const loadjQuery = () => {
    var script = document.createElement('script');
    script.src = "//code.jquery.com/jquery-3.5.1.min.js";
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script)
}

/**
 * This function waits for jQuery to load before calling your hacking scripts.
 * Because JavaScript runs asynchronously by default, we must specifically must explicitely wait for it to load before calling our hack() function.
 */
const waitForjQuery = () => {
    let counter = 0;

    pollForjQuery = setInterval( () => {
        if (!!jQuery) {
            clearInterval(pollForjQuery);
            hack();
        } else if (counter >= 2000) {
            clearInterval(pollForjQuery);
            alert('jQuery load timeout...');
        }

        counter +=100;
    }, 100)
}

/**
 * Here is where all of my "hacks" are called
 */
const hack = () => {
    replaceFooterText();
    replaceHeaderText();
    replaceSlideshow();
}

/**
 * Replacing the Footer Text
 * 1. Find element using the Elements tab of the console
 * 2. Build the selector string
 * 3. Replace the HTML with the jQuery .html() method
 */
const replaceFooterText = () => {
    let elementSelector = '#fsEl_20342 > header > h2';
    jQuery(elementSelector).html('MOAR HAKING!!!!!!');
}

/**
 * Replacing the Header text
 * 1. Find element using the Elements tab of the console
 * 2. Build the selector string
 * 3. Build the html string we will add to the code
 * 4. Clear the background image using the jQuery .css() method
 * 5. Add the new html string using the jQuery .append() method
 */
const replaceHeaderText = () => {
    let elementSelector = '#fsEl_16454 > div > a';
    
    const weCanHackHTML = '<h1>We Can Hax!!</h1>';

    jQuery(elementSelector)
        .css('background-image', 'none')
        .append(weCanHackHTML);
}

/**
 * Replacing the Slideshow
 * 1. Find element using the Elements tab of the console. Make sure you find the top-most div
 * 2. Build the selector string
 * 3. Build the html string we will add to the code
 * 4. Remove the current slideshow using the jQuery .empty() method
 * 5. Add the new html string using the jQuery .append() method
 */
const replaceSlideshow = () => {
    let elementSelector = '#fsEl_20384';

    const injectedHTMLstring = '<div style="text-align:center"><div style="padding:16px;"><img src=https://media1.tenor.com/images/d0ed52f3f0b201dcca575563c66ef445/tenor.gif?itemid=9588201" alt="cat-hacker"></div></div>';

    jQuery(elementSelector)
        .empty()
        .append(injectedHTMLstring);
}

/**
 * Call the two functions that run the code
 */
loadjQuery();
waitForjQuery();