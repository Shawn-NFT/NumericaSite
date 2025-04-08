import { sideBarAnim, hidden, isHidden } from "./functions/animations.js";


$(document).ready(function() {
    isHidden(false)

    console.log(hidden)
    $("#hidebar").on("click", function() {
        sideBarAnim(hidden, '.sidebar', '#hidebar', '#button1text', '.topbar', '.sitebox')
        console.log(hidden)
    })
})