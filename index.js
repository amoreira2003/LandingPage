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

    $(".mobile-navbar button").click(() => {
        $(".contact-form").toggle()
    })

    $("#submitcontact").hide();

    function validateName() {
    let nameInputValue =  $("#nameinput").val();

    return nameInputValue.length > 0 && nameInputValue !== "" ? true : false

    }

    function validateEmail() {
        let emailInputValue =  $("#emailinput").val();
        return emailInputValue.length > 0 && emailInputValue !== ""  && emailInputValue.includes(".")  && emailInputValue.includes("@")? true : false
    }

    function validateTel() {
        let celInputValue =  $("#celinput").val();


        return (celInputValue.length <= 11 ? true : false)
    }


    $("input").keyup(function (e) { 
        if(validateEmail() && validateTel() && validateName()) {
            $("#submitcontact").show();
        } else {
            $("#submitcontact").hide();
        }
    });








})