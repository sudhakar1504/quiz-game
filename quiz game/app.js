var pos=0,board,Qus,Choice,A,B,C,cor=0;
var questions=[
    ["What is the smallest country in the world?","Kuwait","Punjab","Vatican City","C"],
    ["What is the capital of Westeros in Game of Thrones?" ,"Trisha Dingle","King’s Landing","Iain Stirling","B"],
    ["Which club won the 2017 UEFA Super Cup?" ,"Real Madrid","Cristiano Ronaldo","Benfica","A"],
    ["Which nuts are used in marzipan?","cashew","ground nuts","Almonds","C"]
];
function DisplayQuestions(){
    board=document.querySelector(".answer");
    if(pos>=questions.length)
    {
        board.innerHTML="<h2 class='result'>you got "+cor+" of"+questions.length+"</h2>";
        document.querySelector(".question").innerHTML="<h2 class='final'>quiz completed</h2>";
        board.innerHTML+="<button class='tryon' onclick='tryagain()'>TRY AGAIN</button>";
        pos=0;
        cor=0;
        return false;
    }
    document.querySelector(".question").innerHTML="question "+(pos+1)+" of "+questions.length+"";
    Qus=questions[pos][0];
    A=questions[pos][1];
    B=questions[pos][2];
    C=questions[pos][3];
    board.innerHTML="<h3 class='ques'> "+Qus+" </h3>";
    board.innerHTML+="<label><input type='radio' name='Choice' value='A'>"+A+"</label><br>";
    board.innerHTML+="<label><input type='radio' name='Choice' value='B'>"+B+"</label><br>";
    board.innerHTML+="<label><input type='radio' name='Choice' value='C'>"+C+"</label><br>";
    board.innerHTML+="<button class='next' onclick='checkAnswer()'>submit answer</button>";
}
function checkAnswer()
{
    var choices;
    Choice=document.getElementsByName("Choice");
    for(var i=0;i<Choice.length;i++)
    {
        if(Choice[i].checked)
        {
            choices=Choice[i].value;
        }
    }
    if(choices==questions[pos][4])
    {
        cor++;
    }
    pos++;
    DisplayQuestions();
}
function tryagain(){
    location.reload();
}