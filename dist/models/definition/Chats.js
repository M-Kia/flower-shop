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
exports.Chats = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const BaseModel_1 = require("./BaseModel");
const Users_1 = require("./Users");
let Chats = class Chats extends BaseModel_1.BaseModel {
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
            default: // deleted
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
], Chats.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Chats.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        defaultValue: 0,
        comment: "0 => active, 1 => inactive, 2 => deleted",
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Chats.prototype, "status", null);
Chats = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "chats",
    })
], Chats);
exports.Chats = Chats;
//# sourceMappingURL=Chats.js.map