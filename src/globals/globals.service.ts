import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { responseDto } from './dto/response.dto';
import { state } from './dto/postResponse.dto';

@Injectable()
export class GlobalsService {
  async handleError(error: responseDto) {
    throw new HttpException({
      state: state[1],
      success: false,
      message: error.message
    }, HttpStatus.BAD_REQUEST);
  }
}
