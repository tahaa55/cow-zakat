function java(){
            let cow= document.getElementById('cow').value;
             let zakat;
             if(cow>=130){
                zakat="";
             }

                 else if(cow>=130){
                    zakat="3 Tabiay +1 Musinnah";

                }

                   else if(cow>=120){
                    zakat="4 Tabiay + 3 Musinnah";

                   }

                   else if(cow>=110){
                    zakat="1 Tabia + 2 Musinnah";
                   }

                   else if(cow>=100){
                    zakat="2 Tabiay + 1 Musinnah";
                   }

                   else if(cow>=90){
                    zakat=" 3 Tabiay";
                   }

                   else if(cow>=80){
                    zakat="2 Musinnah";
                   }

                   else if(cow>=70){
                    zakat="1 Tabia + 1 Musinnah";
                   }

                   else if(cow>=60){
                    zakat="2 Tabiay";
                   }
                   else if(cow>=40){
                     zakat="1 Musinnah";
                    }
                    else if(cow>=60){
                     zakat="1 Tabia";
                    }
 
 
                   else{
                    zakat="NO Zakat";
                   }


                 

             document.getElementById('zakat').innerHTML=zakat;
}