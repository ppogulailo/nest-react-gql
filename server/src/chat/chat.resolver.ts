import { Resolver, Mutation, Subscription, Args } from '@nestjs/graphql';
import { PubSub, PubSubEngine } from 'graphql-subscriptions'; // ✅ correct interface
import { Inject } from '@nestjs/common';
const pubSub = new PubSub();
@Resolver()
export class ChatResolver {
  constructor() {} // @Inject('PUB_SUB') private pubSub: PubSubEngine, // ✅ Use PubSubEngine, not PubSub

  @Mutation(() => String)
  sendMessage(@Args('message') message: string): string {
    pubSub.publish('messageSent', { messageSent: message });
    return message;
  }

  @Subscription(() => String, {
    name: 'messageSent',
  })
  messageSent() {
    return pubSub.asyncIterableIterator('messageSent');
  }
}
