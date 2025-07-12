import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { join } from 'path';
import { UserResolver } from './user/user.resolver';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql', //join(process.cwd(), 'src/schema.gql')
      sortSchema: true,
      // context: ({ req, res }: { req: Request; res: Response }) => ({
      //   req,
      //   res,
      // }),
    }),
    UserModule,
  ],
  // providers: [UserResolver],
})
export class AppModule {}
