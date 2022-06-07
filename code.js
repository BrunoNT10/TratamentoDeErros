const inputFileButton = document.getElementById("inputfilebutton");
inputFileButton.addEventListener("click", clickFileButton);

const inputNumberButton = document.getElementById("inputnumberbutton");
inputNumberButton.addEventListener("click", clickNumberButton);

function clickFileButton(){
    arquivo = document.getElementById("inputfile");
        
    var fr=new FileReader();
    try{
        fr.readAsText(arquivo.files[0]);
        fr.onload=function(){
            console.log(fr.result) 
            document.getElementById('output').textContent=fr.result;  
        } 
    }
    catch(error){
        alert(error)
    }
    finally{
        alert('Obrigado pela visita')
    }
}
function clickNumberButton(){
    number = document.getElementById('inputnumber').value
    document.getElementById('outputnumber').innerHTML = ''

    try{
        if(number == ''){
            throw 'Informe um valor'
        }
        else if(Number(number) <= 5 || Number(number) >= 10){
            throw 'Informe um valor maior que 5 e menor que 10'
        }
    }
    catch(error){
        document.getElementById('outputnumber').innerHTML = error
        console.log('Erro' + error)
    }
    finally{
        alert('O número escolhido foi: '+number)
    }

}

