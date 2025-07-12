import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { join } from 'path';
import { UserModule } from './user/user.module';
import { ChatResolver } from './chat/chat.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql', //join(process.cwd(), 'src/schema.gql')
      subscriptions: {
        'subscriptions-transport-ws': {
          path: '/graphql',
        },
      },
    }),
    UserModule,
  ],
  providers: [ChatResolver],
})
export class AppModule {}
