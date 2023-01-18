type CollectionsType = "Cacti" | "Plants" | "Succulents";

type StatusType = "active" | "inactive" | "deleted";

type OrderStatusType =
  | "saved"
  | "processing"
  | "sending"
  | "completed"
  | "cancelled";

type MessageStatusType = "sended" | "received" | "seen" | "deleted";

export type { CollectionsType, StatusType, OrderStatusType, MessageStatusType };
