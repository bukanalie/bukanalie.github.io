// Angular
import { AfterViewInit, Component, ViewChild } from '@angular/core';
// Layout
import { ToggleOptions } from '../../../../../core/_base/layout';

@Component({
	selector: 'kt-aside-secondary',
	templateUrl: './aside-secondary.component.html',
	styleUrls: ['./aside-secondary.component.scss']
})
export class AsideSecondaryComponent implements AfterViewInit {
	// Public properties
	@ViewChild('toggler') toggler;
	// Privat properties
	private lastOpenedTab: Element;

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * after content checked
	 */
	ngAfterViewInit(): void {
	}

	/**
	 * Return toggle options
	 */
	get mobileToggleOptions(): ToggleOptions {
		return {
			target: 'body',
			targetState: 'kt-aside-secondary--mobile-nav-expanded',
		};
	}

	get toggleOptions(): ToggleOptions {
		return {
			target: 'body',
			targetState: 'kt-aside-secondary--expanded'
		};
	}

	/**
	 * Tab click event
	 *
	 * @param event: MouseEvent
	 */
	tabClicked(event: MouseEvent) {
		if ((this.lastOpenedTab && this.lastOpenedTab.isEqualNode(event.srcElement)) && document.body.classList.contains('kt-aside-secondary--expanded')) {
			this.toggler.toggle.toggleOff();
		} else {
			this.lastOpenedTab = event.srcElement;
			this.toggler.toggle.toggleOn();
		}
	}
}
