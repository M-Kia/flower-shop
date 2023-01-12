import {
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

import { BaseModel } from "./BaseModel";
import type { MessageStatusType } from "../../types/dataTypes";
import { Users } from "./Users";
import { Chats } from "./Chats";

@Table({
  tableName: "messages",
})
export class Messages extends BaseModel {
  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
    field: "user_id",
    allowNull: false,
  })
  public userId!: number;

  @BelongsTo(() => Users)
  public user!: Users;

  @ForeignKey(() => Chats)
  @Column({
    type: DataType.INTEGER,
    field: "chat_id",
    allowNull: false,
  })
  public chatId!: number;

  @BelongsTo(() => Chats)
  public chat!: Chats;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public text!: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
    comment: "0 => sended, 1 => received, 2 => seen, -1 => deleted",
  })
  get status(): MessageStatusType {
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

  set status(value: MessageStatusType) {
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
}
