import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BlogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="publishedAt" source="publishedAt" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
