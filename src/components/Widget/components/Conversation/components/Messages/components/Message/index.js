import React, { PureComponent } from 'react';
import marked from 'marked';
import { PROP_TYPES } from 'constants';

import './styles.scss';

class Message extends PureComponent {
  render() {
    const sanitizedHTML = marked.parse(this.props.message.get('text'), { sanitize: true });
    const sanitizedHTMLDate = this.props.message.get('timestamp')? marked.parse(this.props.message.get('timestamp'), { sanitize: true }):null;
    return (
      <div className={this.props.message.get('sender')}>
        <div className="message-text" dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
        {sanitizedHTMLDate ? <div class="datetime" dangerouslySetInnerHTML={{ __html: sanitizedHTMLDate }} />:''}
      </div>
    );
  }
}

Message.propTypes = {
  message: PROP_TYPES.MESSAGE
};

export default Message;
