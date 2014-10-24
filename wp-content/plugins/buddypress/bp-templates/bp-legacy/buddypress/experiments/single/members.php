<?php if ( bp_experiment_has_members( bp_ajax_querystring( 'experiment_members' ) ) ) : ?>

	<?php do_action( 'bp_before_experiment_members_content' ); ?>

	<div id="pag-top" class="pagination">

		<div class="pag-count" id="member-count-top">

			<?php bp_members_pagination_count(); ?>

		</div>

		<div class="pagination-links" id="member-pag-top">

			<?php bp_members_pagination_links(); ?>

		</div>

	</div>

	<?php do_action( 'bp_before_experiment_members_list' ); ?>

	<ul id="members-list" class="item-list" role="main">

	<?php while ( bp_members() ) : bp_the_member(); 

	if($count==0){
	    echo '<div class="row" style="margin-left:0px; margin-right:0px; margin-bottom:10px">';
	}
	$count++;
	?>

		<div class='col-sm-3 member'>
		<li>

			<a href="<?php bp_member_permalink(); ?>">
			<div class="member-item-avatar" style='height: 120px; '>
				<?php bp_member_avatar("html=false"); ?>

			</div>
			</a>

			<div class="member-item">
					<a href="<?php bp_member_permalink(); ?>"><?php bp_member_name(); ?></a>
				<?php do_action( 'bp_directory_members_actions' ); ?>

				<div class="item-meta"><span class="activity"><?php bp_member_last_active(); ?></span></div>

				<?php do_action( 'bp_directory_members_item' ); ?>

			</div>
				
		</li>
		</div>
		<?php
			if($count==4){
			    echo '</div>';
			    $count = 0;
			}
		?>
	<?php endwhile; ?>

	</ul>

	<?php do_action( 'bp_after_experiment_members_list' ); ?>

	<div id="pag-bottom" class="pagination">

		<div class="pag-count" id="member-count-bottom">

			<?php bp_members_pagination_count(); ?>

		</div>

		<div class="pagination-links" id="member-pag-bottom">

			<?php bp_members_pagination_links(); ?>

		</div>

	</div>




	<?php do_action( 'bp_after_experiment_members_content' ); ?>

<?php else: ?>

	<div id="message" class="info">
		<p><?php _e( 'This experiment has no members.', 'buddypress' ); ?></p>
	</div>

<?php endif; ?>
