import { LayoutConfigModel } from '../../_base/layout';

export class LayoutConfig {
	public defaults: LayoutConfigModel = {
		'demo': 'demo3',
		// == Base Layout
		'self': {
			'layout': 'fluid', // fluid|boxed
			'body': {
				'background-image': './assets/media/misc/bg-1.jpg',
				'class': 'kt-subheader--fixed kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-page--loading'
			},
			'logo': './assets/media/logos/logo-4.png'
		},
		// == Portlet Plugin
		'portlet': {
			'sticky': {
				'offset': 50
			}
		},
		// == Page Splash Screen loading
		'loader': {
			'enabled': true,
			'type': 'spinner-logo',
			'logo': './assets/media/logos/logo-mini-md.png',
			'message': 'Please wait...'
		},
		// == Colors for javascript
		'colors': {
			'state': {
				'brand': '#3d4aed',
				'light': '#ffffff',
				'dark': '#282a3c',
				'primary': '#5867dd',
				'success': '#34bfa3',
				'info': '#36a3f7',
				'warning': '#ffb822',
				'danger': '#fd3995'
			},
			'base': {
				'label': [
					'#c5cbe3',
					'#a1a8c3',
					'#3d4465',
					'#3e4466'
				],
				'shape': [
					'#f0f3ff',
					'#d9dffa',
					'#afb4d4',
					'#646c9a'
				]
			}
		},
		'width': 'fixed',
		'header': {
			'self': {
				'fixed': {
					'desktop': {
						'enabled': true,
						'mode': 'topbar'
					},
					'mobile': true
				}
			},
			'search': {
				'display': true
			},
			'menu': {
				'self': {
					'display': true,
					'root-arrow': false
				},
				'desktop': {
					'arrow': true,
					'toggle': 'click',
					'submenu': {
						'skin': 'light',
						'arrow': true
					}
				},
				'mobile': {
					'submenu': {
						'skin': 'dark',
						'accordion': true
					}
				}
			}
		},
		'aside': {
			'self': {
				'skin': 'light',
				'fixed': true,
				'display': true,
				'minimize': {
					'toggle': true,
					'default': false
				}
			},
			'menu': {
				'dropdown': false,
				'scroll': true,
				'submenu': {
					'accordion': true,
					'dropdown': {
						'arrow': true,
						'hover-timeout': 500
					}
				}
			}
		},
		'subheader': {
			'display': true,
			'layout': 'subheader-v1',
			'fixed': true,
			'style': 'transparent'
		},
		'footer': {
			'self': {
				'layout': 'extended'
			}
		}
	};

	/**
	 * Good place for getting the remote config
	 */
	public get configs(): LayoutConfigModel {
		return this.defaults;
	}
}
