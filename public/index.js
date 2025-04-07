const filmes = [
    { id: 1, titulo: "Filme 1", imagem: "https://picsum.photos/160/100?random=1", descrição: "Descrição do filme 1" },
    { id: 2, titulo: "Filme 1", imagem: "https://picsum.photos/160/100?random=2", descrição: "Descrição do filme 1" },
    { id: 3, titulo: "Filme 1", imagem: "https://picsum.photos/160/100?random=3", descrição: "Descrição do filme 1" },
    { id: 4, titulo: "Filme 1", imagem: "https://picsum.photos/160/100?random=4", descrição: "Descrição do filme 1" },
    { id: 5, titulo: "Filme 1", imagem: "https://picsum.photos/160/100?random=5", descrição: "Descrição do filme 1" },
    { id: 6, titulo: "Filme 1", imagem: "https://picsum.photos/160/100?random=6", descrição: "Descrição do filme 1" },
];

function getFilmeId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
}

const filmeId = getFilmeId();
const filme = filmes.find(f => f.id === filmeId);

const container = document.getElementById("filme-detalhe");

if (filme) {
    container.innerHTML = `
        <h1>${filme.titulo}</h1>
        <img src="${filme.imagem}" alt="${filme.titulo}" style="max-width: 100%; border-radius: 10px;">
        <p style="margin-top: 20px;">${filme.descricao}</p>
    `;
} else {
    container.innerHTML = `<p>Filme não encontrado.</p>`;
}