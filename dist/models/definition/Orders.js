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
exports.Orders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const BaseModel_1 = require("./BaseModel");
const Users_1 = require("./Users");
const UserAddresses_1 = require("./UserAddresses");
let Orders = class Orders extends BaseModel_1.BaseModel {
    get status() {
        switch (this.getDataValue("status")) {
            case 0:
                return "saved";
            case 1:
                return "processing";
            case 2:
                return "sending";
            case 3:
                return "completed";
            default: // -1
                return "cancelled";
        }
    }
    set status(value) {
        switch (value) {
            case "saved":
                this.setDataValue("status", 0);
                break;
            case "processing":
                this.setDataValue("status", 1);
                break;
            case "sending":
                this.setDataValue("status", 2);
                break;
            case "completed":
                this.setDataValue("status", 3);
                break;
            default: //cancelled
                this.setDataValue("status", -1);
        }
    }
};
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Users_1.Users),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: "user_id",
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Orders.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Users_1.Users),
    __metadata("design:type", Users_1.Users)
], Orders.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => UserAddresses_1.UserAddresses),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: "user_address_id",
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Orders.prototype, "userAddressId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => UserAddresses_1.UserAddresses),
    __metadata("design:type", UserAddresses_1.UserAddresses)
], Orders.prototype, "userAddress", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        defaultValue: 0,
        comment: "0 => saved, 1 => processing, 2 => sending, 3 => completed, -1 => cancelled",
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Orders.prototype, "status", null);
Orders = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "orders",
    })
], Orders);
exports.Orders = Orders;
//# sourceMappingURL=Orders.js.map