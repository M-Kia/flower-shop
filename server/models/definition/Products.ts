import { Table, Column, DataType } from "sequelize-typescript";

import { BaseModel } from "./BaseModel";

import type { CollectionsType, StatusType } from "../../types/dataTypes";

@Table({
  tableName: "products",
})
export class Products extends BaseModel {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: "0 => Cacti, 1 => Plants, 2 => Succulents",
  })
  get collection(): CollectionsType {
    switch (this.getDataValue("collection")) {
      case 0:
        return "Cacti";
      case 1:
        return "Plants";
      default: // 2
        return "Succulents";
    }
  }

  set collection(value: CollectionsType) {
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

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public title!: string;

  @Column({
    type: DataType.STRING,
    defaultValue: "",
  })
  public description!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  public price!: number;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  public discount!: number;

  @Column({
    type: DataType.INTEGER,
    field: "inventory_count",
    defaultValue: 0,
  })
  public inventoryCount!: number;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
    comment: "0 => active, 1 => inactive, -1 => deleted",
  })
  get status(): StatusType {
    switch (this.getDataValue("status")) {
      case 0:
        return "active";
      case 1:
        return "inactive";
      default: // -1
        return "deleted";
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
      default: // "deleted"
        this.setDataValue("status", -1);
    }
  }
}