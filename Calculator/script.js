let output = document.getElementById("input");
let button1 = document.getElementById("dis");

let i = 1 , j = 0 ;
let k = 0 , m = 0 ,f=0;
let num1 , l = 0 ;
let array = new Array;
array[10000000];
function display(num){
 if(num==0 && j==0 && i==0 ){
    ///////output.value=0;
 }
 
    else if(i>0 ){
     output.value+=num;
     i++;
     j++;
     }
 

else if( f==1 && i==0 && num=='+' ){
       /// output.value="";
        output.value+=num;
        i++;
        j++;
}


else if( f==1 && i==0 && num==='-' ){
   /// output.value="";
    output.value+=num;
    i++;
    j++;
}



else if( f==1 && i==0 && num=='/' ){
   //// output.value="";
    output.value+=num;
    i++;
    j++;
}

else if( f==1 && i==0 && num=='%' ){
    ////output.value="";
    output.value+=num;
    i++;
    j++;
}

else if( f==1 && i==0 && num=='*' ){
    ////output.value="";
    output.value+=num;
    i++;
    j++;
}
else if(i==0 && f==1 && num!=0){
    output.value="";
output.value+=num;
i++;
j++;
}




    //if(num!='='){
    //        output.value+=num;
   // }        
        
}

function Clear(){
    num1 = output.value;
    ///console.log(num1);
    array[l]= output.value;
    ///// console.log(array[l]);
    l++;
    output.value="";
    j=0;
    i=1;
}
function del(){
   /// num1 = output.value;
    output.value=output.value.slice(0,-1);
    j=0;
    i=1;
}

function calculate(){
    try{
  
        output.value=eval(output.value);
        f=1;
        i=0;
    }
    catch(err){
        output.value="undefined";
        k++;
        m++;
   
    }
}

function Previous(){
   
        for(let f = 0 ; f<array.length; f++){
            num1 = array[f];
            console.log(array[f]);
            output.value=num1;
           
        } 
    }
    