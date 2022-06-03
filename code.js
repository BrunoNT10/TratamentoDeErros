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
        // console.log(n)
    }
    finally{
        alert('Obrigado pela visita')
    }
}
function clickNumberButton(){
    number = document.getElementById('inputnumber').value

    try{
        if(number == ''){
            throw 'Informe um valor'
        }
        else if(parseInt(number) < 1 || parseInt(number) > 5){
            throw 'Numero fora do intervalo desejado'
        }

    }
    catch(error){
        document.getElementById('outputnumber').innerHTML = error
        setTimeout(function(){
            document.getElementById('outputnumber').innerHTML = ''

        }, 5000)
    }
    finally{

    }

}


