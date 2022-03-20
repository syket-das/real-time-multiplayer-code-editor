import React, { useEffect, useRef } from 'react';

import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/dracula.css';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/matchtags';

const Editor = () => {
  let editorRef = useRef(null);

  useEffect(() => {
    async function init() {
      editorRef.current = CodeMirror.fromTextArea(
        document.getElementById('realtimeEditor'),
        {
          lineNumbers: true,
          mode: {
            name: 'javascript',
            json: true,
          },

          theme: 'dracula',

          extraKeys: {
            'Ctrl-Space': 'autocomplete',
            'Ctrl-Q': function (cm) {
              cm.foldCode(cm.getCursor());
            },
          },
          foldGutter: true,
          gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
          autoCloseTags: true,
          autoCloseBrackets: true,
          matchTags: { bothTags: true },
          lineSeparator: '\n',
          tabSize: 2,
          indentUnit: 2,
          indentWithTabs: true,
          smartIndent: true,
        }
      );

      
    }
    init();
  }, []);
  return <textarea name="" id="realtimeEditor"></textarea>;
};

export default Editor;
