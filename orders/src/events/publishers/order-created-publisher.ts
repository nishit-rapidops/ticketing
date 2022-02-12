import { Publisher, OrderCreatedEvent, Subjects } from '@nishit.patel/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
