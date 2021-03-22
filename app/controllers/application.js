import Controller from '@ember/controller';
import { Changeset } from 'ember-changeset';

export default class Application extends Controller {
  onlyOneVisible = false;

  changesetObj = new Changeset({
    directions: [
      {
        hidden: false,
        label:  'Up'
      },
      {
        hidden: false,
        label:  'Down'
      }
    ]
  });
}
