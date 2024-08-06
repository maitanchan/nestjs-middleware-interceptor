import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthMiddleware } from './middleware/auth.middleware';

@Module({

  imports: [UserModule]

})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {

    consumer.apply(AuthMiddleware).forRoutes('*')

  }

}
