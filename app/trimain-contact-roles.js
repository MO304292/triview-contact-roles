import { PolymerElement, html } from "../../@polymer/polymer/polymer-element.js";
import "../../@polymer/iron-flex-layout/iron-flex-layout.js";

import { getModuleUrl } from "../../tricore-util/tricore-util.js";

class TrimainContactRoles extends PolymerElement {
	static get is() {
		return "trimain-contact-roles";
	}

	static get template() {
		return html`
			<style include="tristyles-theme">
				:host {
					@apply --layout-vertical;
					min-height: 500px;
				}
			</style>

			<div class="table-header row secondary-text">
				<div class="column-2 cell">
					<span class="required-symbol">*</span>&nbsp;<span>Role</span>
				</div>

				<div class="column-2 cell header-2">
					<span class="required-symbol">*</span>&nbsp;<span>Name</span>
				</div>

				<div class="column-1 cell header-2">Organization</div>

				<div class="column-1 cell header-2">Work phone</div>

				<div class="column-1 cell header-2">Fax</div>

				<div class="column-1 cell header-2">Email</div>

				<div class="column-icon-delete cell"></div>
			</div>

			<h2>Contacts</h2>
		`;
	}

	constructor() {
		super();
		// handle ds errors listener, to implement
	}

	static get importMeta() {
		return getModuleUrl("triview-contact-roles/app/trimain-contact-roles.js");
	}
}

window.customElements.define(TrimainContactRoles.is, TrimainContactRoles);
