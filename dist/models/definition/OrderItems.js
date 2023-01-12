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
exports.OrderItems = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const BaseModel_1 = require("./BaseModel");
const Orders_1 = require("./Orders");
const Products_1 = require("./Products");
let OrderItems = class OrderItems extends BaseModel_1.BaseModel {
    get collection() {
        switch (this.getDataValue("collection")) {
            case 0:
                return "Cacti";
            case 1:
                return "Plants";
            default: // 2
                return "Succulents";
        }
    }
    set collection(value) {
        switch (value.toLowerCase()) {
            case "Cacti":
                this.setDataValue("collection", 0);
                break;
            case "Plants":
                this.setDataValue("collection", 1);
                break;
            default: // Succulents
                this.setDataValue("collection", 2);
        }
    }
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Orders_1.Orders),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: "order_id",
        allowNull: false,
    }),
    __metadata("design:type", Number)
], OrderItems.prototype, "orderId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Orders_1.Orders),
    __metadata("design:type", Orders_1.Orders)
], OrderItems.prototype, "order", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Products_1.Products),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: "product_id",
        allowNull: false,
    }),
    __metadata("design:type", Number)
], OrderItems.prototype, "productId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Products_1.Products),
    __metadata("design:type", Products_1.Products)
], OrderItems.prototype, "product", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        comment: "0 => Cacti, 1 => Plants, 2 => Succulents",
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], OrderItems.prototype, "collection", null);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], OrderItems.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        defaultValue: "",
    }),
    __metadata("design:type", String)
], OrderItems.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], OrderItems.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], OrderItems.prototype, "discount", void 0);
OrderItems = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "order_items",
    })
], OrderItems);
exports.OrderItems = OrderItems;
//# sourceMappingURL=OrderItems.js.map