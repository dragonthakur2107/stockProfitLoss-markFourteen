const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stock-quantity");
const currentQuantity = document.querySelector("#current-price");
 
const btnTellMe = document.querySelector("#submit-btn");

const outputDiv = document.querySelector("#output-Div");

function calcProfitAndLoss(initial, quantity, current){
           
    if(current>initial)
    {
        //  profit
        var profit =(current-initial)*quantity;
        var profitPercent=(profit/initial)*100;
        document.getElementById("output-Div").style.color= "green";
        showOutput("Good Work! Profit is "+profit+" by "+dotTwoLimiter(profitPercent)+"%");
    }
    else
        if(current<initial){
        // loss
        var loss =(initial-current)*quantity;
        var lossPercent=(loss/initial)*100;
        document.getElementById("output-Div").style.color= "red";
        showOutput("Oh no! loss is "+loss+" by "+dotTwoLimiter(lossPercent)+"%");
    
    }
    else
        {
            document.getElementById("output-Div").style.color= "white";
            showOutput("Hard luck, no profit ,but hell yeah! no loss either.");
        }

}
function showOutput(message){
    outputDiv.innerText=message;
    }

function dotTwoLimiter(x) {
        return Number.parseFloat(x).toFixed(2);
    }
btnTellMe.addEventListener("click",function submitHandler(){
          var initial = Number(initialPrice.value);
          var quantity = Number(stocksQuantity.value);
          var current = Number(currentQuantity.value);
          valueChecker(initial,quantity,current);

          
});
function valueChecker(initial,quantity,current){
           if(initial===0 && quantity===0 && current===0 ){
            document.getElementById("output-Div").style.color= "red";
               showOutput("Nothing is entered");
           }
           else if(initial===0 || quantity===0 || current===0 ){
            document.getElementById("output-Div").style.color= "red";
               showOutput("Some fields are missing or is put zero");
           }
           else{
            calcProfitAndLoss(initial,quantity,current);
           }

}