import { css } from "@emotion/core";
import mediaqueries from "@styles/media";

import Portrait from "www/static/fonts/Portrait/Portrait-Regular2.woff";
import PortraitItalic from "www/static/fonts/Portrait/Portrait-Regular2Italic.woff";
import PortraitMedium from "www/static/fonts/Portrait/Portrait-Medium.woff";
import PortraitBold from "www/static/fonts/Portrait/Portrait-Bold.woff";

import FoundersMono from 'www/static/fonts/Founders Grotesk Mono/FoundersGroteskMono-Light.woff';
import FoundersMonoRegular from 'www/static/fonts/Founders Grotesk Mono/FoundersGroteskMono.woff';
import FoundersMonoMedium from 'www/static/fonts/Founders Grotesk Mono/FoundersGroteskMono-Medium.woff';

import NoeText from 'www/static/fonts/Noe Text/NoeText-Book.woff';
import NoeTextItalic from 'www/static/fonts/Noe Text/NoeText-BookItalic.woff';
import NoeTextSemi from 'www/static/fonts/Noe Text/NoeText-SemiBold.woff';
import NoeTextSemiItalic from 'www/static/fonts/Noe Text/NoeText-SemiBoldItalic.woff';
import NoeTextBold from 'www/static/fonts/Noe Text/NoeText-Bold.woff';
import NoeTextBoldItalic from 'www/static/fonts/Noe Text/NoeText-BoldItalic.woff';
import NoeTextBlack from 'www/static/fonts/Noe Text/NoeText-Black.woff';
import NoeTextBlackItalic from 'www/static/fonts/Noe Text/NoeText-BlackItalic.woff';

import NoeDisplay from 'www/static/fonts/Noe Display/NoeDisplay-Regular.woff';
import NoeDisplayItalic from 'www/static/fonts/Noe Display/NoeDisplay-RegularItalic.woff';
import NoeDisplayMedium from 'www/static/fonts/Noe Display/NoeDisplay-Medium.woff';
import NoeDisplayMediumItalic from 'www/static/fonts/Noe Display/NoeDisplay-MediumItalic.woff';
import NoeDisplayBold from 'www/static/fonts/Noe Display/NoeDisplay-Bold.woff';
import NoeDisplayBoldItalic from 'www/static/fonts/Noe Display/NoeDisplay-BoldItalic.woff';

import SectraBook from "www/static/fonts/GT Sectra/GT-Sectra-Book.woff";
import SectraBookItalic from "www/static/fonts/GT Sectra/GT-Sectra-Book-Italic.woff";
import SectraRegular from "www/static/fonts/GT Sectra/GT-Sectra-Regular.woff";
import SectraRegularItalic from "www/static/fonts/GT Sectra/GT-Sectra-Regular-Italic.woff";
import SectraMedium from "www/static/fonts/GT Sectra/GT-Sectra-Medium.woff";
import SectraMediumItalic from "www/static/fonts/GT Sectra/GT-Sectra-Medium-Italic.woff";
import SectraBold from "www/static/fonts/GT Sectra/GT-Sectra-Bold.woff";
import SectraBoldItalic from "www/static/fonts/GT Sectra/GT-Sectra-Bold-Italic.woff";

import SectraFine from "www/static/fonts/GT Sectra/GT-Sectra-Fine-Regular.woff";
import SectraFineItalic from "www/static/fonts/GT Sectra/GT-Sectra-Fine-Regular-Italic.woff";
import SectraFineMedium from "www/static/fonts/GT Sectra/GT-Sectra-Fine-Medium.woff";
import SectraFineMediumItalic from "www/static/fonts/GT Sectra/GT-Sectra-Fine-Medium-Italic.woff";
import SectraFineBold from "www/static/fonts/GT Sectra/GT-Sectra-Fine-Bold.woff";
import SectraFineBoldItalic from "www/static/fonts/GT Sectra/GT-Sectra-Fine-Bold-Italic.woff";

import RepublicRegular from "www/static/fonts/SangBleu/SangBleuRepublic-Regular-WebXL.otf";
import RepublicRegularItalic from "www/static/fonts/SangBleu/SangBleuRepublic-RegularItalic-WebXL.otf";
import RepublicBold from "www/static/fonts/SangBleu/SangBleuRepublic-Bold-WebXL.otf";
import RepublicBoldItalic from "www/static/fonts/SangBleu/SangBleuRepublic-BoldItalic-WebXL.otf";

import SuisseThin from "www/static/fonts/Suisse/SuisseIntl-Thin.otf";
import SuisseThinItalic from "www/static/fonts/Suisse/SuisseIntl-ThinItalic.otf";
import SuisseRegular from "www/static/fonts/Suisse/SuisseIntl-Regular.otf";
import SuisseRegularItalic from "www/static/fonts/Suisse/SuisseIntl-RegularItalic.otf";
import SuisseMedium from "www/static/fonts/Suisse/SuisseIntl-Medium.otf";
import SuisseMediumItalic from "www/static/fonts/Suisse/SuisseIntl-MediumItalic.otf";
import SuisseBold from "www/static/fonts/Suisse/SuisseIntl-Bold.otf";
import SuisseBoldItalic from "www/static/fonts/Suisse/SuisseIntl-BoldItalic.otf";
import SuisseCondBold from "www/static/fonts/Suisse/SuisseIntlCond-Bold.otf";









export const globalStyles = css`
  /**
   * Thanks to Benjamin De Cock
   * https://gist.github.com/bendc/ac03faac0bf2aee25b49e5fd260a727d
   */

  :root {
    --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
    --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
  }

  @font-face {
    font-family: "-apple-system", "BlinkMacSystemFont", "San Francisco",
      "Helvetica Neue", "Helvetica", "Ubuntu", "Roboto", "Noto", "Segoe UI",
      "Arial", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  /** Founders Grotesk Mono */
  @font-face {
    font-family: "Founders Mono";
    font-weight: 300;
    font-style: normal;
    src: url(${FoundersMono}) format("woff");
  }
  @font-face {
    font-family: "Founders Mono";
    font-weight: 400;
    font-style: normal;
    src: url(${FoundersMonoRegular}) format("woff");
  }
  @font-face {
    font-family: "Founders Mono";
    font-weight: 500;
    font-style: normal;
    src: url(${FoundersMonoMedium}) format("woff");
  }

   /** Portrait */
   @font-face {
    font-family: "Portrait";
    font-weight: 400;
    font-style: normal;
    src: url(${Portrait}) format("woff");
  }
  @font-face {
    font-family: "Portrait";
    font-weight: 400;
    font-style: italic;
    src: url(${PortraitItalic}) format("woff");
  }
  @font-face {
    font-family: "Portrait";
    font-weight: 600;
    font-style: normal;
    src: url(${PortraitMedium}) format("woff");
  }
  @font-face {
    font-family: "Portrait";
    font-weight: 700;
    font-style: normal;
    src: url(${PortraitBold}) format("woff");
  }

   /** Noe Text */
   @font-face {
    font-family: "Noe Text";
    font-weight: 400;
    font-style: normal;
    src: url(${NoeText}) format("woff");
  }
  @font-face {
    font-family: "Noe Text";
    font-weight: 400;
    font-style: italic;
    src: url(${NoeTextItalic}) format("woff");
  }
  @font-face {
    font-family: "Noe Text";
    font-weight: 500;
    font-style: normal;
    src: url(${NoeTextSemi}) format("woff");
  }
  @font-face {
    font-family: "Noe Text";
    font-weight: 500;
    font-style: italic;
    src: url(${NoeTextSemiItalic}) format("woff");
  }
  @font-face {
    font-family: "Noe Text";
    font-weight: 700;
    font-style: normal;
    src: url(${NoeTextBold}) format("woff");
  }
  @font-face {
    font-family: "Noe Text";
    font-weight: 700;
    font-style: italic;
    src: url(${NoeTextBoldItalic}) format("woff");
  }
  @font-face {
    font-family: "Noe Text";
    font-weight: 900;
    font-style: normal;
    src: url(${NoeTextBlack}) format("woff");
  }
  @font-face {
    font-family: "Noe Text";
    font-weight: 900;
    font-style: italic;
    src: url(${NoeTextBlackItalic}) format("woff");
  }

  /** Noe Display */
  @font-face {
    font-family: "Noe Display";
    font-weight: 400;
    font-style: normal;
    src: url(${NoeDisplay}) format("woff");
  }
  @font-face {
    font-family: "Noe Display";
    font-weight: 400;
    font-style: italic;
    src: url(${NoeDisplayItalic}) format("woff");
  }
  @font-face {
    font-family: "Noe Display";
    font-weight: 500;
    font-style: normal;
    src: url(${NoeDisplayMedium}) format("woff");
  }
  @font-face {
    font-family: "Noe Display";
    font-weight: 500;
    font-style: italic;
    src: url(${NoeDisplayMediumItalic}) format("woff");
  }
  @font-face {
    font-family: "Noe Display";
    font-weight: 700;
    font-style: normal;
    src: url(${NoeDisplayBold}) format("woff");
  }
  @font-face {
    font-family: "Noe Display";
    font-weight: 700;
    font-style: italic;
    src: url(${NoeDisplayBoldItalic}) format("woff");
  }

   /** Republic */
   @font-face {
    font-family: "SangBleu Republic";
    font-weight: 400;
    font-style: normal;
    src: url(${RepublicRegular}) format("open-type");
  }
  @font-face {
    font-family: "SangBleu Republic";
    font-weight: 400;
    font-style: italic;
    src: url(${RepublicRegularItalic}) format("open-type");
  }
  @font-face {
    font-family: "SangBleu Republic";
    font-weight: 700;
    font-style: normal;
    src: url(${RepublicBold}) format("open-type");
  }
  @font-face {
    font-family: "SangBleu Republic";
    font-weight: 700;
    font-style: normal;
    src: url(${RepublicBoldItalic}) format("open-type");
  }


   /** GT Sectra */
   @font-face {
    font-family: "Sectra";
    font-weight: 300;
    font-style: normal;
    src: url(${SectraBook}) format("woff");
  }
  @font-face {
    font-family: "Sectra";
    font-weight: 300;
    font-style: italic;
    src: url(${SectraBookItalic}) format("woff");
  }
  @font-face {
    font-family: "Sectra";
    font-weight: 400;
    font-style: normal;
    src: url(${SectraRegular}) format("woff");
  }
  @font-face {
    font-family: "Sectra";
    font-weight: 400;
    font-style: italic;
    src: url(${SectraRegularItalic}) format("woff");
  }
  @font-face {
    font-family: "Sectra";
    font-weight: 500;
    font-style: normal;
    src: url(${SectraMedium}) format("woff");
  }
  @font-face {
    font-family: "Sectra";
    font-weight: 500;
    font-style: italic;
    src: url(${SectraMediumItalic}) format("woff");
  }
  @font-face {
    font-family: "Sectra";
    font-weight: 700;
    font-style: normal;
    src: url(${SectraBold}) format("woff");
  }
  @font-face {
    font-family: "Sectra";
    font-weight: 700;
    font-style: italic;
    src: url(${SectraBoldItalic}) format("woff");
  }
  @font-face {
    font-family: "Sectra Fine";
    font-weight: 400;
    font-style: normal;
    src: url(${SectraFine}) format("woff");
  }
  @font-face {
    font-family: "Sectra Fine";
    font-weight: 400;
    font-style: italic;
    src: url(${SectraFineItalic}) format("woff");
  }
  @font-face {
    font-family: "Sectra Fine";
    font-weight: 500;
    font-style: normal;
    src: url(${SectraFineMedium}) format("woff");
  }
  @font-face {
    font-family: "Sectra Fine";
    font-weight: 500;
    font-style: italic;
    src: url(${SectraFineMediumItalic}) format("woff");
  }
  
  @font-face {
    font-family: "Sectra Fine";
    font-weight: 700;
    font-style: normal;
    src: url(${SectraFineBold}) format("woff");
  }
  

  /** Suisse Int'l  */
  @font-face {
    font-family: "Suisse Intl";
    font-weight: 200;
    font-style: normal;
    src: url(${SuisseThin}) format("open-type");
  }
  @font-face {
    font-family: "Suisse Intl";
    font-weight: 200;
    font-style: italic;
    src: url(${SuisseThinItalic}) format("open-type");
  }
  @font-face {
    font-family: "Suisse Intl";
    font-weight: 400;
    font-style: normal;
    src: url(${SuisseRegular}) format("open-type");
  }
  @font-face {
    font-family: "Suisse Intl";
    font-weight: 400;
    font-style: italic;
    src: url(${SuisseRegularItalic}) format("open-type");
  }
  @font-face {
    font-family: "Suisse Intl";
    font-weight: 500;
    font-style: normal;
    src: url(${SuisseMedium}) format("open-type");
  }
  @font-face {
    font-family: "Suisse Intl";
    font-weight: 500;
    font-style: italic;
    src: url(${SuisseMediumItalic}) format("open-type");
  }
  @font-face {
    font-family: "Suisse Intl";
    font-weight: 700;
    font-style: normal;
    src: url(${SuisseBold}) format("open-type");
  }
  @font-face {
    font-family: "Suisse Intl";
    font-weight: 700;
    font-style: italic;
    src: url(${SuisseBoldItalic}) format("open-type");
  }
  @font-face {
    font-family: "Suisse Int'l Condensed";
    font-weight: 700;
    font-style: normal;
    src: url(${SuisseCondBold}) format("open-type");
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-display: block;
  }

  :root {
    -ms-overflow-style: -ms-autohiding-scrollbar;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    cursor: default;
    font-size: 0.625rem;
    line-height: 1.4;
  }

  body {
    font-family: "Suisse Intl";
    font-size: 1.6rem;
    margin: 0;
    font-weight: 400;
    height: 100%;
  }

  button,
  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:focus {
    outline: none;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  input,
  textarea,
  select,
  button {
    font-family: "-apple-system", "BlinkMacSystemFont", "San Francisco",
      "Helvetica Neue", "Helvetica", "Ubuntu", "Roboto", "Noto", "Segoe UI",
      "Arial", sans-serif;
  }

  .underline {
    text-decoration: underline;
  }

  button,
  input,
  select,
  textarea {
    color: inherit;
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
  }

  fieldset,
  button {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
  }

  table {
    border-collapse: separate;
    border-spacing: 0;
  }

  audio:not([controls]) {
    display: none;
  }

  details {
    display: block;
  }

  input {
    &:focus,
    &:active {
      outline: none;
    }

    &[type="number"] {
      width: auto;
    }
  }

  img.Image__Zoom ~ div {
    background: transparent !important;
  }
`;
