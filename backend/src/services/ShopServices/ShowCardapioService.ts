/* eslint-disable */
import Administradores from "../../models/Administradores";
import AppError from "../../errors/AppError";
import SuperAdmins from "../../models/SuperAdmins";
import Comidas from "../../models/Comidas";
import Compras from "../../models/Compras";
import Clientes from "../../models/Clientes";

const ShowCardapioService = async () => {
  const food = await Compras.findAll({
    include: [
      { model: Comidas },
      { model: Clientes },
    ]
  });
  return food;
};;

export default ShowCardapioService;
