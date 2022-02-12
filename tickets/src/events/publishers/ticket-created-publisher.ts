import { Publisher, Subjects, TicketCreatedEvent } from '@nishit.patel/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
