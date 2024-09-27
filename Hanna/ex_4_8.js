let firstStr = "     ";
let secondStr = "7    ";
let curResult = 0;
let delta = "";

for(i=1;i<=9;i++){
    firstStr = firstStr + "    " +String(i);
    curResult = i*7;
    if(String(curResult).length>1){
        delta = "  "
    }else{
        delta = "   "
    }
    secondStr = secondStr + delta + curResult;
}

alert("The multiplication table of the number 7"+"\n"+firstStr+"\n"+secondStr);