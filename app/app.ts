import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const forumlario = document.querySelector('.form');
forumlario.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona()})