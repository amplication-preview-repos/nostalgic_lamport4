import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdvertisementWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  targetAudience?: StringNullableFilter;
  title?: StringNullableFilter;
  typeField?: "Option1";
};
