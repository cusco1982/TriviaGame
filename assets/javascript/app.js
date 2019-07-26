$("#start").on('click',function() {
   game.start();
})
$(document).on('click','#end', function(){
    game.done();
})

var questions = [{
    question:"What's 1+1?",
    answers:[" 4 "," 3 "," 2 "," 1 "],
    correctAnswer:" 2 "
}, {
    question:"What's (5x5)?",
    answers:[" 35 "," 25 "," 15 "," 5 "],
    correctAnswer:" 25 "
}, {
    question:"2x+5=10 , x=",
    answers:[" 5 "," 1 "," 2.5 "," 1.5 "],
    correctAnswer:" 2.5 "
}, {
    question:"2π/π4 =?",
    answers:[" 1 "," 2 "," .5 "," 1.5 "],
    correctAnswer:" .5 "
}, {
    question:"whats up?",
    answers:["nothing","everything","the sky","hi"],
    correctAnswer:"nothing"
}, {
    question:"whats up?",
    answers:["nothing","everything","the sky","hi"],
    correctAnswer:"nothing"
}, {
    question:"whats up?",
    answers:["nothing","everything","the sky","hi"],
    correctAnswer:"nothing"
}, {
    question:"whats up?",
    answers:["nothing","everything","the sky","hi"],
    correctAnswer:"nothing"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 20,
    countdown: function() {
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("Time is up!");
            game.done();
        }
    },
    start: function(){
        timer=setInterval(game.countdown,1000);
        $("#subwrapper").prepend('<h2>Time remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for (var i=0;i<questions.length;i++){
            $('#subwrapper').append('<h2>'+questions[i].question+'</h2>');
            for (j=0;j<questions[i].answers.length;j++){
                $('#subwrapper').append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
            }
        }
        $('#subwrapper').append('<br><button id="end">DONE</button>')
    },
    done: function() {
        $.each($('input[name="question-0"]:checked'),function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        
        });
        $.each($('input[name="question-1"]:checked'),function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        
        });
        $.each($('input[name="question-2"]:checked'),function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        
        });
        $.each($('input[name="question-3"]:checked'),function(){
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        
        });
        $.each($('input[name="question-4"]:checked'),function(){
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        
        });
        $.each($('input[name="question-5"]:checked'),function(){
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        
        });
        $.each($('input[name="question-6"]:checked'),function(){
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        
        });
        $.each($('input[name="question-7"]:checked'),function(){
            if($(this).val()==questions[7].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        
        });
        this.result();
    
    },
        result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();

        $('#subwrapper').html("<h2>All done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
        $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
}