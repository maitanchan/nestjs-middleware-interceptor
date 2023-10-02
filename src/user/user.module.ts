import { Global, Module, Scope } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { AuthGuard } from '../guard/auth.guard';
import { LoggingInterceptor } from '../interceptor/logging.interceptor';
import { FreezePipe } from '../pipes/freeze.pipe';
import { HttpExceptionFilter } from '../filters/http-exception.filter';

@Module({

  controllers: [
    UserController
  ],

  providers: [

    UserService,

    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },

    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: LoggingInterceptor
    },

    {
      provide: APP_PIPE,
      useClass: FreezePipe
    },

    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    }


  ],

  exports: [
    UserService
  ]

})
export class UserModule { }
