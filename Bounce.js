function Bounce(userSettings) {

    var defaults = {
        fieldBg: "lightgrey",
        minY: 40,
        maxY: 400,
        speed:5,
        ballLeft: "45%",
        top: 200,
        bg: "https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/87/d9/b1/87d9b11e-5cf0-6684-bc83-d714855cb027/source/256x256bb.jpg"
    }

    var settings = extend(defaults, userSettings);

    var field = document.querySelector('.field');
    field.style.backgroundColor = settings.fieldBg;
    var fieldBor = document.getElementById('1');
    var fieldBack = document.getElementById('2');
    var ballBor = document.getElementById('3');
    var ballBack = document.getElementById('4');
    var ballRadius = document.getElementById('5');
    var ballSpeed = document.getElementById('6');
    var fieldImg = document.getElementById('7');
    var ballImg = document.getElementById('8');

    var ball = document.createElement('div');

    ball.style.position = "absolute";
    ball.style.left = settings.ballLeft;
    ball.style.top = settings.top + "%";
    ball.style.borderRadius = "50%";
    ball.style.borderWidth = "1px";
    ball.style.borderStyle = "solid";
    ball.style.width = ballRadius.value + "px";
    ball.style.height = ball.style.width;
    ball.style.borderColor = ballBor.value;
    ball.style.backgroundImage = "url" + "(" + settings.bg + ")";
    ball.style.backgroundSize = "185%";
    ball.style.backgroundColor = ballBack.value;
    ball.style.backgroundPosition = "center";
    ball.classList.add('ball');
    field.appendChild(ball);

    var allB = document.querySelectorAll('.ball');
    allB[0].setAttribute('id', 'ball');;
    var active;
    for (var i = 0; i < allB.length; i++){
        function A() {
            var a = i;
            allB[a].addEventListener('click', function () {
                var current = document.querySelector('#ball');
                current.removeAttribute('id');
                active = allB[a];
                active.setAttribute('id', 'ball');
            });
        }
        A(); 
    }
    
    var activeBall = document.querySelector('#ball');

    var speedY = Number(ballSpeed.value);
    var y = settings.top;

    fieldBor.onchange = function () {
        field.style.borderColor = this.value;
    }
    fieldBack.onchange = function () {
        field.style.backgroundColor = this.value;
    }
    ballBor.onchange = function () {
        active.style.borderColor = this.value;
    }
    ballBack.onchange = function () {
        active.style.backgroundColor = this.value;
    }
    ballRadius.onchange = function () {
        active.style.width = this.value + "px";
        active.style.height = active.style.width;
        this.value = 50;
    }
    ballSpeed.onchange = function () {
        speedY = Number(this.value);
    }
    fieldImg.onchange = function () {
        field.style.background = "url" + "(" + this.value + ")";
        field.style.backgroundSize = "cover";
    }
    ballImg.onchange = function () {
        active.style.background = "url" + "(" + this.value + ")";
        active.style.backgroundSize = "cover";
    }


    function MoveBall() {
        y += speedY;
        if (y >= settings.maxY) {
            speedY *= -1;
        }
        if (y <= settings.minY) {
            speedY *= -1;
        }
        ball.style.top = y + "px";
    }

    setInterval(MoveBall, 30);

    function extend(o1, o2) {
        for (var item in o2) {
            if (o2.hasOwnProperty(item)) {
                o1[item] = o2[item];
            }
        }
        return o1;
    }
}