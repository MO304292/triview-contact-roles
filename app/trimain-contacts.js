import {
	PolymerElement,
	html
} from "../../@polymer/polymer/polymer-element.js";
import "../../@polymer/iron-flex-layout/iron-flex-layout.js";

import { getModuleUrl } from "../../tricore-util/tricore-util.js";

class TrimainContacts extends PolymerElement {
	static get is() {
		return "trimain-contacts";
	}

	static get template() {
		return html`
			<style include="tristyles-theme">
				:host {
					@apply --layout-vertical;
					min-height: 500px;
				}
			</style>

			<h2>Contacts</h2>
		`;
	}

	constructor() {
		super();
		// handle ds errors listener, to implement
	}

	static get importMeta() {
		return getModuleUrl("triview-contacts/app/trimain-contacts.js");
	}
}

window.customElements.define(TrimainContacts.is, TrimainContacts);
