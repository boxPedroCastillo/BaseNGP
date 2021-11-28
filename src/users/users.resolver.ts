import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserCreateInput } from 'prisma/@generated/user/user-create.input';
import { User } from 'prisma/@generated/user/user.model';
import { UserUpdateInput } from 'prisma/@generated/user/user-update.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  async findAll() {
    return await this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { nullable: false }) id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  async createUser(@Args('userCreateInput') createUserInput: UserCreateInput) {
    return await this.usersService.create(createUserInput);
  }

  @Mutation(() => User)
  updateUser(
    @Args('userUpdateInput') updateUserInput: UserUpdateInput,
    @Args('id', { nullable: false }) id: string,
  ) {
    return this.usersService.update(id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { nullable: false }) id: string) {
    return this.usersService.remove(id);
  }
}
