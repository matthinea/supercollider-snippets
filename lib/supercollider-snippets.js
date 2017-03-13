'use babel';

import SupercolliderSnippetsView from './supercollider-snippets-view';
import { CompositeDisposable } from 'atom';

export default {

  supercolliderSnippetsView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.supercolliderSnippetsView = new SupercolliderSnippetsView(state.supercolliderSnippetsViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.supercolliderSnippetsView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'supercollider-snippets:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.supercolliderSnippetsView.destroy();
  },

  serialize() {
    return {
      supercolliderSnippetsViewState: this.supercolliderSnippetsView.serialize()
    };
  },

  toggle() {
    console.log('SupercolliderSnippets was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
