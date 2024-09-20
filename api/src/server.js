const express = require("express");

const router = express.Router();

servidor.get("/", (request, response) => {
    response.send("olá mundo"); 
});

servidor.get ("/videos", (request, response) => {
if (videos.length === 0) {
    response.status(404).json({ message: "Não existe nenhum video"})
}

response.status(200).json(vídeos);

servidor.get("/videos/:id", (request, response) => {
const { id } = request.params;

const videoEncontrado = videos.filter(video => video.id === Number(id));

response.status(200).json(videoEncontrado)
})
});

servidor.post("/videos", (request, response) => {})

servidor.put("/videos", (request, response) => {})

servidor.delete("/videos", (request, response) => {})

servidor.listen("3000", () => console.log("Servidor rodando na porta 3000"));











