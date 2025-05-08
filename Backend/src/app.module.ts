// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Entities
import { User } from './user/user.entity';
import { UserLogon } from './userlogon/userlogon.entity';
import { Entwickler } from './entwickler/entwickler.entity';
import { Live } from './live/live.entity';
import { Topic } from './topic/topic.entity';
import { Roboter } from './roboter/roboter.entity';
import { RoboterAufgabe } from './roboter-aufgabe/roboter-aufgabe.entity';
import { RoboterStopic } from './roboter-stopic/roboter-stopic.entity';
import { RpaFehler } from './rpa-fehler/rpa-fehler.entity';
import { RpaAufgabenLogs } from './rpa-aufgaben-logs/rpa-aufgaben-logs.entity';
import { Review } from './review/review.entity';
import { Wishlist } from './wishlist/wishlist.entity';
import { RpaAufgabe } from './rpa-aufgabe/rpa-aufgabe.entity';
import { RobotStatus } from './robot-status/robot-status.entity';

// Modules
import { UserModule } from './user/user.module';
import { UserLogonModule } from './userlogon/userlogon.module';
import { EntwicklerModule } from './entwickler/entwickler.module';
import { LiveModule } from './live/live.module';
import { TopicModule } from './topic/topic.module';
import { RoboterModule } from './roboter/roboter.module';
import { RoboterAufgabeModule } from './roboter-aufgabe/roboter-aufgabe.module';
import { RoboterStopicModule } from './roboter-stopic/roboter-stopic.module';
import { RpaFehlerModule } from './rpa-fehler/rpa-fehler.module';
import { RpaAufgabenLogsModule } from './rpa-aufgaben-logs/rpa-aufgaben-logs.module';
import { ReviewModule } from './review/review.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { RpaAufgabeModule } from './rpa-aufgabe/rpa-aufgabe.module';
import { RobotStatusModule } from './robot-status/robot-status.module';

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
