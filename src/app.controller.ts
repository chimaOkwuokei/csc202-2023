import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello2')
  @Render('index.html')
  getHello2(): {} {
    return this.appService.getHello2(); 
}

//the url's
@Get('home')
@Render('home.html')  //for the home site
getHome(): {} {
return this.appService.getHome();
}


//the url's
@Get('about-us')
@Render('about-us.html')  //for the about
getAboutUs(): {} {
return this.appService.getAboutUs();
}


}


