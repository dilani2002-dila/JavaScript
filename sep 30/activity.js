function main(){
                var score = [[255,211],[203,121],[272,292],[25,275]];
                var house = ["Griffintor","Hufflepuff","Ravenclaw","Slytherin"];
                higherscorebygenterineachhouse(score,house);
}
main();

function higherscorebygenterineachhouse(score,house){
                for(let i=0;i<score.length; i++){
                                let points=0;
                                let genter="";
                                if(score[i][0]>score[i][1]){
                                                Points= score[i][0];
                                                genter="girls";
                                }
                                else{
                                                points =score[i][1];
                                                genter="boys";
                                }
                                console.log("the best perfomance in "+house [i]+"house of the house meet is :"+genter+","+points);
                }
}
function higherscorebygenterineachhouse(score,house){
                let higherscoreboys=score[0][1],higherscoregirls=score[0][0];
                let boyshouse="",girlshouse="";
                for(let i=0;i<score.length;i++){
                                if(higherscoreboys<score[i][1]){
                                                higherscoregirls 
                                }
                }
}






































