import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersDbDto } from './create-users-db.dto';

export class UpdateUsersDbDto extends PartialType(CreateUsersDbDto) {}
