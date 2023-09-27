import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

export interface MessageInterface{
  message:string;
}

@Injectable()
export class AppService {
  // private readonly logger = new Logger(AppService.name);
  constructor(private readonly httpService: HttpService) {}

  // async findAll(): Promise<AxiosResponse<string>> {
  //   const { data } = await firstValueFrom(
  //     this.httpService.get<AxiosResponse<string>>('http://localhost:5000').pipe(
  //       catchError((error: AxiosError) => {
  //         this.logger.error(error.response.data);
  //         throw 'An error happened!';
  //       }),
  //     ),
  //   );
  //   return data;
  // }

  getHello(): MessageInterface {
    return {message:"message"};
  }
}
