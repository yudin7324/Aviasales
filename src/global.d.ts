declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.scss' {
  import { CSSResult } from 'lit-element';
  const css: CSSResult;
  export default css;
}