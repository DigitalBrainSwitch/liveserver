<?php

/**
 * BuddyPress - Experiments Loop
 *
 * Querystring is set via AJAX in _inc/ajax.php - bp_legacy_theme_object_filter()
 *
 * @package BuddyPress
 * @subpackage bp-legacy
 */
if ( is_user_logged_in() ) { 
?>

<?php do_action( 'bp_before_experiments_loop' ); ?>

<?php 

$args = array(
     'user_id' =>  get_current_user_id(),
     'type' => 'popular'
);
if ( bp_has_experiments( $args ) ) : ?>

	

	<?php do_action( 'bp_before_directory_experiments_list' ); ?>
	<div class='container' style=' max-width:1200px!important;'>
	<h2 style='color:white; text-align:center'>My Experiments</h2>
	<?php while ( bp_experiments() ) : bp_the_experiment(); 
	?>
			
			
		<div class="col-md-4"style='margin-bottom:10px;'>
			<table>
				<tr >
					<td style='width:25%; padding:10px;'>
			<a href="<?php bp_experiment_permalink(); ?>"><img style='max-height:60px; border-radius:50%' src='<?php bp_experiment_avatar(); ?>'/></a>
				</td>
				<td>
			<a href="<?php bp_experiment_permalink(); ?>">
				<?php bp_experiment_name(); ?>
			</a></td></tr></table>
		</div>
	<?php 
	endwhile; ?>
	<div class="col-md-4"style='margin-bottom:10px;'>
			<table>
				<tr >
					<td style='width:25%; padding:10px;'>
						<a title="Create Experiment" href="create"><span data-icon="k" class="icon"></span></a>
				</td>
				<td>
			<a href="/experiments/create">
				Create your own
			</a></td></tr></table>
		</div>

</div>
	<?php do_action( 'bp_after_directory_experiments_list' ); ?>

	
<?php else: ?>

	<div id="message" class="info">
		<p><?php _e( 'There were no experiments found.', 'buddypress' ); ?></p>
	</div>

<?php endif; ?>


<?php do_action( 'bp_after_experiments_loop' );

} 

else{
	?>
	<div id='top-login-form'>
	<form style="margin: 0; padding: 0;" name="bp-login-form" id="bp-login-widget-form" class="standard-form" action="http://www.myliferocket.com/wp-login.php" method="post">
				<input type="text" name="log" id="bp-login-widget-user-login" class="input" placeholder="Username">
				<input type="password" name="pwd" id="bp-login-widget-user-pass" class="input" placeholder="Password">
				<button type="submit" name="wp-submit" id="bp-login-widget-submit"><span title="Login" style="font-size:1.3em;" data-icon="r" class="icon icon-small"></span></button>
				<span class="fbLoginButton"><script type="text/javascript">//<!--
            document.write('<fb:login-button scope="email" v="2" size="small" onlogin="jfb_js_login_callback();">Login with Facebook</fb:login-button>');
        //--></script> or <a href='http://www.myliferocket.com/register/'>Register</a></span>
			</form>
	</div>
			<?php
}
?>