import { Email } from '@identity-and-access/domain/value-objects/email';
import { Injectable } from '@nestjs/common';
import { TaskEither, tryCatch } from 'fp-ts/lib/TaskEither';
import { MailService } from '../domain/services/mail.service';

@Injectable()
export class InMemoryMailService implements MailService {
  sendEmail = (email: Email): TaskEither<Error, void> => {
    return tryCatch(
      async () => {
        console.log('Sending email to: ', email);
        return;
      },
      (error: Error) => error,
    );
  };
}
