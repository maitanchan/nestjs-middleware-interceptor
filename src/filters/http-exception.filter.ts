import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common";
import { Request, Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

    private readonly logger = new Logger(HttpExceptionFilter.name)


    catch(exception: HttpException, host: ArgumentsHost) {

        this.logger.log(HttpExceptionFilter.name)

        const context = host.switchToHttp()

        const req = context.getRequest<Request>()

        const res = context.getResponse<Response>()

        const status = exception.getStatus()

        res.status(status).json({

            statusCode: status,
            timestamp: new Date().toISOString(),
            path: req.url

        })

    }

}