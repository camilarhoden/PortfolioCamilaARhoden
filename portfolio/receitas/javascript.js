
function insere(){
    let numero = document.forms["cadastrarNovaReceita"]["numero"].value;
    let nome = document.forms["cadastrarNovaReceita"]["nome"].value;
    let cozinha = document.forms["cadastrarNovaReceita"]["cozinha"].value;
    let dificuldade = document.forms["cadastrarNovaReceita"]["dificuldade"].value;
    let link = document.forms["cadastrarNovaReceita"]["link"].value;
    let tempo = document.forms["cadastrarNovaReceita"]["tempo"].value;
    let inlineRadioOptions = document.forms["cadastrarNovaReceita"]["inlineRadioOptions"].value;

    let inserir = window.document.getElementById("inserirTabela");

    inserir.innerHTML = `<th scope="row"> ${numero} </th>`;
    inserir.innerHTML += `<td> ${nome} </td>`;
    inserir.innerHTML += `<td> ${cozinha} </td>`;
    inserir.innerHTML += `<td> ${dificuldade} </td>`;
    inserir.innerHTML += `<td> <a href="${link}"> Veja a receita aqui </a> </td>`;
    inserir.innerHTML += `<td> ${tempo} minutos </td>`;
    inserir.innerHTML += `<td> ${inlineRadioOptions} </td>`;

}
