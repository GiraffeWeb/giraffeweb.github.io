$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Как? У тебя есть имя или нет?",
                    minlength: "Ваше имя должно состоять не менее чем из 2 символов"
                },
                subject: {
                    required: "Давай, у тебя есть тема, да?",
                    minlength: "Ваша тема должна состоять как минимум из 4 символов"
                },
                number: {
                    required: "Слушай, у тебя есть номер, не так ли?",
                    minlength: "Ваш Номер должен состоять не менее чем из 5 символов"
                },
                email: {
                    required: "нет E-mail, нет и сообщения"
                },
                message: {
                    required: "эм ... да, вы должны написать что-нибудь, чтобы отправить эту форму.",
                    minlength: "Это всё? Вы серьёзно?"
                }
            },
        })
    })
        
 })(jQuery)
})