export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: 'Dashboards',
					root: true,
					alignment: 'left',
					page: 'dashboard',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Components',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Google Material',
							bullet: 'line',
							icon: 'flaticon-interface-7',
							submenu: [
								{
									title: 'Form Controls',
									bullet: 'line',
									submenu: [
										{
											title: 'Auto Complete',
											page: 'material/form-controls/autocomplete',
											permission: 'accessToECommerceModule'
										},
										{
											title: 'Checkbox',
											page: 'material/form-controls/checkbox'
										},
										{
											title: 'Radio Button',
											page: 'material/form-controls/radiobutton'
										},
										{
											title: 'Datepicker',
											page: 'material/form-controls/datepicker'
										},
										{
											title: 'Form Field',
											page: 'material/form-controls/formfield'
										},
										{
											title: 'Input',
											page: 'material/form-controls/input'
										},
										{
											title: 'Select',
											page: 'material/form-controls/select'
										},
										{
											title: 'Slider',
											page: 'material/form-controls/slider'
										},
										{
											title: 'Slider Toggle',
											page: 'material/form-controls/slidertoggle'
										}
									]
								},
								{
									title: 'Navigation',
									bullet: 'line',
									submenu: [
										{
											title: 'Menu',
											page: 'material/navigation/menu'
										},
										{
											title: 'Sidenav',
											page: 'material/navigation/sidenav'
										},
										{
											title: 'Toolbar',
											page: 'material/navigation/toolbar'
										}
									]
								},
								{
									title: 'Layout',
									bullet: 'line',
									submenu: [
										{
											title: 'Card',
											page: 'material/layout/card'
										},
										{
											title: 'Divider',
											page: 'material/layout/divider'
										},
										{
											title: 'Expansion panel',
											page: 'material/layout/expansion-panel'
										},
										{
											title: 'Grid list',
											page: 'material/layout/grid-list'
										},
										{
											title: 'List',
											page: 'material/layout/list'
										},
										{
											title: 'Tabs',
											page: 'material/layout/tabs'
										},
										{
											title: 'Stepper',
											page: 'material/layout/stepper'
										},
										{
											title: 'Default Forms',
											page: 'material/layout/default-forms'
										},
										{
											title: 'Tree',
											page: 'material/layout/tree'
										}
									]
								},
								{
									title: 'Buttons & Indicators',
									bullet: 'line',
									submenu: [
										{
											title: 'Button',
											page: 'material/buttons-and-indicators/button'
										},
										{
											title: 'Button toggle',
											page: 'material/buttons-and-indicators/button-toggle'
										},
										{
											title: 'Chips',
											page: 'material/buttons-and-indicators/chips'
										},
										{
											title: 'Icon',
											page: 'material/buttons-and-indicators/icon'
										},
										{
											title: 'Progress bar',
											page: 'material/buttons-and-indicators/progress-bar'
										},
										{
											title: 'Progress spinner',
											page: 'material/buttons-and-indicators/progress-spinner'
										},
										{
											title: 'Ripples',
											page: 'material/buttons-and-indicators/ripples'
										}
									]
								},
								{
									title: 'Popups & Modals',
									bullet: 'line',
									submenu: [
										{
											title: 'Bottom sheet',
											page: 'material/popups-and-modals/bottom-sheet'
										},
										{
											title: 'Dialog',
											page: 'material/popups-and-modals/dialog'
										},
										{
											title: 'Snackbar',
											page: 'material/popups-and-modals/snackbar'
										},
										{
											title: 'Tooltip',
											page: 'material/popups-and-modals/tooltip'
										}
									]
								},
								{
									title: 'Data table',
									bullet: 'line',
									submenu: [
										{
											title: 'Paginator',
											page: 'material/data-table/paginator'
										},
										{
											title: 'Sort header',
											page: 'material/data-table/sort-header'
										},
										{
											title: 'Table',
											page: 'material/data-table/table'
										}
									]
								}
							]
						},
						{
							title: 'Ng-Bootstrap',
							bullet: 'line',
							icon: 'flaticon-web',
							submenu: [
								{
									title: 'Accordion',
									page: 'ngbootstrap/accordion'
								},
								{
									title: 'Alert',
									page: 'ngbootstrap/alert'
								},
								{
									title: 'Buttons',
									page: 'ngbootstrap/buttons'
								},
								{
									title: 'Carousel',
									page: 'ngbootstrap/carousel'
								},
								{
									title: 'Collapse',
									page: 'ngbootstrap/collapse'
								},
								{
									title: 'Datepicker',
									page: 'ngbootstrap/datepicker'
								},
								{
									title: 'Dropdown',
									page: 'ngbootstrap/dropdown'
								},
								{
									title: 'Modal',
									page: 'ngbootstrap/modal'
								},
								{
									title: 'Pagination',
									page: 'ngbootstrap/pagination'
								},
								{
									title: 'Popover',
									page: 'ngbootstrap/popover'
								},
								{
									title: 'Progressbar',
									page: 'ngbootstrap/progressbar'
								},
								{
									title: 'Rating',
									page: 'ngbootstrap/rating'
								},
								{
									title: 'Tabs',
									page: 'ngbootstrap/tabs'
								},
								{
									title: 'Timepicker',
									page: 'ngbootstrap/timepicker'
								},
								{
									title: 'Tooltips',
									page: 'ngbootstrap/tooltip'
								},
								{
									title: 'Typehead',
									page: 'ngbootstrap/typehead'
								}
							]
						},
					]
				},
				{
					title: 'Applications',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'eCommerce',
							bullet: 'line',
							icon: 'flaticon-business',
							permission: 'accessToECommerceModule',
							submenu: [
								{
									title: 'Customers',
									page: 'ecommerce/customers'
								},
								{
									title: 'Products',
									page: 'ecommerce/products'
								},
							]
						},
						{
							title: 'User Management',
							bullet: 'line',
							icon: 'flaticon-user',
							submenu: [
								{
									title: 'Users',
									page: 'user-management/users'
								},
								{
									title: 'Roles',
									page: 'user-management/roles'
								}
							]
						},
					]
				},
				{
					title: 'Custom',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Error Pages',
							root: true,
							bullet: 'line',
							icon: 'flaticon2-attention',
							submenu: [
								{
									title: 'Error Page - 1',
									page: 'error/error-v1'
								},
								{
									title: 'Error Page - 2',
									page: 'error/error-v2'
								},
								{
									title: 'Error Page - 3',
									page: 'error/error-v3'
								},
								{
									title: 'Error Page - 4',
									page: 'error/error-v4'
								},
								{
									title: 'Error Page - 5',
									page: 'error/error-v5'
								},
								{
									title: 'Error Page - 6',
									page: 'error/error-v6'
								},
							]
						},
					]
				},
			]
		},
		aside: {
			self: {},
			items: [
				{
					title: 'Dashboard',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: 'dashboard',
					translate: 'MENU.DASHBOARD',
					bullet: 'line',
				},
				{
					title: 'Layout Builder',
					root: true,
					icon: 'flaticon2-expand',
					page: 'builder'
				},
				{
					title: 'Google Material',
					root: true,
					bullet: 'line',
					icon: 'flaticon2-browser-2',
					submenu: [
						{
							title: 'Form Controls',
							bullet: 'line',
							submenu: [
								{
									title: 'Auto Complete',
									page: 'material/form-controls/autocomplete',
									permissionId: 2
								},
								{
									title: 'Checkbox',
									page: 'material/form-controls/checkbox'
								},
								{
									title: 'Radio Button',
									page: 'material/form-controls/radiobutton'
								},
								{
									title: 'Datepicker',
									page: 'material/form-controls/datepicker'
								},
								{
									title: 'Form Field',
									page: 'material/form-controls/formfield'
								},
								{
									title: 'Input',
									page: 'material/form-controls/input'
								},
								{
									title: 'Select',
									page: 'material/form-controls/select'
								},
								{
									title: 'Slider',
									page: 'material/form-controls/slider'
								},
								{
									title: 'Slider Toggle',
									page: 'material/form-controls/slidertoggle'
								}
							]
						},
						{
							title: 'Navigation',
							bullet: 'line',
							submenu: [
								{
									title: 'Menu',
									page: 'material/navigation/menu'
								},
								{
									title: 'Sidenav',
									page: 'material/navigation/sidenav'
								},
								{
									title: 'Toolbar',
									page: 'material/navigation/toolbar'
								}
							]
						},
						{
							title: 'Layout',
							bullet: 'line',
							submenu: [
								{
									title: 'Card',
									page: 'material/layout/card'
								},
								{
									title: 'Divider',
									page: 'material/layout/divider'
								},
								{
									title: 'Expansion panel',
									page: 'material/layout/expansion-panel'
								},
								{
									title: 'Grid list',
									page: 'material/layout/grid-list'
								},
								{
									title: 'List',
									page: 'material/layout/list'
								},
								{
									title: 'Tabs',
									page: 'material/layout/tabs'
								},
								{
									title: 'Stepper',
									page: 'material/layout/stepper'
								},
								{
									title: 'Default Forms',
									page: 'material/layout/default-forms'
								},
								{
									title: 'Tree',
									page: 'material/layout/tree'
								}
							]
						},
						{
							title: 'Buttons & Indicators',
							bullet: 'line',
							submenu: [
								{
									title: 'Button',
									page: 'material/buttons-and-indicators/button'
								},
								{
									title: 'Button toggle',
									page: 'material/buttons-and-indicators/button-toggle'
								},
								{
									title: 'Chips',
									page: 'material/buttons-and-indicators/chips'
								},
								{
									title: 'Icon',
									page: 'material/buttons-and-indicators/icon'
								},
								{
									title: 'Progress bar',
									page: 'material/buttons-and-indicators/progress-bar'
								},
								{
									title: 'Progress spinner',
									page: 'material/buttons-and-indicators/progress-spinner'
								}
							]
						},
						{
							title: 'Popups & Modals',
							bullet: 'line',
							submenu: [
								{
									title: 'Bottom sheet',
									page: 'material/popups-and-modals/bottom-sheet'
								},
								{
									title: 'Dialog',
									page: 'material/popups-and-modals/dialog'
								},
								{
									title: 'Snackbar',
									page: 'material/popups-and-modals/snackbar'
								},
								{
									title: 'Tooltip',
									page: 'material/popups-and-modals/tooltip'
								}
							]
						},
						{
							title: 'Data table',
							bullet: 'line',
							submenu: [
								{
									title: 'Paginator',
									page: 'material/data-table/paginator'
								},
								{
									title: 'Sort header',
									page: 'material/data-table/sort-header'
								},
								{
									title: 'Table',
									page: 'material/data-table/table'
								}
							]
						}
					]
				},
				{
					title: 'Bootstrap',
					root: true,
					bullet: 'line',
					icon: 'flaticon2-digital-marketing',
					submenu: [
						{
							title: 'Accordion',
							page: 'ngbootstrap/accordion'
						},
						{
							title: 'Alert',
							page: 'ngbootstrap/alert'
						},
						{
							title: 'Buttons',
							page: 'ngbootstrap/buttons'
						},
						{
							title: 'Carousel',
							page: 'ngbootstrap/carousel'
						},
						{
							title: 'Collapse',
							page: 'ngbootstrap/collapse'
						},
						{
							title: 'Datepicker',
							page: 'ngbootstrap/datepicker'
						},
						{
							title: 'Dropdown',
							page: 'ngbootstrap/dropdown'
						},
						{
							title: 'Modal',
							page: 'ngbootstrap/modal'
						},
						{
							title: 'Pagination',
							page: 'ngbootstrap/pagination'
						},
						{
							title: 'Popover',
							page: 'ngbootstrap/popover'
						},
						{
							title: 'Progressbar',
							page: 'ngbootstrap/progressbar'
						},
						{
							title: 'Rating',
							page: 'ngbootstrap/rating'
						},
						{
							title: 'Tabs',
							page: 'ngbootstrap/tabs'
						},
						{
							title: 'Timepicker',
							page: 'ngbootstrap/timepicker'
						},
						{
							title: 'Tooltips',
							page: 'ngbootstrap/tooltip'
						},
						{
							title: 'Typehead',
							page: 'ngbootstrap/typehead'
						}
					]
				},
				{
					title: 'eCommerce',
					bullet: 'line',
					icon: 'flaticon2-list-2',
					root: true,
					submenu: [
						{
							title: 'Customers',
							page: 'ecommerce/customers'
						},
						{
							title: 'Products',
							page: 'ecommerce/products'
						},
					]
				},
				{
					title: 'User Management',
					root: true,
					bullet: 'line',
					icon: 'flaticon2-user-outline-symbol',
					permissionId: 2,
					submenu: [
						{
							title: 'Users',
							page: 'user-management/users'
						},
						{
							title: 'Roles',
							page: 'user-management/roles'
						}
					]
				},
				{
					title: 'Error Pages',
					root: true,
					bullet: 'line',
					icon: 'flaticon2-attention',
					submenu: [
						{
							title: 'Error Page - 1',
							page: 'error/error-v1'
						},
						{
							title: 'Error Page - 2',
							page: 'error/error-v2'
						},
						{
							title: 'Error Page - 3',
							page: 'error/error-v3'
						},
						{
							title: 'Error Page - 4',
							page: 'error/error-v4'
						},
						{
							title: 'Error Page - 5',
							page: 'error/error-v5'
						},
						{
							title: 'Error Page - 6',
							page: 'error/error-v6'
						},
					]
				},
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
