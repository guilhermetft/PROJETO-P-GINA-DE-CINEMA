const filmes = [
    { id: 1, titulo: "Interestellar", imagem: "https://picsum.photos/160/100?random=1", descricao: "Um grupo de astronautas viaja por um buraco de minhoca em busca de um novo lar para a humanidade, enquanto a Terra enfrenta um colapso ambiental. Um épico de ficção científica com muita emoção e teorias sobre o tempo." },
    { id: 2, titulo: "Homem Aranha", imagem: "https://picsum.photos/160/100?random=2", descricao: "Peter Parker, um adolescente comum, ganha superpoderes após ser picado por uma aranha radioativa. Ele precisa equilibrar a vida pessoal com a responsabilidade de ser o Homem-Aranha, enfrentando inimigos como o Duende Verde." },
    { id: 3, titulo: "Homem de ferro", imagem: "https://picsum.photos/160/100?random=3", descricao: "O bilionário Tony Stark é sequestrado e constrói uma armadura tecnológica para escapar. De volta à sua vida, ele aprimora a armadura e se torna o super-herói Homem de Ferro, enfrentando ameaças com inteligência e estilo." },
    { id: 4, titulo: "Poderoso Chefão", imagem: "https://picsum.photos/160/100?random=4", descricao: "A história da família mafiosa Corleone, liderada por Don Vito e depois por seu filho Michael. Um drama clássico sobre poder, lealdade e o lado sombrio da ambição." },
    { id: 5, titulo: "Batman Darknight", imagem: "https://picsum.photos/160/100?random=5", descricao: "Batman enfrenta seu maior inimigo, o Coringa, que espalha o caos em Gotham. Um filme intenso e sombrio que explora os limites da justiça e do heroísmo." },
    { id: 6, titulo: "Ratatoullie", imagem: "https://picsum.photos/160/100?random=6", descricao: "Remy, um rato com talento para a culinária, sonha em ser chef em Paris. Com a ajuda de um jovem cozinheiro desajeitado, ele mostra que grandes sonhos podem vir de lugares inesperados." },
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