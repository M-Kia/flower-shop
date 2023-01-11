import {
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

import { BaseModel } from "./BaseModel";

import { Users } from "./Users";
import { Products } from "./Products";

@Table({
  tableName: "favorite_products",
})
export class FavoriteProducts extends BaseModel {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  public id!: number;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
    field: "user_id",
    allowNull: false,
  })
  public userId!: number;

  @BelongsTo(() => Users)
  public user: Users;

  @ForeignKey(() => Products)
  @Column({
    type: DataType.INTEGER,
    field: "product_id",
    allowNull: false,
  })
  public productId!: number;

  @BelongsTo(() => Products)
  public product: Products;
}
