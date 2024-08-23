function adicionarItem()
{
    //obter valores digitados
    var nome = document.getElementById("nome").value
    var valor = document.getElementById("valor").value
    var quantidade = document.getElementById("quantidade").value

    if(!nome || !valor || !quantidade)
    {
        alert("Insira todos os valores!")
        return
    }

    //criar uma linha na tabela
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0]
    var novalinha = tabela.insertRow(tabela.rows.lenght)
    var celulaNome = novalinha.insertCell(0)
    var celulaValor = novalinha.insertCell(1)
    var celulaQuantidade = novalinha.insertCell(2)

    //Preencher as células com os valores
    celulaNome.innerHTML = nome
    celulaValor.innerHTML = valor
    celulaQuantidade.innerHTML = quantidade

    //Limpar os campos
    document.getElementById("nome").value = ""
    document.getElementById("valor").value = ""
    document.getElementById("quantidade").value = ""
}

function exportarExcel()
{
    var tabela = document.getElementById("tabela")
    var nomeArquivo = "tabela_prodtutos.xlsx"
    var wb = XLSX.utils.table_to_book(tabela, {sheet: "Tabela de Produtos"})
    XLSX.writeFile(wb, nomeArquivo)
}
