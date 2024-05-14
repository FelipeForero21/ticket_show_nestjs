import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { jwtConstants } from "../constants/jwt.constant";
import { JwtService } from "@nestjs/jwt";
import { Request } from 'express';


@Injectable()
export class RolGuard implements CanActivate {
    constructor(

        private readonly jwtService: JwtService
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);

        if (!token) {
            throw new UnauthorizedException();
        }

        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: jwtConstants.secret,
            });
           
           
            if(payload.rol != 'admin'){
                throw new UnauthorizedException('Only administrator have access');
            }

            console.log('payload',payload);
           
        

            request.user = payload;

        } catch (error) {
            throw new UnauthorizedException('expire o invalid token');
        }

        return true;
    }


    extractTokenFromHeader(request: Request) {
        const [type, token] = request.headers.authorization?.split(" ") ?? [];
        return type === "Bearer" ? token : undefined;
    }


}

























