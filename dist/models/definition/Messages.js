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
exports.Messages = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const BaseModel_1 = require("./BaseModel");
const Users_1 = require("./Users");
const Chats_1 = require("./Chats");
let Messages = class Messages extends BaseModel_1.BaseModel {
    get status() {
        switch (this.getDataValue("status")) {
            case 0:
                return "sended";
            case 1:
                return "received";
            case 2:
                return "seen";
            default: // -1
                return "deleted";
        }
    }
    set status(value) {
        switch (value) {
            case "sended":
                this.setDataValue("status", 0);
                break;
            case "received":
                this.setDataValue("status", 1);
                break;
            case "seen":
                this.setDataValue("status", 2);
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
], Messages.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Users_1.Users),
    __metadata("design:type", Users_1.Users)
], Messages.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Chats_1.Chats),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: "chat_id",
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Messages.prototype, "chatId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Chats_1.Chats),
    __metadata("design:type", Chats_1.Chats)
], Messages.prototype, "chat", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Messages.prototype, "text", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        defaultValue: 0,
        comment: "0 => sended, 1 => received, 2 => seen, -1 => deleted",
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Messages.prototype, "status", null);
Messages = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "messages",
    })
], Messages);
exports.Messages = Messages;
//# sourceMappingURL=Messages.js.map