<?php

/**
 * BuddyPress - Activity Post Form
 *
 * @package BuddyPress
 * @subpackage bp-legacy
 */

?>

<form action="<?php bp_activity_post_form_action(); ?>" method="post" id="whats-new-form" name="whats-new-form" role="complementary">

	<?php do_action( 'bp_before_activity_post_form' ); ?>

	<div id="whats-new-avatar">
		<a href="<?php echo bp_loggedin_user_domain(); ?>">
			<?php bp_loggedin_user_avatar( 'width=' . bp_core_avatar_thumb_width() . '&height=' . bp_core_avatar_thumb_height() ); ?>
		</a>
	</div>
	
	<p class="activity-greeting"><?php if ( bp_is_experiment() )
		printf( __( "What's new in %s, %s?", 'buddypress' ), bp_get_experiment_name(), bp_get_user_firstname() );
	else
		printf( __( "What's new, %s?", 'buddypress' ), bp_get_user_firstname() );
	?></p>

	<div id="whats-new-content">
		<div id="whats-new-textarea">
			<textarea name="whats-new" id="whats-new" cols="50" rows="10"><?php if ( isset( $_GET['r'] ) ) : ?>@<?php echo esc_textarea( $_GET['r'] ); ?> <?php endif; ?></textarea>
		</div>

		<div id="whats-new-options">
			<div id="whats-new-submit">
				<input class="btn-hover" type="submit" name="aw-whats-new-submit" id="aw-whats-new-submit" value="<?php esc_attr_e( 'Post Update', 'buddypress' ); ?>" />
			</div>

	

				<div id="whats-new-post-in-box">


					<select style='display:none' id="whats-new-post-in" name="whats-new-post-in">

								<option value="<?php bp_experiment_id(); ?>"><?php bp_experiment_name(); ?></option>


					</select>
				</div>



				<input type="hidden" id="whats-new-post-object" name="whats-new-post-object" value="experiments" />
				<input type="hidden" id="whats-new-post-in" name="whats-new-post-in" value="<?php bp_experiment_id(); ?>" />


			<?php do_action( 'bp_activity_post_form_options' ); ?>

		</div><!-- #whats-new-options -->
	</div><!-- #whats-new-content -->

	<?php wp_nonce_field( 'post_update', '_wpnonce_post_update' ); ?>
	<?php do_action( 'bp_after_activity_post_form' ); ?>

</form><!-- #whats-new-form -->
