<style>
.container{
	max-width: 100%!important;
	width:100%;
}
#primary{
	padding-left: 0px;
	padding-right: 0px;
}
</style>
<?php do_action( 'bp_before_directory_experiments_page' ); ?>

<div id="buddypress">



<div id="dbs-item-nav" role="complementary">
		<main class="container clearfix">
		<div id="item-nav" style="max-width:1200px; margin:0 auto;">
		<div class="item-list-tabs" id="object-nav" role="navigation">
			<ul >
			<!--?php if ( is_user_logged_in() && bp_get_total_experiment_count_for_user( bp_loggedin_user_id() ) ) : ?-->
			<?php if ( is_user_logged_in() ) : ?>	
				<li id="experiments-all" ><a title='All Experiments' href="<?php bp_experiments_directory_permalink(); ?>"><span data-icon="i" class="icon"></span></a></li>
				<?php if ( is_user_logged_in() && bp_get_total_experiment_count_for_user( bp_loggedin_user_id() ) ) : ?>
					<li id="experiments-personal"><a title='My Experiments' href="<?php echo bp_loggedin_user_domain() . bp_get_experiments_slug() . '/my-experiments/'; ?>"><?php printf( __( '<span data-icon="j" class="icon">  %s</span>', 'buddypress' ),bp_get_total_experiment_count_for_user( bp_loggedin_user_id() ) ); ?></a></li>
				<?php endif; ?>
				<li><a title='Create Experiment' href='create'><span data-icon="k" class="icon"></span></a></li>
			<?php endif; ?>
			<li id="experiments-order-select" >
			<select id="experiments-order-by">
			<option value="active"><?php _e( 'Last Active', 'buddypress' ); ?></option>
			<option value="popular"><?php _e( 'Most Members', 'buddypress' ); ?></option>
			<option value="newest"><?php _e( 'Newly Created', 'buddypress' ); ?></option>
			<option value="alphabetical"><?php _e( 'Alphabetical', 'buddypress' ); ?></option>
			<?php do_action( 'bp_experiments_directory_order_options' ); ?>
			</select>
			</li>

			<li class='last'><?php bp_directory_experiments_search_form(); ?></li>
			</ul>
		</div>
	</div><!-- #item-nav -->
	</main>
	</div>

<?php do_action( 'bp_before_directory_experiments' ); ?>

<?php do_action( 'bp_before_directory_experiments_content' ); ?>

<div id="experiment-dir-search" class="dir-search" role="search">

</div><!-- #experiment-dir-search -->

<form action="" method="post" id="experiments-directory-form" class="dir-form">
<?php do_action( 'template_notices' ); ?>


<div id="experiments-dir-list" class="experiments dir-list">
<?php bp_get_template_part( 'experiments/experiments-loop' ); ?>
</div><!-- #experiments-dir-list -->

<?php do_action( 'bp_directory_experiments_content' ); ?>

<?php wp_nonce_field( 'directory_experiments', '_wpnonce-experiments-filter' ); ?>

<?php do_action( 'bp_after_directory_experiments_content' ); ?>

</form><!-- #experiments-directory-form -->

<?php do_action( 'bp_after_directory_experiments' ); ?>

</div><!-- #buddypress -->

<?php do_action( 'bp_after_directory_experiments_page' ); ?>