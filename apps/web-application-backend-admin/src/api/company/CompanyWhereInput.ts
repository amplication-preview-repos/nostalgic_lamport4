import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CompanyWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
};
