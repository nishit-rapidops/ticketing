import { Publisher, Subjects, TicketCreatedEvent } from "@nishit.patel/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
	readonly subject = Subjects.TicketCreated;
}