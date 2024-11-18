async function conexaoApi() {

    const conexao = await fetch ("http://localhost:3000/mangas");

    const conexaoConvertida = await conexao.json();
    console.log(conexaoConvertida);
    return conexaoConvertida;
};


async function criaProduto(imagem, titulo, preco) {
    const conexao = await fetch("http://localhost:3000/mangas", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imagem: imagem,
            titulo: titulo,
            preco: preco
            
        })
    });

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;

};

export const funcoesApi = {
    conexaoApi,
    criaProduto
}


// async function criaVideo(titulo, descricao, url, imagem) {
//     const conexao = await fetch("http://localhost:3000/videos", {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify({
//             titulo: titulo,
//             descricao: `${descricao} mil visualizações`,
//             url: url,
//             imagem: imagem
//         })
//     });

//     const conexaoConvertida = conexao.json();

//     return conexaoConvertida;
// }
