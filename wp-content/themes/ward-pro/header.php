<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 * and the left sidebar conditional
 *
 * @since 1.0.0
 */
?><!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7" <?php language_attributes(); ?>><![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8" <?php language_attributes(); ?>><![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9" <?php language_attributes(); ?>><![endif]-->
<!--[if gt IE 8]><!--><html class="no-js" <?php language_attributes(); ?>><!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<link href="https://fontastic.s3.amazonaws.com/vHRwcxAhDS2HZbCaEVJPMC/icons.css" rel="stylesheet">
<link href='http://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
<?php 

wp_head(); ?>
</head>
<?php

	
$bavotasan_theme_options = bavotasan_theme_options();
$boxed = $bavotasan_theme_options['boxed'];

$boxed_class = ( $boxed ) ? 'boxed' : '';
?>
<body <?php body_class( $boxed_class ); ?>>

	<div id="page">
		<header class="<?php echo $bavotasan_theme_options['nav_palette']; ?> navbar navbar-fixed-top" role="navigation">
			<div style='max-width:1200px!important' class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
			          <span class="icon-bar"></span>
			          <span class="icon-bar"></span>
			          <span class="icon-bar"></span>
			        </button>

					<a id="site-title" class="navbar-brand" href="<?php echo esc_url( home_url() ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
						<img src="http://www.myliferocket.com/wp-content/themes/ward-pro/library/images/logo.png" alt=""></a>
				</div>

				<h3 class="screen-reader-text"><?php _e( 'Main menu', 'ward' ); ?></h3>
				<a class="screen-reader-text" href="#primary" title="<?php esc_attr_e( 'Skip to content', 'ward' ); ?>"><?php _e( 'Skip to content', 'ward' ); ?></a>
				<?php wp_nav_menu( array( 'theme_location' => 'primary', 'container' => 'nav', 'container_class' => 'navbar-collapse collapse', 'menu_class' => 'nav navbar-nav', 'fallback_cb' => 'bavotasan_default_menu' ) ); ?>
				<nav class="navbar-collapse navbar-collapse-right collapse"><ul id="menu-menu-1" class="nav navbar-nav">
					<?php if ( is_user_logged_in() ) { 
							echo "<li id='my-experiments'><a href='#'>My Experiments <span title='My Experiments' style='font-size:1.3em;' data-icon='s' class='icon icon-small'></span></a></li>"; }
							else{
								echo "<li id='my-experiments'><a href='#'>Login <span title='Login' style='font-size:1.3em;' data-icon='r' class='icon icon-small'></span></a></li>";
							}?>
					<?php my_bp_adminbar_notifications_menu()?><?php if ( is_user_logged_in() ) { 
							global $current_user; get_currentuserinfo();
							echo '<li id="ls"><a href="#">'. $current_user->user_login.' <span style="font-size:1.3em;" title="Logout" data-icon="q" class="icon icon-small"></span></a></li>'; }?>
					</ul></nav>
					</div>
					<div style='display:none' id='my-exps'><?php bp_get_template_part( 'experiments/my-experiments' ); ?></div>
					<div style='display:none;max-width:1150px!important; margin:0 auto; text-align:right' class='container' id='logout-slide' >
						<div style='width:100%; max-width:500px; float:right; margin:10px'>
							<div style='float:right; width:50px;margin-left: 15px'>
							<a href="<?php echo bp_loggedin_user_domain(); ?>">
								<?php bp_loggedin_user_avatar( 'type=thumb&width=50&height=50' ); ?>
							</a>
						</div>
							<div>
							<?php echo bp_core_get_userlink( bp_loggedin_user_id() ); ?></br>
							<a class="logout" href="<?php echo wp_logout_url( wp_guess_url() ); ?>"><?php _e( 'Log Out', 'buddypress' ); ?></a>
						</div>
					</div>
		
		</header>
		<script>
		jQuery( "#my-experiments" ).click(function() {
			jQuery('#logout-slide').slideUp();
		  jQuery('#my-exps').slideToggle();
		});
		jQuery( "#ls" ).click(function() {
			jQuery('#my-exps').slideUp();
		  jQuery('#logout-slide').slideToggle();
		});
		</script>
		<?php putRevSlider("home2","homepage");
		bavotasan_jumbotron();

		if ( is_singular() || is_404() || ( function_exists( 'is_bbpress' ) && is_bbpress() ) ) { ?>
			<main class="container">
				<div class="row">
					<?php
					/* Do not display sidebars if full width option selected on single
					post/page templates */
					$layout = $bavotasan_theme_options['layout'];
					if ( ! is_bavotasan_full_width() && 5 == $layout && 6 != $layout )
						get_sidebar();
		} else { ?>
			<main>
			<?php
		}