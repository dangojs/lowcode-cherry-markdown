import * as React from 'react';
import * as PropTypes from 'prop-types';
import { CherryEditor as RawCherryEditor } from '@sjognad/react-cherry-markdown';

export default function CherryEditor({ ...props }) {
  return <RawCherryEditor {...props} />;
}

CherryEditor.propTypes = {
  /**
   * 低码平台注入的事件触发器
   */
  events: PropTypes.objectOf(PropTypes.func),
};
