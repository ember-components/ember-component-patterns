import Component from "@glimmer/component";
import { inject as service } from '@ember/service';

export default class extends Component {
  @service store;
  @service media;

  isLoading = true;

  constructor() {
    super(...arguments);
    this.loadContent();
    this.handleKeydown = this.handleKeydown.bind(this);
    document.addEventListener('keydown', this.handleKeydown);
  }

  get show() {
    return !this.media.isMobile || this.media.isMobile && this.args.navPrimaryIsOpen;
  }

  loadContent() {
    this.contents = this.store.findAll('content');
    this.isLoading = false;
  }

  handleKeydown({ key }) {
    if (this.args.navPrimaryIsOpen && key === 'Escape') {
      this.args.toggleNavPrimary();
    }
  }

  /* eslint-disable ember/require-super-in-lifecycle-hooks */ // I am calling super... lol
  willDestroy() {
    document.removeEventListener('keydown', this.handleKeydown);
  }
}
