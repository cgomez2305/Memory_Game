let numeros=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
numeros=numeros.sort(()=>Math.random()-0.5)
for(i=0;i<numeros.length;i++){
    document.getElementById(`ficha${i}`).value=numeros[i]
}
let cont=0;
let aciertos=0;
let tarjeta1=null;
let tarjeta2=null;
let flag=true
const tablero=document.querySelector('.container-random-btn')
tablero.addEventListener('click',(event)=>{
    if(flag){
        if(event.target.className=='btn'){
            event.target.textContent=event.target.value
            if(cont<2){
                if(cont==0){
                    tarjeta1=event.target
                    tarjeta1.disabled=true
                }
                if(cont==1){
                    tarjeta2=event.target
                    tarjeta2.disabled=true
                }
                cont++;
                }
            }
        
        if(cont==2){
            if(tarjeta1.value===tarjeta2.value){
                cont=0;
                aciertos++;
                document.getElementById('aciertos').innerHTML=aciertos;
            }else{
                setTimeout(()=>{
                    cont=0;
                    tarjeta1.textContent=''
                    tarjeta2.textContent=''
                    tarjeta1.disabled=false
                    tarjeta2.disabled=false
                    tarjeta1=null;
                    tarjeta2=null;
                    flag=true
                },1000)
                flag=false
            }
        }
    }
})

function time(()=>{
    
})
