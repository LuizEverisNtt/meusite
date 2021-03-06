/* eslint-disable import/no-extraneous-dependencies */
import { Plugin } from 'ckeditor5/src/core';

/**
 * @internal
 */
export default class DrupalImageUploadEditing extends Plugin {
  /**
   * @inheritdoc
   */
  init() {
    const { editor } = this;
    const imageUploadEditing = editor.plugins.get('ImageUploadEditing');
    imageUploadEditing.on('uploadComplete', (evt, { data, imageElement }) => {
      editor.model.change((writer) => {
        writer.setAttribute(
          'dataEntityUuid',
          data.dataEntityUuid,
          imageElement,
        );
        writer.setAttribute(
          'dataEntityType',
          data.dataEntityType,
          imageElement,
        );
      });
    });
  }

  /**
   * @inheritdoc
   */
  static get pluginName() {
    return 'DrupalImageUploadEditing';
  }
}
