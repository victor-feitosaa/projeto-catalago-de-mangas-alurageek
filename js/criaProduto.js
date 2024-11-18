import { funcoesApi } from "./conexaoApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criaManga(event) {
    event.preventDefault();

    const titulo = document.querySelector("[data-nome]").value;
    const preco = document.querySelector("[data-preco]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    
    await funcoesApi.criaProduto(imagem, titulo, preco);
    window.alert("produto cadastrado com sucesso!");



}

formulario.addEventListener("submit", event => criaManga(event));

function limparForm() {
    document.querySelector("[data-btn-limpar]").addEventListener("click", () => {
        // Referencia os campos do formulário
        const nomeInput = document.querySelector("[data-nome]");
        const precoInput = document.querySelector("[data-preco]");
        const imagemInput = document.querySelector("[data-imagem]");

        // Define os valores como vazios
        nomeInput.value = "";
        precoInput.value = "";
        imagemInput.value = "";
    });
}

limparForm();