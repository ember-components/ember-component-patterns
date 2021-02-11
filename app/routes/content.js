import Route from '@ember/routing/route';

export default class extends Route {
  model({ content_id }) {
    return this.store.find('content', content_id);
  }
}
