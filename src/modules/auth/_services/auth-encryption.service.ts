import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthEncryptionService {

    async encriptionMethod(username, password): Promise<any> {
        const _SALT = await bcrypt.genSalt();
        const data = {
            username: await this.hashData(username, _SALT),
            password: await this.hashData(password, _SALT),
            salt: _SALT
        }

        return data;

    }
    private hashData(value: string, salt: string): Promise<string> {
        return bcrypt.hash(value, salt);
    }
    // async validatePassword(password, salt): Promise<boolean> {
    //     const hash = await bcrypt.hash(password, salt);
    //     return hash == 
    // }
}
