'use strict';

const StaticSiteJson = require('broccoli-static-site-json');
const mergeTrees = require('broccoli-merge-trees');
const { readdirSync } = require('fs');
const { join } = require('path');

const contentsJson = new StaticSiteJson('contents', {
  type: 'content',
  contentFolder: 'contents',
  collate: true,
  attributes: ['title', 'type', 'linting', 'testing', 'author', 'manual'],
  references: ['tags']
});

const tagsJson = new StaticSiteJson('tags', {
  type: 'tag',
  contentFolder: 'tags',
  collate: true,
  attributes: ['title', 'type', 'url'],
});

module.exports = {
  name: 'content-generator',

  isDevelopingAddon() {
    return true;
  },

  urlsForPrember(distDir) {
    return readdirSync(join(distDir, 'contents'))
      // skip the collated file
      .filter(file => file !== 'all.json')
      .map(file => `/contents/${file.replace(/\.json$/, '')}`);
  },

  treeForPublic() {
    return mergeTrees([contentsJson, tagsJson]);
  }
};
