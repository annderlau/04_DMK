 
    //AULA 17:54
    let canvas = document.querySelector('canvas');
    let context = canvas.getContext('2d');

    context.fillStyle='blue';
    // context.fillRect(100,100,400,400);
    
    context.lineWidth = 4;
    context.beginPath();
    context.rect(100, 100, 400, 400);
    context.stroke();

    context.beginPath();
    context.arc(300, 300, 100, 0, Math.PI * 2);
    context.stroke();

    let year = 2042;
    let nextYear = year + 1;

    let dinner = 'pasta';
    let sentence = 'Tonight, dinner will be' + dinner;

        function saySomething(param) {
        console.log(param);
    }

        saySomething(sentence);

        function add (a, b){
            return a + b;
        }

    let result = add(5, 7);
    console.log(result);

    let multiply = (a, b) => {
        return a * b;
    }

        console.log(multiply(5, 7));
