import { funcoesApi } from "./conexaoApi.js";

const container = document.querySelector("[data-container-mangas]");

export default function constroiCard(imagem, titulo, preco, id) {
    const manga = document.createElement("div");
    manga.className = "card";
    manga.innerHTML = `
        <img class="imgCard" src="${imagem}">
        <div class="card-container--info">
            <div class="nomeProduto">
                <p id="nomeApi">${titulo}</p>
            </div>
            <div class="card-container--value">
                <p class="precoApi">Preço: R$${preco}</p>
                <i class="fa-solid fa-trash-can icone-excluir" 
                   style="color: white;" 
                   data-id="${id}">
                </i>
            </div>
        </div>`;

    manga.querySelector(".icone-excluir").addEventListener("click", async (e) => {
        const produtoId = e.target.getAttribute("data-id");
        const confirmacao = confirm("Tem certeza de que deseja excluir o produto?");
        if (confirmacao) {
            const sucesso = await excluirProduto(produtoId);
            if (sucesso) {
                manga.remove();
                alert("Produto excluído com sucesso!");
            } else {
                alert("Erro ao excluir o produto.");
            }
        }
    });

    return manga;
}

async function excluirProduto(id) {
    try {
        const resposta = await fetch(`http://localhost:3000/mangas/${id}`, {
            method: "DELETE",
        });
        if (!resposta.ok) {
            throw new Error("Erro na exclusão do produto.");
        }
        return true;
    } catch (erro) {
        console.log(erro);
        return false;
    }
}

async function listaMangas() {
    const listaApi = await funcoesApi.conexaoApi();
    if (listaApi.length === 0) {
        container.innerHTML = `
            <div class="vazio">
                <div class="vazioDiv">
                    <img src="images/Empty-amico.png" alt="">
                    <p>Nenhum produto disponível</p>
                </div>
            </div>`;
    } else {
        listaApi.forEach((element) => {
            container.appendChild(
                constroiCard(element.imagem, element.titulo, element.preco, element.id)
            );
        });
    }
}

listaMangas();
