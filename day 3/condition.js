//traffic light colour
let color = "green";
function Trafficlightcolor(color){
                if (color=="red"){
                                return "stop";

                }
                else if(color=="yellow"){
                                return "ready";
                }
                else if (color=="green"){
                                return "go";
                }
}
 console.log(Trafficlightcolor(color));
