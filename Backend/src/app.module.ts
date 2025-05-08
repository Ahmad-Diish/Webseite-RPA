// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entities
import { User } from './user/user.entity';
import { UserLogon } from './userlogon/userlogen.entity';
import { Entwickler } from './entwickler/entwickler.entity';
import { Live } from './live/live.entity';
import { Topic } from './topic/topic.entity';
import { Roboter } from './roboter/roboter.entity';
import { RoboterAufgabe } from './roboteraufgaben/roboteraufgaben.entity';
import { RoboterStopic } from './roboterstopic/roboterstopic.entity';
import { RpaFehler } from './rpa-fehler/rpa-fehler.entity';
import { RpaAufgabenLogs } from './rpa-aufgaben-logs/rpa-aufgaben-logs.entity';
import { Review } from './reviews/reviews.entity';
import { Wishlist } from './wishlist/wishlist.entity';
import { RpaAufgabe } from './rpa-aufgaben/rpa-aufgaben.entity';
import { RobotStatus } from './robot_status/robot_status.entity';

// Modules
import { UserModule } from './user/user.module';
import { UserLogonModule } from './userlogon/userlogen.module';
import { EntwicklerModule } from './entwickler/entwickler.module';
import { LiveModule } from './live/live.module';
import { TopicModule } from './topic/topic.module';
import { RoboterModule } from './roboter/roboter.module';
import { RoboterAufgabeModule } from './roboteraufgaben/roboteraufgaben.module';
import { RoboterStopicModule } from './roboterstopic/roboterstopic.module';
import { RpaFehlerModule } from './rpa-fehler/rpa-fehler.module';
import { RpaAufgabenLogsModule } from './rpa-aufgaben-logs/rpa-aufgaben-logs.module';
import { ReviewModule } from './reviews/reviews.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { RpaAufgabeModule } from './rpa-aufgaben/rpa-aufgaben.module';
import { RobotStatusModule } from './robot_status/robot_status.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '13031303',
      database: 'rpa',
      entities: [
        User,
        UserLogon,
        Entwickler,
        Live,
        Topic,
        Roboter,
        RoboterAufgabe,
        RoboterStopic,
        RpaFehler,
        RpaAufgabenLogs,
        Review,
        Wishlist,
        RpaAufgabe,
        RobotStatus,
      ],
      synchronize: true,
    }),
    UserModule,
    UserLogonModule,
    EntwicklerModule,
    LiveModule,
    TopicModule,
    RoboterModule,
    RoboterAufgabeModule,
    RoboterStopicModule,
    RpaFehlerModule,
    RpaAufgabenLogsModule,
    ReviewModule,
    WishlistModule,
    RpaAufgabeModule,
    RobotStatusModule,
  ],
})
export class AppModule {}
