import { Subjects, Publisher, OrderCancelledEvent } from '@nishit.patel/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
