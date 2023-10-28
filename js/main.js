let title = document.querySelector(".title")
let turn = "x";
let squaer = [];

  function end (Num1 , Num2 , Num3){

            title.innerHTML = `${squaer[Num1]} winnner`
            document.getElementById("item"+Num1).style.background="#000"
            document.getElementById("item"+Num2).style.background="#000"
            document.getElementById("item"+Num3).style.background="#000"
            setInterval(function(){title.innerHTML +="."},1000)
            setTimeout(function(){location.reload()},4000)
  }
            function winnner(){
                              
                  for(let i =1 ; i < 10 ; i++){
                     squaer[i] =document.getElementById("item"+i).innerHTML;
                     
                  }
                                 //the row Number  
                  if(squaer[1] == squaer[2] && squaer[2]==squaer[3] && squaer[1] !=""){ 
                      
                        end (1,2,3)
                  }else if(squaer[4] == squaer[5] && squaer[5]==squaer[6] && squaer[5] !=""){  
                        end (4,5,6)   
                  }  else if(squaer[7] == squaer[8] && squaer[8]==squaer[9] && squaer[7] !=""){     
                        end (7,8,9)
                  }
                                    
                                    //the coloume Number

                        if(squaer[1] == squaer[4] && squaer[4]==squaer[7] && squaer[1] !=""){
                              end (1,4,7)     
                        }else if(squaer[2] == squaer[5] && squaer[5]==squaer[8] && squaer[2] !=""){
                              end (2,5,8)    
                        } else if(squaer[3] == squaer[6] && squaer[6]==squaer[9] && squaer[6] !=""){     
                              end (3,6,9)
            }
                  
                                    //the coloume Number X && Y
                        if(squaer[1] == squaer[5] && squaer[5]==squaer[9] && squaer[5] !=""){    
                              end (1,5,9)
                        }else if(squaer[3] == squaer[5] && squaer[5]==squaer[7] && squaer[3] !=""){     
                              end (3,5,7)
                        

            }
            }

function Game(id){

        let element =document.getElementById(id);

        if(turn =="x" && element.innerHTML ==""){

             element.innerHTML = "x";
             turn = "o"
             title.innerHTML ="o";

        } else if (turn =="o" && element.innerHTML ==""){
            element.innerHTML = "o";
            turn = "x"
            title.innerHTML ="x";
        }
                 winnner()  
      }
  
      
       
