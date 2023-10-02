import { Injectable, Logger, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class UserService {

  private readonly logger = new Logger(UserService.name)

  private userId: string

  setUserId(userId: string) {

    this.userId = userId

  }

  getUserById() {

    return this.userId

  }

  getHello(): string {

    const userId = this.getUserById()

    this.logger.log('getHello userId', userId)

    return 'Hello word'

  }

}
