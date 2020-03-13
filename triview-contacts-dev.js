import { PolymerElement, html } from "../@polymer/polymer/polymer-element.js";
import { mixinBehaviors } from "../@polymer/polymer/lib/legacy/class.js";
import { afterNextRender } from "../@polymer/polymer/lib/utils/render-status.js";
import { TriPlatViewBehavior } from "../triplat-view-behavior/triplat-view-behavior.js";
import { getModuleUrl } from "../tricore-util/tricore-util.js";
import "./app/trimain-contacts.js";

class TriviewContacts extends mixinBehaviors(
	[TriPlatViewBehavior],
	PolymerElement
) {
	static get is() {
		return "triview-contacts";
	}

	static get template() {
		return html`
			<style include="tristyles-theme"></style>

			<dom-if id="mainContactsIf">
				<template>
					<trimain-contacts id="mainContacts"></trimain-contacts>
				</template>
			</dom-if>
		`;
	}

	static get properties() {
		return {
			embedded: {
				type: Boolean,
				value: false
			},

			recordId: {
				type: String,
				value: () => {
					const urlParams = new URLSearchParams(
						window.location.search
					);
					return urlParams.get("specId");
				}
			}
		};
	}

	ready() {
		super.ready();
		document.querySelector("body").style.height = "auto";

		var __dictionary__title = "Contacts";
		document.title = __dictionary__title;

		afterNextRender(this, () => this._loadMainContacts());
	}

	_isEmbedded() {
		let _isInsideFrame =
			window.frameElement && window.frameElement.nodeName == "IFRAME";
		return this.embedded || _isInsideFrame;
	}

	_loadMainContacts() {
		this.shadowRoot.querySelector("#mainContactsIf").if = true;
	}

	static get importMeta() {
		return getModuleUrl("triview-contacts/triview-contacts-dev.js");
	}
}

window.customElements.define(TriviewContacts.is, TriviewContacts);
