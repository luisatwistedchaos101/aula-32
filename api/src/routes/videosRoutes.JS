const express = require("express");
const { videos } = require("../mock/dados.json");
const rotter = express.Router();

router.get ("/videos", (request, response) => {
if (videos.length === 0) {
    response.status(404).json({ message: "Não existe nenhum video"})
}

response.status(200).json(vídeos);

router.get("/videos/:id", (request, response) => {
const { id } = request.params;

const videoEncontrado = videos.filter(video => video.id === Number(id));

response.status(200).json(videoEncontrado);

router.post("/videos", (request, response) => 
{ const novoVideo = request.body;
    


    function gerarID(){
do {
    let id = Math.floor(Math.random() * 1000)
} while (videos.some(video => video.id === id))

    return id; 
    };

const novoVideo = {
id: gerarID(),
titulo: titulo,
descricao: descricao,
quantidadeViews: quantidadeViews,
image: image, 
canalID: canalID

}
videos.push(novoVideo);

response.json(novoVideo);
})
})
});

modules.export