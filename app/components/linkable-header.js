import Component from '@glimmer/component';
export default class LinkableHeaderComponent extends Component {
  linkTarget = this.args.linkTitle.replace(/\s+/g, '-').toLowerCase();
}

