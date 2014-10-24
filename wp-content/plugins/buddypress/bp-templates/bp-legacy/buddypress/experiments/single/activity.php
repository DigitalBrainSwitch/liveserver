<style>
.activity-header{
	font-size:10pt!important;
}
.image-anchor{
	display:inline!important;
}
</style>
<script>
$( document ).ready(function() {
   $.noConflict(true);
});
</script>
<div class="item-list-tabs no-ajax" id="subnav" role="navigation">
	<ul>
		
		<?php do_action( 'bp_experiment_activity_syndication_options' ); ?>

		<li id="activity-filter-select" class="last">
			<label for="activity-filter-by"><?php _e( 'Show:', 'buddypress' ); ?></label> 
			<select id="activity-filter-by">
				<option value="-1"><?php _e( 'Everything', 'buddypress' ); ?></option>
				<option value="joined_experiment"><?php _e( 'Experiment Memberships', 'buddypress' ); ?></option>
				<option value="activity_update"><?php _e( 'Updates', 'buddypress' ); ?></option>
				<?php do_action( 'bp_experiment_activity_filter_options' ); ?>
			</select>
		</li>
	</ul>
</div><!-- .item-list-tabs -->

<?php do_action( 'bp_before_experiment_activity_post_form' ); ?>

<?php if ( is_user_logged_in() && bp_experiment_is_member() ) : ?>

	<?php bp_get_template_part( 'activity/post-form-experiment' ); ?>

<?php endif; ?>

<?php do_action( 'bp_after_experiment_activity_post_form' ); ?>
<?php do_action( 'bp_before_experiment_activity_content' ); ?>

<div class="activity single-experiment" role="main">

	<?php bp_get_template_part( 'activity/activity-loop' ); ?>

</div><!-- .activity.single-experiment -->

<?php do_action( 'bp_after_experiment_activity_content' ); ?>
