<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'samuraiwifi');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '|U/P3#zw~K,uV,`6.E?xt<d#y%0h12UL~t>2fc8Y&xP63qWH+WoX[J8)yvGYQLF?');
define('SECURE_AUTH_KEY',  '*QJM_6i0=H2++H=[zc;;YK,xL#vu8V^+tKV!0Xu4yGU`r}6rdkeON}Gmjxph_u5u');
define('LOGGED_IN_KEY',    'JRM:CIfoarlgQ{0XB5XSNPeSAG?@5EDW+1[xJ,L%|4y`LY;bR!mqk0-h}x)}_0hG');
define('NONCE_KEY',        'UIr7}=C?K^bo]|3xBIw,8=5R{jy&yBrL:WWF0A+G,>J^;uVN CxNoA$DwP.2E;O=');
define('AUTH_SALT',        'FOrl0/bC0$V-|yma-R1#=;QU.bms=bH9Rud,^/Vc_X,700E)=OQFzwG%c_ 9b<>D');
define('SECURE_AUTH_SALT', 'W8#+R&sy{DJm@gj8{XzMqCz#%_4<Sjt6#;2g-{4QL..R3PP+~9X7c_*gK|ACd$00');
define('LOGGED_IN_SALT',   'Is<;.R3pYc;Vf^Ms=ipkKCU3PT<{:lqWG;<#w(PB0/x~JyDqevg1+D%t--5&]kd-');
define('NONCE_SALT',       'p(%*)<~;GgfOD%#430uM-{RuUoo])Z5xO,3z,:q4CWY)s1gu3j+cfC`Gx=9*s^NA');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
