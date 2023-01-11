import { Table, Column, DataType } from "sequelize-typescript";

import { BaseModel } from "./BaseModel";

@Table({
  tableName: "files",
})
export class Files extends BaseModel {
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
  })
  public path!: string;

  @Column({
    type: DataType.INTEGER,
    field: "table_id",
    allowNull: false,
    comment: "0 => users, 1 => products",
  })
  public tableId!: number;

  @Column({
    type: DataType.INTEGER,
    field: "record_id",
    allowNull: false,
  })
  public recordId!: number;
}
