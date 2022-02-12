import { Subjects, Publisher, PaymentCreatedEvent } from '@nishit.patel/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
