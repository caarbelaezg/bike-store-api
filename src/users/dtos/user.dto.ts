import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';
import { PartialType, ApiProperty, OmitType } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @ApiProperty({ description: "the user' email" })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  @ApiProperty({ description: "the user' password", deprecated: true })
  readonly password: string;

  @IsNotEmpty()
  readonly role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class CreatedUserDto extends PartialType(
  OmitType(CreateUserDto, ['password']),
) {}

export class UserDto extends PartialType(
  OmitType(CreateUserDto, ['password']),
) {}
