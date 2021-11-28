import { Injectable } from '@nestjs/common';
import { UserCreateInput } from 'prisma/@generated/user/user-create.input';
import { UserUpdateInput } from 'prisma/@generated/user/user-update.input';
import { User } from 'prisma/@generated/user/user.model';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UsersService {
  users: User[] = [];
  constructor(private readonly prisma: PrismaService) {}

  create(data: UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserInput: UserUpdateInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
