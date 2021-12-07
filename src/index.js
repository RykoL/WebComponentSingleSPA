import singleSpaHtml from 'single-spa-html';
import {RickAstleyComponent} from './RickAstley'

customElements.define('rick-astley', RickAstleyComponent)

const htmlLifecycles = singleSpaHtml({
  template: '<rick-astley></rick-astley>',
})

export const {bootstrap, mount, unmount} = htmlLifecycles
