import Component from "@glimmer/component";
import { inject as service } from '@ember/service';

export default class extends Component {
  @service store;
  @service media;

  isLoading = true;

  constructor() {
    super(...arguments);
    this.loadContent();
  }

  get show() {
    return !this.media.isMobile || this.media.isMobile && this.args.navPrimaryIsOpen;
  }

  loadContent() {
    this.contents = this.store.findAll('content');
    this.isLoading = false;
  }
}
