// Side Bar Animation + isHidden for defining the 'hidden' bool
// called in index.js

export function sideBarAnim(hidden, bar, button, buttonText, topBar, siteBox) {
    if(!hidden) {

        $(bar).animate({
            left: '-115px'
        })

        $(button).animate({
            left: '5px'
        })

        $(topBar).animate({
            left: '35px'
        })

        $(siteBox).animate({
            left: '35px'
        })

        $(buttonText).text(">")

        isHidden(true)
        
    } else {

        $(bar).animate({
            left: '0px'
        })

        $(button).animate({
            left: '115px'
        })

        $(topBar).animate({
            left: '160px'
        })

        $(siteBox).animate({
            left: '160px'
        })

        $(buttonText).text("<")

        isHidden(false)

    }
}

export function isHidden(bool) {
    hidden = bool
}

export let hidden