import { Body, Controller, Get, InternalServerErrorException, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { FreezePipe } from '../pipes/freeze.pipe';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) { }

  @Get()
  getHello() {

    return this.userService.getHello()

  }

  /**
   * Check middle pipe
   */
  @UseGuards(FreezePipe)
  @Post()
  addData(@Body(new FreezePipe()) body: any) {



  }

  /**
   * Check middle filter
   */
  @Get('error')
  throwError() {

    throw new InternalServerErrorException()

  }

}
