// import { prismaClient } from '../config/dbConnect.mjs';
import interact from '../scripts/interact/interact.js'

export default class InteractController {

    static readContract = async (req, res) => {
        try {
            const txhash = await interact();
            res.status(200).json(txhash)
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }
    
}