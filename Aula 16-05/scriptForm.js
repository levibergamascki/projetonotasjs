const botao = document.querySelector("#adicionar-aluno");

botao.addEventListener("click", function(){
    event.preventDefault();

    /*Criação de variavéis*/ 
    let $dadosForm = document.querySelector("#form-aluno");
    let $dadosAluno = novoAluno($dadosForm);

    /*Console né*/
    console.log($dadosAluno.Vnome);
    console.log($dadosAluno.Vn1);

});

/*Validação dos dados na hora do cadastro*/
function novoAluno(formulario){

    /*Validação do campo Nome*/
    if(formulario.querySelector("#nome").value == ""){
        alert("Obrigatório preencher o campo nome !!!");
        formulario.querySelector("#nome").focus();
    }

    else if(formulario.querySelector("#nome").value.length < 8){
        alert("Nome completo, coloque de imediato!");
        formulario.querySelector("#nome").focus();
    }


   /*Nota 1*/ 
    else if(formulario.querySelector("#n1").value ==""){
        alert("Obrigatório preencher o campo Nota 1");
        formulario.querySelector("#n1").focus();
    }

    else if(isNaN(parseFloat(formulario.querySelector("#n1").value))){
        alert("Por favor, pare de brincadeira, e bota valores númericos!!");
        formulario.querySelector("#n1").value ="";
        formulario.querySelector("#n1").focus();
    }


    /*Nota 2*/
    else if(formulario.querySelector("#n2").value ==""){
        alert("Obrigatório preencher o campo Nota 2");
        formulario.querySelector("#n2").focus();
    }

    else if(isNaN(parseFloat(formulario.querySelector("#n2").value))){
        alert("Por favor, pare de brincadeira, e bota valores númericos!! Engraçadão vc em");
        formulario.querySelector("#n2").value ="";
        formulario.querySelector("#n2").focus();
    }


    /*Nota 3*/
    else if(formulario.querySelector("#n3").value ==""){
        alert("Obrigatório preencher o campo Nota 3");
        formulario.querySelector("#n3").focus();
    }

    else if(isNaN(parseFloat(formulario.querySelector("#n3").value))){
        alert("Por favor, pare de brincadeira, e bota valores númericos!! Comediante?");
        formulario.querySelector("#n3").value ="";
        formulario.querySelector("#n3").focus();
    }


    /*sim ou não, que nesse caso é não ou falso*/
    else{
        let $vetorAluno = {
            Vnome:formulario.querySelector("#nome").value,  /*V de vetor ou de VitorGames, primo de terceiro grau do Mario*/
            Vn1:formulario.querySelector("#n1").value.replace(",","."),
        }

        return $vetorAluno;
    }
}