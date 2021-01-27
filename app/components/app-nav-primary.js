import Component from "@glimmer/component";
import { inject as service } from '@ember/service';

export default class extends Component {
  @service store;

  isLoading = true;

  constructor() {
    super(...arguments);
    this.loadContent();
  }

  loadContent() {
    this.contents = this.store.findAll('content');
    this.isLoading = false;
  }
}
