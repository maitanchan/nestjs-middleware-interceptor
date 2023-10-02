import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {

    private readonly logger = new Logger(AuthMiddleware.name)

    constructor(private readonly userService: UserService) { }

    use(req: Request, res: Response, next: NextFunction) {

        this.logger.log(AuthMiddleware.name)

        const userId = '1'

        this.userService.setUserId(userId)

        next()

    }

}