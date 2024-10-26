/* eslint-disable prettier/prettier */
/* eslint-disable */
import { Sequelize } from "sequelize-typescript";

import ResetPassWord from "../models/ResetPassword";
import Clientes from "../models/Clientes";
import Administradores from "../models/Administradores";
import SuperAdmins from "../models/SuperAdmins";
import Comidas from "../models/Comidas";
import Aprovacoes from "../models/Aprovacoes";



const dbConfig = require("../config/database");

const sequelize = new Sequelize(dbConfig);

const models = [
  ResetPassWord,
  Clientes,
  Administradores,
  SuperAdmins,
  Comidas,
  Aprovacoes
];

sequelize.addModels(models);

export default sequelize;
