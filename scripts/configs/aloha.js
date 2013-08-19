// Generated by CoffeeScript 1.5.0
(function() {

  define(['jquery'], function($) {
    this.Aloha = this.Aloha || {};
    this.Aloha.settings = {
      jQuery: $,
      errorhandling: false,
      logLevels: {
        error: true,
        warn: true,
        info: false,
        debug: false
      },
      sidebar: {
        disabled: true
      },
      requireConfig: {
        paths: {
          jqueryui: '../../oerpub/js/jquery-ui-1.9.0.custom-aloha',
          contenthandler: '../plugins/common/contenthandler/lib',
          semanticblock: '../plugins/oer/semanticblock'
        },
        map: {
          '*': {
            'semanticblock/semanticblock-plugin': 'semanticblock/lib/semanticblock-plugin',
            'ui/ui': 'toolbar/toolbar-plugin'
          }
        }
      },
      bundles: {
        ghbook: '../../../../scripts/aloha'
      },
      plugins: {
        load: ['oer/toolbar', 'common/ui', 'common/format', 'common/paste', 'common/block', 'common/list', 'oer/table', 'extra/draganddropfiles', 'common/image', 'oer/overlay', 'oer/math', 'oer/assorted', 'ghbook/image', 'oer/note', 'oer/example', 'oer/exercise', 'oer/quotation', 'oer/equation', 'oer/definition', 'oer/copy'],
        draganddropfiles: {
          upload: {
            config: {
              method: 'POST',
              url: '/resource',
              fieldName: 'upload',
              send_multipart_form: true,
              callback: function(resp) {
                var $img;
                if (!(resp.match(/^http/) || resp.match(/^\//) || resp.match(/^[a-z]/))) {
                  alert('You dropped a file and we sent a message to the server to do something with it.\nIt responded with some gibberish so we are showing you some other file to show it worked');
                  resp = 'src/test/AlohaEditorLogo.png';
                }
                $img = Aloha.jQuery('.aloha-image-uploading').add('#' + this.id);
                $img.attr('src', resp);
                $img.removeClass('aloha-image-uploading');
                return console.log('Updated Image src as a result of upload');
              }
            }
          }
        },
        note: [
          {
            label: 'Note',
            cls: 'note',
            hasTitle: true
          }, {
            label: 'Aside',
            cls: 'note',
            hasTitle: true,
            type: 'aside'
          }, {
            label: 'Warning',
            cls: 'note',
            hasTitle: true,
            type: 'warning'
          }, {
            label: 'Tip',
            cls: 'note',
            hasTitle: true,
            type: 'tip'
          }, {
            label: 'Important',
            cls: 'note',
            hasTitle: true,
            type: 'important'
          }, {
            label: 'Teacher\'s Guide',
            cls: 'note',
            hasTitle: true,
            type: 'teachers-guide'
          }
        ],
        block: {
          dragdrop: "1",
          rootTags: ['span', 'div', 'figure'],
          defaults: {
            '.default-block': {},
            figure: {
              'aloha-block-type': 'EditableImageBlock'
            }
          }
        }
      }
    };
    return this.Aloha;
  });

}).call(this);
