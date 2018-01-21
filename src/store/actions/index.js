import * as actions from './actionTypes';

export function toggleChat() {
  return {
    type: actions.TOGGLE_CHAT
  };
}

export function toggleInputDisabled() {
  return {
    type: actions.TOGGLE_INPUT_DISABLED
  };
}

export function addUserMessage(text, timestamp) {
  return {
    type: actions.ADD_NEW_USER_MESSAGE,
    text,
    timestamp
  };
}

export function addResponseMessage(text, timestamp) {
  return {
    type: actions.ADD_NEW_RESPONSE_MESSAGE,
    text,
    timestamp
  };
}

export function addLinkSnippet(link, timestamp) {
  return {
    type: actions.ADD_NEW_LINK_SNIPPET,
    link,
    timestamp
  };
}

export function renderCustomComponent(component, props, showAvatar, timestamp) {
  return {
    type: actions.ADD_COMPONENT_MESSAGE,
    component,
    props,
    showAvatar,
    timestamp
  };
}

export function dropMessages() {
  return {
    type: actions.DROP_MESSAGES
  };
}
