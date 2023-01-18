import express from 'express';

// Adicionar novas rotas aqui
import interact from './interactRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'Backend Web3'})
    })

    app.use(express.json(),
        // e aqui
        interact   
    )
}

export default routes;