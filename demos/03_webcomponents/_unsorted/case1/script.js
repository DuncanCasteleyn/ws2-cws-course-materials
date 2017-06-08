'use strict'

// import template
let templateImport = document.querySelector('link[rel="import"]');
let template = templateImport.import.querySelector('#myTemplate');

// define new element prototype based on HTMLButtonElement prototype
var RogierTestPrototype = Object.create(HTMLElement.prototype);

// create content and behaviour
RogierTestPrototype.createdCallback = function() {
	// create template clone and modify
	let clone = document.importNode(template.content, true);

	// if custom element is not empty, overwrite template text
	clone.querySelector('#p1').innerHTML = 'quote: "' + this.innerHTML + '"';

	// create a Shadow Root and append
	let shadow = this.createShadowRoot();
	shadow.appendChild(clone);
}

// register the new element.
let RogierTest = document.registerElement('rogier-test', {
	prototype: RogierTestPrototype
});