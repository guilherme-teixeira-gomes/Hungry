import { WhereOptions } from "sequelize";
import Clientes from "../../models/Clientes";

const Sequelize = require('sequelize');

interface Return {
    data: Clientes[],
    total: number,
    totalPages: number,
}

const ShowTabelaService = async (page: number, operadoraId: number): Promise<Return> => {
    const limit = 10;
    const offset = (page - 1) * limit;

    const cliente = await Clientes.findAll({
        attributes: [
            'id', 'name', 'email', 'status', 'crm', 'createdAt', 'motivo_recusa', 'operadoraId', 'isEspecialistaAmtech', 'fase'
        ],
        // limit: limit,
        // offset: offset,
        where: {
            operadoraId: operadoraId,
        },
        order: [["createdAt", "DESC"]]
    });

    const count = await Clientes.count();

    const totalPages = Math.ceil(count / limit);

    return {
        data: cliente,
        total: count,
        totalPages,
    };
}

export default ShowTabelaService;