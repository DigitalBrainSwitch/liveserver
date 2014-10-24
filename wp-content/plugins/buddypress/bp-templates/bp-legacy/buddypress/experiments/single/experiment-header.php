<?php

do_action( 'bp_before_experiment_header' );

?>
<link href='http://fonts.googleapis.com/css?family=Raleway:900' rel='stylesheet' type='text/css'>

<link rel="stylesheet" href="http://www.myliferocket.com/datepicker/lib/themes/default.css" id="theme_base">
<link rel="stylesheet" href="http://www.myliferocket.com/datepicker/lib/themes/default.date.css" id="theme_date">
<link rel="stylesheet" href="http://www.myliferocket.com/datepicker/lib/themes/default.time.css" id="theme_date">
<link rel="stylesheet" href="http://www.myliferocket.com/uislider/jquery.nouislider.css">

<!--[if !IE]><!--><style>
#primary{
	display:none;
}
</style><!--<![endif]-->


<div id='experiment-title'><?php bp_experiment_name(); ?></div>

<div class='row' id='collapse'>

	<div class='col-lg-3 col-md-3 col-sm-12 col-xs-12 side pull-right'>
		<div id="item-header-avatar">
			<?php
			if(bp_experiment_is_admin()){?>
				<style>
				.avatarLink{
					color: #789c2b; float:right; text-decoration:none;
				}
				.avatarLink:hover{
					color:white;
				}
				</style>
				<a title='Change logo' class='avatarLink' href='http://www.myliferocket.com/experiments/<?php echo bp_get_current_experiment_slug();?>/admin/experiment-avatar/'><span data-icon="v" style='font-size:20pt;' class="icon icon-small"></span></a>
			<?php
			}?>
			<img class='exp-avatar' src='<?php bp_experiment_avatar(); ?>'/>
			<div class='col-md-12' id="item-actions">

					</div>
		</div><!-- #item-header-avatar -->
	</div>
	<div class='col-lg-9 col-md-9 col-sm-12 col-xs-12 main pull-left'>
		<div id="item-header-content">

			<?php do_action( 'bp_before_experiment_header_meta' ); ?>

			<div id="exp-desc">
			<?php bp_experiment_description(); ?>
<?php if ( bp_experiment_is_visible() ) : ?>

							<h3 style='color: #789c2b; margin-bottom:2px;'>Experiment Creators</h3>

							<?php bp_experiment_list_admins();

							do_action( 'bp_after_experiment_menu_admins' );

							if ( bp_experiment_has_moderators() ) :
								do_action( 'bp_before_experiment_menu_mods' ); ?>

								<h3><?php _e( 'Experiment Mods' , 'buddypress' ); ?></h3>

								<?php bp_experiment_list_mods();

								do_action( 'bp_after_experiment_menu_mods' );

							endif;
						endif; ?>
			<span class="highlight"><?php bp_experiment_type(); ?></span>
			<span class="activity"><?php printf( __( 'active %s', 'buddypress' ), bp_get_experiment_last_active() ); ?></span>

				<?php do_action( 'bp_experiment_header_meta' ); ?>
				<div class='row'>
					<!-- #item-actions -->
					</div>
			</div>
		</div><!-- #item-header-content -->
	</div>


	
</div><script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.min.js"></script>

<script>
$( document ).ready(function() {
	$("#object-nav ul li:last-child").after('<li id="clickme"><a href="#"><div data-icon="f" class="icon"></div></a></li>');
	$("#object-nav ul li:first-child").before('<li style="font-size:2em"><?php do_action( "bp_experiment_header_actions" ); ?></li>');

	$( "#clickme" ).click(function() {
	if ($("#collapse").is(":visible")){
		$( "#collapse" ).slideUp( "slow", function() {
	    	$("#clickme").html('<a href="#"><div data-icon="f" class="icon"></div></a>');
	  	});
	} 
	else{
		$( "#collapse" ).slideDown( "slow", function() {
	    	$("#clickme").html('<a href="#"><div data-icon="e" class="icon"></div></a>');
	  	});
	} 
	});
})
</script>
<?php
do_action( 'bp_after_experiment_header' );
do_action( 'template_notices' );
?>
