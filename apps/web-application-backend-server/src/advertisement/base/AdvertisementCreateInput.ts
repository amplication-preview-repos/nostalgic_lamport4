/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEnum } from "class-validator";
import { EnumAdvertisementStatus } from "./EnumAdvertisementStatus";
import { EnumAdvertisementTypeField } from "./EnumAdvertisementTypeField";

@InputType()
class AdvertisementCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumAdvertisementStatus,
  })
  @IsEnum(EnumAdvertisementStatus)
  @IsOptional()
  @Field(() => EnumAdvertisementStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  targetAudience?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumAdvertisementTypeField,
  })
  @IsEnum(EnumAdvertisementTypeField)
  @IsOptional()
  @Field(() => EnumAdvertisementTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;
}

export { AdvertisementCreateInput as AdvertisementCreateInput };
