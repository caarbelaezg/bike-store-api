import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './services/auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { UsersModule } from './../users/users.module';
import { AuthController } from './controllers/auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'cats',
      signOptions: {
        expiresIn: '10d',
      },
    }),
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
