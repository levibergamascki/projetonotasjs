let $tituloPagina = document.querySelector("#titulo");
// 1. Retorna apenas o primeiro elemento que corresponde aos seletores especificados.
$tituloPagina.textContent = "ETEC DE PIRITUBA";
// 3. A propriedade textContent define ou retorna o conteúdo de texto.
let $tabela = document.querySelector("#tabela-aluno");
console.log($tabela);
let $registroAluno = document.querySelectorAll(".aluno");
console.log($registroAluno);

for(let n = 0; n < $registroAluno.length; n++){
    let $contagem = $registroAluno[n];
    let $nome = $contagem.querySelector(".td-nome").textContent;
    let $n1 = parseFloat($contagem.querySelector(".td-n1").textContent);
    let $n2 = parseFloat($contagem.querySelector(".td-n2").textContent);
    let $n3 = parseFloat($contagem.querySelector(".td-n3").textContent);

    let $mediaFinal = calcularMedia($n1, $n2, $n3);

    let $media = $contagem.querySelector(".td-media");

    $media.textContent = $mediaFinal;

    $media.style.color = ($mediaFinal >= 6) ? "blue" : "red"; /*: Significa "OU"*/
    $media.style.fontWeight = "bold";
    console.log($media);

   let $situacao = $contagem.querySelector (".td-situacao");
    $situacao.textContent = mostrarSituacao($mediaFinal)[0];
    $situacao.classList.add(mostrarSituacao($mediaFinal)[1]);

}


function calcularMedia(a,b,c){
    return ((a+b+c) / 3).toFixed(2);
}

function mostrarSituacao(x){
    let $resultado = [];
    if(x < 6){
        $resultado.push("Reprovado");
        $resultado.push("reprovado");
    }
    else{
        $resultado.push("Aprovado");
        $resultado.push("aprovado");
    }
    return $resultado;
}

// textContent serve para pegar o texto escrito em algum elemento, tipo o nome escrito em uma linha de tabela.
// querySelector é tipo o document.getById.