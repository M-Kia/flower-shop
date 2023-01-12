"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteProducts = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const BaseModel_1 = require("./BaseModel");
const Users_1 = require("./Users");
const Products_1 = require("./Products");
let FavoriteProducts = class FavoriteProducts extends BaseModel_1.BaseModel {
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Users_1.Users),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: "user_id",
        allowNull: false,
    }),
    __metadata("design:type", Number)
], FavoriteProducts.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Users_1.Users),
    __metadata("design:type", Users_1.Users)
], FavoriteProducts.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Products_1.Products),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: "product_id",
        allowNull: false,
    }),
    __metadata("design:type", Number)
], FavoriteProducts.prototype, "productId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Products_1.Products),
    __metadata("design:type", Products_1.Products)
], FavoriteProducts.prototype, "product", void 0);
FavoriteProducts = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "favorite_products",
    })
], FavoriteProducts);
exports.FavoriteProducts = FavoriteProducts;
//# sourceMappingURL=FavoriteProducts.js.map