import {
  Controller,
  Delete,
  Patch,
  Req,
  Body,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Delete()
  deleteUser(@Req() req) {
    return this.usersService.deleteUser(req.userId);
  }

  @Patch()
  updateUser(@Req() req, @Body() dto: CreateUserDto) {
    return this.usersService.updateUser(req.userId, dto);
  }
}
