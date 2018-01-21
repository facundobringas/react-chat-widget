import store from '../store';
import * as actions from './index';

export function addUserMessage(text, timestamp) {
  store.dispatch(actions.addUserMessage(text, timestamp));
}

export function addResponseMessage(text, timestamp) {
  store.dispatch(actions.addResponseMessage(text, timestamp));
}

export function addLinkSnippet(link, timestamp) {
  store.dispatch(actions.addLinkSnippet(link, timestamp));
}

export function renderCustomComponent(component, props, showAvatar = false, timestamp) {
  store.dispatch(actions.renderCustomComponent(component, props, showAvatar, timestamp));
}

export function toggleWidget() {
  store.dispatch(actions.toggleChat());
}

export function toggleInputDisabled() {
  store.dispatch(actions.toggleInputDisabled());
}

export function dropMessages() {
  store.dispatch(actions.dropMessages());
}
