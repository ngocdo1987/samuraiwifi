<?php
show_admin_bar(false); // Disable admin bar
add_theme_support('post-thumbnails');  // Enable post thumbnail

/*
* =================== START THEME OPTIONS PAGE ===================
*/
if(function_exists('acf_add_options_page')) {
	$parent = acf_add_options_page(array(
		'page_title' => 'SamuraiWifi Settings',
		'menu_title' => 'SamuraiWifi Settings',
		'menu_slug' => '',
		'position' => 1,
		'icon_url' => false
	));

	
}
/*
* =================== END THEME OPTIONS PAGE ===================
*/

/*
* =================== START MENUS ===================
*/
function register_my_menus() {
	register_nav_menus(
		array(
			'main-menu' => __('Main Menu'),
			// 'sub-menu' => __('Sub Menu')
			// Add more menu here ...
		)
	);
}
add_action('init', 'register_my_menus');
/*
* =================== END MENUS ===================
*/
