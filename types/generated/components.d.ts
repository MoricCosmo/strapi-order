import type { Schema, Struct } from '@strapi/strapi';

export interface SharedForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_forms';
  info: {
    displayName: 'Form';
    icon: 'bold';
  };
  attributes: {
    age: Schema.Attribute.Integer;
    bersediaOutbound: Schema.Attribute.Boolean;
    buktiPembayaran: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    calledName: Schema.Attribute.String;
    dateOfBirth: Schema.Attribute.Date;
    email: Schema.Attribute.Email;
    fullName: Schema.Attribute.String;
    gender: Schema.Attribute.Enumeration<['Laki-Laki', 'Wanita']>;
  };
}

export interface SharedFormV1 extends Struct.ComponentSchema {
  collectionName: 'components_shared_form_v1s';
  info: {
    displayName: 'FormV1';
    icon: 'check';
  };
  attributes: {
    fullName: Schema.Attribute.String;
    quantity: Schema.Attribute.Integer;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.form': SharedForm;
      'shared.form-v1': SharedFormV1;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
