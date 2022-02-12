import { Publisher, Subjects, TickedUpdatedEvent } from "@nishit.patel/common";

export class TicketUpdatedPublisher extends Publisher<TickedUpdatedEvent> {
	readonly subject = Subjects.TicketUpated;
}