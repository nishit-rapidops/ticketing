import { Publisher, Subjects, TicketUpdatedEvent } from '@nishit.patel/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
