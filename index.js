$(document).ready(() => {
    $(".contact-form").hide()

    $(".featured .block1 button").click(() => {
        $(".contact-form").toggle()
    })

    $(".dropdown-navbar").hide();
    $(".mobile-navbar").css("display:","none")

    $(".dropdown-icon").click(()=> {
        $(".dropdown-navbar").toggle();
    })

    $(".navbar button").click(() => {
        $(".contact-form").toggle()
    })
})