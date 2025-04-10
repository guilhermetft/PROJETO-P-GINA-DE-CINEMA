document.addEventListener("DOMContentLoaded", function () {
    const filmes = [
        {
            id: 1,
            titulo: "Interestellar",
            imagem: "imgs/interestellar.jpg",
            descricao: "Um grupo de astronautas viaja por um buraco de minhoca em busca de um novo lar para a humanidade..."
        },
        {
            id: 2,
            titulo: "Homem Aranha",
            imagem: "imgs/spider.jpg",
            descricao: "Peter Parker, um adolescente comum, ganha superpoderes após ser picado por uma aranha radioativa..."
        },
        {
            id: 3,
            titulo: "Homem de ferro",
            imagem: "imgs/ironman.jpg",
            descricao: "O bilionário Tony Stark é sequestrado e constrói uma armadura tecnológica para escapar..."
        },
        {
            id: 4,
            titulo: "Poderoso Chefão",
            imagem: "imgs/godfather.jpg",
            descricao: "A história da família mafiosa Corleone, liderada por Don Vito e depois por seu filho Michael..."
        },
        {
            id: 5,
            titulo: "Batman Darknight",
            imagem: "imgs/batman.jpg",
            descricao: "Batman enfrenta seu maior inimigo, o Coringa, que espalha o caos em Gotham..."
        },
        {
            id: 6,
            titulo: "Ratatoullie",
            imagem: "imgs/ratatoulie.jpg",
            descricao: "Remy, um rato com talento para a culinária, sonha em ser chef em Paris..."
        },
    ];

    const filmeId = parseInt(new URLSearchParams(window.location.search).get("id"));
    const filmeSelecionado = filmes.find(f => f.id === filmeId);
    const containerFilmes = document.querySelectorAll("#filmes-em-cartaz");
    const detalheContainers = document.querySelectorAll("#filme-detalhe");

    for (let i = 0; i < filmes.length; i++) {
        const filme = filmes[i];

        // Se o container de lista existir, ele cria os cards
        containerFilmes.forEach(container => {
            const link = document.createElement("a");
            link.href = `detalhes.html?id=${filme.id}`;
            link.className = "image-placeholder";

            const img = document.createElement("img");
            img.src = filme.imagem;
            img.alt = filme.titulo;

            const p = document.createElement("p");
            p.textContent = filme.titulo;

            link.appendChild(img);
            link.appendChild(p);
            container.appendChild(link);
        });

        // Se for o filme certo da página de detalhes, ele monta a exibição
        if (filme.id === filmeId) {
            detalheContainers.forEach(container => {
                container.innerHTML = `
                    <h1>${filme.titulo}</h1>
                    <img src="${filme.imagem}" alt="${filme.titulo}" style="max-width: 100%; border-radius: 10px;">
                    <p style="margin-top: 20px;">${filme.descricao}</p>
                `;
            });
        }
    }
});

//O DOM só vai carregar os filmes em cartaz quando o site estiver aberto, sem estar carregado é como se não existisse esse filmes no site