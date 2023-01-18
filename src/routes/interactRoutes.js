import express from "express";
import interactController from "../controllers/interactController.js";

const router = express.Router();

router
    .get('/interact', interactController.readContract)
    // .get('/autores/:id', autoresController.listarAutorId)
    // .get('/autores/nascionalidade/:nascionalidade', autoresController.listarAutorPorNascionalidade)

export default router;