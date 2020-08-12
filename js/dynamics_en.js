// While loading

disHello = false;
window.onload = function () {
    hideAddressBar();
    window.addEventListener("orientationchange", function () {
        hideAddressBar();
    }, false);

    setCookie('message0', 'Knock knock, good to see you!', 30);
    setCookie('message0kind', 'reply', 30);

    for (i = 0; i < 1000; i++) {
        tag1 = 'message' + i;
        tag2 = 'message' + i + 'kind';
        mess = getCookie(tag1);
        kind = getCookie(tag2);
        if (mess != '') {
            messageValue = mess;
            field = document.querySelector('.field');
            message = document.createElement('div');
            messWrap = document.createElement('div');
            messageP = document.createElement('p');
            if (kind == 'send') {
                message.className = 'send message';
            } 
            if (kind == 'reply') {
                message.className = 'reply message';
            };
            messageP.innerHTML = messageValue;
            field.appendChild(message);
            message.appendChild(messWrap);
            messWrap.appendChild(messageP);
        };
    };

    dis = getCookie('dis');
    if (dis != 'true') {
        setTimeout(displayHello, 8000);
        setTimeout(popupHello, 10000);
    };
};



// Призыв

function displayHello () {
    if (disHello == false) {
        document.querySelector('.popupHello').classList.add('displayHello');
    }
};
function popupHello () {
    if (disHello == false) {
        document.querySelector('.popupHello').classList.add('helloUp');
        document.querySelector('.mainButton').classList.add('whiteUp');
        document.querySelector('.accentImgWrapper').classList.add('accentUp');
    }
};




function hideAddressBar() {
    setTimeout(function () {
        document.body.style.height = window.outerHeight + 'px';
        setTimeout(function () {
            window.scrollTo(0, 1);
        }, 1100);
    }, 1000);
    return false;
}

function botToggleUp() {
    disHello = true;
    document.querySelector('.popupHello').classList.remove('displayHello');
    document.querySelector('.popupHello').classList.remove('helloUp');
    document.querySelector('.mainButton').classList.remove('whiteUp');
    document.querySelector('.accentImgWrapper').classList.remove('accentUp');
    setCookie('dis', 'true', 30)
    messages = document.querySelectorAll('.message');
    document.querySelector('.wrapWrapper').classList.add('botActive');
    document.querySelector('.mainButton').classList.add('buttonUp');
    document.querySelector('.mainButton').classList.remove('toucanAnime');
    document.querySelector('.background').classList.add('ing');
    document.querySelector('body').classList.add('noneScroll');
    setTimeout(backUp, 200);
    if (messages.length >= 1){
        setTimeout(deleteUp, 400);
    };
};
function botToggleDown() {
    document.querySelector('.wrapWrapper').classList.remove('botActive');
    document.querySelector('.mainButton').classList.remove('buttonUp');
    document.querySelector('.background').classList.remove('ing');
    document.querySelector('body').classList.remove('noneScroll');
    backDown();
    deleteDown();
};
function buttonClose() {
    document.querySelector('.mainButton').classList.add('buttonClose');
};



// Close & Delete

function backUp() {
    document.querySelector('.back').classList.add('backActive');
};
function backDown() {
    document.querySelector('.back').classList.remove('backActive');
};
function deleteUp() {
    document.querySelector('.delete').classList.add('backActive');
};
function deleteDown() {
    document.querySelector('.delete').classList.remove('backActive');
};



// Enter click event

function key13(event) {
    input = document.querySelector('.botSender');
    button = document.querySelector('.botKey');
    if (input.value != '') {
        if (event.keyCode === 13) {
            event.preventDefault();
            button.click();
        };
    };
};



// Deleting

function deleteAll() {
    messages = document.querySelectorAll('.message');
    messages.forEach(function(item){
        item.parentNode.removeChild(item);
    });
    document.querySelector('.deleteAlert').classList.remove('aAlert');
    deleteCookie();
    setTimeout(deleteDown, 200);
};
function alertDeleteUp() {
    document.querySelector('.deleteAlert').classList.add('aAlert');
};
function alertDeleteDown() {
    document.querySelector('.deleteAlert').classList.remove('aAlert');
};



// Bot

function sendMessage() {
    input = document.querySelector('.botSender');
    if (input.value != '') {
        messageValue = document.querySelector('.botSender').value;
        field = document.querySelector('.field');
        message = document.createElement('div');
        messWrap = document.createElement('div');
        messageP = document.createElement('p');
        message.className = 'send message';
        messageP.innerHTML = messageValue;
        field.appendChild(message);
        message.appendChild(messWrap);
        messWrap.appendChild(messageP);
        isMessages = document.querySelectorAll('.message');
        messagePosition = isMessages.length - 1;
        cookieName1 = 'message' + messagePosition;
        cookieName2 = 'message' + messagePosition + 'kind';

        setCookie(cookieName1, messageValue, 30);
        setCookie(cookieName2, 'send', 30);

        field.scrollTop = field.scrollHeight;
        document.querySelector('.botSender').value = '';
        document.querySelector('.botSender').focus();
        setTimeout(deleteUp, 200);
        dir1 = ['hello', 'hi', 'good morning', 'hallo', 'evening'];
        dir2 = ['ass', 'horseradish', 'fuck', 'suck', 'dick'];
        dir3 = ['order', 'buy', 'development', 'install', 'работ', 'free', 'web'];
        dir4 = ['info', 'what is it', 'Who are you'];
        dir5 = ['bye', 'goodbye', 'see you'];
        dir6 = ['Whats up', 'how are you'];
        dir7 = ['contact', 'email', 'phone', 'connection', 'site'];
        dir8 = ['set', 'installation', 'bot'];
        ifFirstMessage = false;
        for (item of dir1) {
            reply = 'Hello! How can I help you?';
            replyMessage(reply);
        };
        for (item of dir2) {
            reply = 'You are a very uncivilized person! I do not want to talk to you! Knock Knock';
            replyMessage(reply);
        };
        for (item of dir3) {
            reply = 'In order to tell the site, you need to fill out the form at the end of the page or contact us via phone or WhatsApp through the "Contacts" button in the menu.' ;
            replyMessage(reply);
        };
        for (item of dir4) {
            reply = 'I am your individual assistant for this site. Ask me what exactly interests you?';
            replyMessage(reply);
        };
        for (item of dir5) {
            reply = 'I am glad to help!';
            replyMessage(reply);
        };
        for (item of dir6) {
            reply = 'Great, glad you asked!';
            replyMessage(reply)
        };
        for (item of dir7) {
            reply = 'Contact: </br>Phone: +7 913 854 89 60 E-mail: dmitriyhernov1@yandex.ru ';
            replyMessage(reply);
        };
        for (item of dir8) {
            reply = 'Installation toucan.bot free, You can order the installation using the form on the website: giraffeweb.ru/toucanbot or by writing to us by mail dmitriyhernov1@yandex.ru';
            replyMessage(reply);
        };
        sends = document.querySelectorAll('.message');
        lastSend = sends[sends.length - 1];
        lastClass = lastSend.getAttribute('class');
        if (lastClass == 'send message') {
            botMessage = document.createElement('div');
            botMessWrap = document.createElement('div');
            botMessageP = document.createElement('p');
            botMessage.className = 'reply message';
            botMessageP.innerHTML = 'Im sorry I do not understand you!';
            field.appendChild(botMessage);
            botMessage.appendChild(botMessWrap);
            botMessWrap.appendChild(botMessageP);
            field.scrollTop = field.scrollHeight;

            isMessagess = document.querySelectorAll('.message');
            messagePosition = isMessagess.length - 1;
            cookieName1 = 'message' + messagePosition;
            cookieName2 = 'message' + messagePosition + 'kind';

            setCookie(cookieName1, 'Im sorry I do not understand you!', 30);
            setCookie(cookieName2, 'reply', 30);
        };
    };
};



// Reply

function replyMessage(direct) {
    if (ifFirstMessage == false) {
        lowerValue = messageValue.toLowerCase();
        if (lowerValue.includes(item)) {    
            botMessage = document.createElement('div');
            botMessWrap = document.createElement('div');
            botMessageP = document.createElement('p');
            botMessage.className = 'reply message';
            botMessageP.innerHTML = direct;
            field.appendChild(botMessage);
            botMessage.appendChild(botMessWrap);
            botMessWrap.appendChild(botMessageP);
            field.scrollTop = field.scrollHeight;

            isMessagess = document.querySelectorAll('.message');
            messagePosition = isMessagess.length - 1;
            cookieName1 = 'message' + messagePosition;
            cookieName2 = 'message' + messagePosition + 'kind';

            setCookie(cookieName1, direct, 30);
            setCookie(cookieName2, 'reply', 30);
        };
    };
    
};        



// Cookie

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

function deleteCookie() {
    for (i = 0; i < 1000; i++) {
        tag1 = 'message' + i;
        tag2 = 'message' + i + 'kind';
        mess = setCookie(tag1, '0', -1);
        kind = setCookie(tag2, '0', -1);
    }
    setCookie('dis', '0', -1)
}