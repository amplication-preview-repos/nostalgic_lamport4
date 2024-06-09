import { SortOrder } from "../../util/SortOrder";

export type AdvertisementOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  targetAudience?: SortOrder;
  title?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
