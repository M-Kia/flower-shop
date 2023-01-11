import { Table, Column, DataType } from "sequelize-typescript";

import { BaseModel } from "./BaseModel";

import type { StatusType } from "../../types/dataTypes";

@Table({
  tableName: "users",
})
export class Users extends BaseModel {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  public id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: "first_name",
  })
  public firstName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: "last_name",
  })
  public lastName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  public mobile!: string;

  @Column({
    type: DataType.STRING,
    defaultValue: "",
  })
  public email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public password!: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
    comment: "0 => active, 1 => inactive, 2 => deleted",
  })
  get status(): StatusType {
    switch (this.getDataValue("status")) {
      case 0:
        return "active";
      case 1:
        return "inactive";
      case -1:
        return "deleted";
      default:
    }
  }

  set status(value: StatusType) {
    switch (value) {
      case "active":
        this.setDataValue("status", 0);
        break;
      case "inactive":
        this.setDataValue("status", 1);
        break;
      case "deleted":
        this.setDataValue("status", -1);
        break;
      default:
    }
  }
}
