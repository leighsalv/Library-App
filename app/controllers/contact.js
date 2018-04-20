import Controller from '@ember/controller';
import {
  match,
  not,
  and,
  gte
} from '@ember/object/computed';

export default Controller.extend({

  emailAddress: '',
  textMessage: '',

  isValidEmail: match('emailAddress', /^.+@.+\..+$/),
  isValidMessage: gte('textMessage.length', 5),
  isValid: and('isValidEmail', 'isValidMessage'), //button not disabled as long as textfields aren't empty
  isDisabled: not('isValid'),

  actions: {
    sendMessage() {
      alert(`E-mail: ${this.get('emailAddress')}\nMessage Received: ${this.get('textMessage')}`);
      this.set('responseMessage', `We got your message and we’ll get in touch soon!`);
      // reset fields
      this.set('emailAddress', '');
      this.set('textMessage', '');
    }
  }
});
