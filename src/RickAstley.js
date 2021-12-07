export class RickAstleyComponent extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'});
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    this.shadowRoot.append(wrapper);
  }
}
