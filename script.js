function calcular(){
    var txtn = document.getElementById('txtn');
    var tab = document.getElementById('seltab');
    
    if(txtn.value.length == 0){
        window.alert("Digite um número!");
    } else{
        var num = Number(txtn.value);
        var i = 1;
        var res = 0;
        tab.innerHTML = ""
        while(i <= 10){
            let item = document.createElement('option');
            item.text = `${num} x ${i} = ${num*i}`
            item.value = `tab${i}`;
            tab.appendChild(item);
            i++
        }
    }
    


}