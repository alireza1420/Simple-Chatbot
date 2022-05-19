function Talk(){
    let info ={
        "what is your name":"My name is Chat box , How can i help you ? ",
        "How old are you" : "I am 2 years old ",
        "Who created you" : "My creator was alireza moghadam , want to hire him ? click the box below !",
        "How is the weather" : "Great where I am , I live in a data center ",
        "ok" : "hi",

    }
    let log=document.getElementById("userbox").value;
    document.getElementById("chatlog").innerHTML=log+'<br>';
    if(log in info){
      
        document.getElementById("chatlog").innerHTML=info[log] +'<br>';

    }else{
        document.getElementById("chatlog").innerHTML="Sorry I did not fully understand you ! ";
    }
}