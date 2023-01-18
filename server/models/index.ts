import { Sequelize } from "sequelize-typescript";

import config from "../config";

import { Users } from "./definition/Users";
import { UserAddresses } from "./definition/UserAddresses";
import { Products } from "./definition/Products";
import { Orders } from "./definition/Orders";
import { OrderItems } from "./definition/OrderItems";
import { Messages } from "./definition/Messages";
import { Files } from "./definition/Files";
import { FavoriteProducts } from "./definition/FavoriteProducts";
import { Chats } from "./definition/Chats";
import { CartItems } from "./definition/CartItems";

const sequelize = new Sequelize({
  host: config.DATABASE_HOST,
  database: config.DATABASE_NAME,
  dialect: "mysql",
  username: config.DATABASE_USER,
  password: config.DATABASE_PASSWORD,
  logging: config.NODE_ENV !== "production",
});

sequelize.addModels([
  Users,
  UserAddresses,
  Products,
  Orders,
  OrderItems,
  Messages,
  Files,
  FavoriteProducts,
  Chats,
  CartItems,
]);

export {
  Users,
  UserAddresses,
  Products,
  Orders,
  OrderItems,
  Messages,
  Files,
  FavoriteProducts,
  Chats,
  CartItems,
};

export const initDB = async () => {
  await sequelize.authenticate();
  sequelize.sync({ alter: true });
};
