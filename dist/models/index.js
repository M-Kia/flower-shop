"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDB = exports.CartItems = exports.Chats = exports.FavoriteProducts = exports.Files = exports.Messages = exports.OrderItems = exports.Orders = exports.Products = exports.UserAddresses = exports.Users = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = __importDefault(require("../config"));
const Users_1 = require("./definition/Users");
Object.defineProperty(exports, "Users", { enumerable: true, get: function () { return Users_1.Users; } });
const UserAddresses_1 = require("./definition/UserAddresses");
Object.defineProperty(exports, "UserAddresses", { enumerable: true, get: function () { return UserAddresses_1.UserAddresses; } });
const Products_1 = require("./definition/Products");
Object.defineProperty(exports, "Products", { enumerable: true, get: function () { return Products_1.Products; } });
const Orders_1 = require("./definition/Orders");
Object.defineProperty(exports, "Orders", { enumerable: true, get: function () { return Orders_1.Orders; } });
const OrderItems_1 = require("./definition/OrderItems");
Object.defineProperty(exports, "OrderItems", { enumerable: true, get: function () { return OrderItems_1.OrderItems; } });
const Messages_1 = require("./definition/Messages");
Object.defineProperty(exports, "Messages", { enumerable: true, get: function () { return Messages_1.Messages; } });
const Files_1 = require("./definition/Files");
Object.defineProperty(exports, "Files", { enumerable: true, get: function () { return Files_1.Files; } });
const FavoriteProducts_1 = require("./definition/FavoriteProducts");
Object.defineProperty(exports, "FavoriteProducts", { enumerable: true, get: function () { return FavoriteProducts_1.FavoriteProducts; } });
const Chats_1 = require("./definition/Chats");
Object.defineProperty(exports, "Chats", { enumerable: true, get: function () { return Chats_1.Chats; } });
const CartItems_1 = require("./definition/CartItems");
Object.defineProperty(exports, "CartItems", { enumerable: true, get: function () { return CartItems_1.CartItems; } });
const sequelize = new sequelize_typescript_1.Sequelize({
    host: config_1.default.DATABASE_HOST,
    database: config_1.default.DATABASE_NAME,
    dialect: "mysql",
    username: config_1.default.DATABASE_USER,
    password: config_1.default.DATABASE_PASSWORD,
    logging: config_1.default.NODE_ENV !== "production",
});
sequelize.addModels([
    Users_1.Users,
    UserAddresses_1.UserAddresses,
    Products_1.Products,
    Orders_1.Orders,
    OrderItems_1.OrderItems,
    Messages_1.Messages,
    Files_1.Files,
    FavoriteProducts_1.FavoriteProducts,
    Chats_1.Chats,
    CartItems_1.CartItems,
]);
const initDB = async () => {
    await sequelize.authenticate();
    sequelize.sync({ alter: true });
};
exports.initDB = initDB;
//# sourceMappingURL=index.js.map