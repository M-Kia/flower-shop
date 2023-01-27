import {
  CartItems,
  FavoriteProducts,
  Files,
  OrderItems,
  Orders,
  Products,
  UserAddresses,
  Users,
} from "../models";

type Fields = {
  name: string;
  property: {
    type: "int" | "varchar";
    size?: number;
    notNull?: true;
  };
  dependency?: {
    type: "isfk" | "ispk"; // | "multifk";
    table?: string;
    field?: string;
    force?: true;
  };
  config?: {
    encryption?: true;
  };
};

type ResponseData = {
  status: boolean;
  errors?: string[];
  result?: any;
};

const CLASSES = {
  Users: () => new Users(),
  Products: () => new Products(),
  UserAddresses: () => new UserAddresses(),
  CartItems: () => new CartItems(),
  FavoriteProducts: () => new FavoriteProducts(),
  Files: () => new Files(),
  Orders: () => new Orders(),
  OrderItems: () => new OrderItems(),
};
export type { Fields, ResponseData };

export { CLASSES };
