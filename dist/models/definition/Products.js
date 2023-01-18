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
exports.Products = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const BaseModel_1 = require("./BaseModel");
let Products = class Products extends BaseModel_1.BaseModel {
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
    get status() {
        switch (this.getDataValue("status")) {
            case 0:
                return "active";
            case 1:
                return "inactive";
            default: // -1
                return "deleted";
        }
    }
    set status(value) {
        switch (value) {
            case "active":
                this.setDataValue("status", 0);
                break;
            case "inactive":
                this.setDataValue("status", 1);
                break;
            default: // "deleted"
                this.setDataValue("status", -1);
        }
    }
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        comment: "0 => Cacti, 1 => Plants, 2 => Succulents",
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Products.prototype, "collection", null);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Products.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        defaultValue: "",
    }),
    __metadata("design:type", String)
], Products.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Products.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], Products.prototype, "discount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: "inventory_count",
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], Products.prototype, "inventoryCount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        defaultValue: 0,
        comment: "0 => active, 1 => inactive, -1 => deleted",
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Products.prototype, "status", null);
Products = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "products",
    })
], Products);
exports.Products = Products;
//# sourceMappingURL=Products.js.map