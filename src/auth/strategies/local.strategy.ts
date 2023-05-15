import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { AuthService } from './../services/auth.service';
import { Strategy } from 'passport-local';
import { CreatedUserDto } from 'src/users/dtos/user.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string): Promise<CreatedUserDto> {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('not allow');
    }
    return user;
  }
}
