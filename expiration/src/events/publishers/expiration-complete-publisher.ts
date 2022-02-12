import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@nishit.patel/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
