<div class="item-list-tabs no-ajax" id="subnav" role="navigation">
	<ul>
		<?php bp_experiment_admin_tabs(); ?>
	</ul>
</div><!-- .item-list-tabs -->

<form action="<?php bp_experiment_admin_form_action(); ?>" name="experiment-settings-form" id="experiment-settings-form" class="standard-form" method="post" enctype="multipart/form-data" role="main">

<?php do_action( 'bp_before_experiment_admin_content' ); ?>

<?php /* Edit Experiment Details */ ?>
<?php if ( bp_is_experiment_admin_screen( 'edit-details' ) ) : ?>

	<?php do_action( 'bp_before_experiment_details_admin' ); ?>

	<label for="experiment-name"><?php _e( 'Experiment Name (required)', 'buddypress' ); ?></label>
	<input type="text" name="experiment-name" id="experiment-name" value="<?php bp_experiment_name(); ?>" aria-required="true" readonly/>

	<label for="experiment-desc"><?php _e( 'Experiment Description (required)', 'buddypress' ); ?></label>
	<textarea name="experiment-desc" id="experiment-desc" aria-required="true" readonly><?php bp_experiment_description_editable(); ?></textarea>

	<?php do_action( 'experiments_custom_experiment_fields_editable' ); ?>

	<!--p>
		<label for="experiment-notifiy-members">
			<input type="checkbox" name="experiment-notify-members" value="1" /> <?php _e( 'Notify experiment members of these changes via email', 'buddypress' ); ?>
		</label>
	</p-->

	<?php do_action( 'bp_after_experiment_details_admin' ); ?>

	<!--p><input type="submit" value="<?php esc_attr_e( 'Save Changes', 'buddypress' ); ?>" id="save" name="save" /></p-->
	<?php wp_nonce_field( 'experiments_edit_experiment_details' ); ?>

<?php endif; ?>

<?php /* Manage Experiment Settings */ ?>
<?php if ( bp_is_experiment_admin_screen( 'experiment-settings' ) ) : ?>

	<?php do_action( 'bp_before_experiment_settings_admin' ); ?>

	<?php if ( bp_is_active( 'forums' ) ) : ?>

		<?php if ( bp_forums_is_installed_correctly() ) : ?>

			<div class="checkbox">
				<label><input type="checkbox" name="experiment-show-forum" id="experiment-show-forum" value="1"<?php bp_experiment_show_forum_setting(); ?> /> <?php _e( 'Enable discussion forum', 'buddypress' ); ?></label>
			</div>

			<hr />

		<?php endif; ?>

	<?php endif; ?>

	<h4><?php _e( 'Privacy Options', 'buddypress' ); ?></h4>

	<div class="radio">
		<label>
			<input type="radio" name="experiment-status" value="public"<?php bp_experiment_show_status_setting( 'public' ); ?> />
			<strong><?php _e( 'This is a public experiment', 'buddypress' ); ?></strong>
			<ul>
				<li><?php _e( 'Any site member can join this experiment.', 'buddypress' ); ?></li>
				<li><?php _e( 'This experiment will be listed in the experiments directory and in search results.', 'buddypress' ); ?></li>
				<li><?php _e( 'Experiment content and activity will be visible to any site member.', 'buddypress' ); ?></li>
			</ul>
		</label>

		<label>
			<input type="radio" name="experiment-status" value="private"<?php bp_experiment_show_status_setting( 'private' ); ?> />
			<strong><?php _e( 'This is a private experiment', 'buddypress' ); ?></strong>
			<ul>
				<li><?php _e( 'Only users who request membership and are accepted can join the experiment.', 'buddypress' ); ?></li>
				<li><?php _e( 'This experiment will be listed in the experiments directory and in search results.', 'buddypress' ); ?></li>
				<li><?php _e( 'Experiment content and activity will only be visible to members of the experiment.', 'buddypress' ); ?></li>
			</ul>
		</label>

		<label>
			<input type="radio" name="experiment-status" value="hidden"<?php bp_experiment_show_status_setting( 'hidden' ); ?> />
			<strong><?php _e( 'This is a hidden experiment', 'buddypress' ); ?></strong>
			<ul>
				<li><?php _e( 'Only users who are invited can join the experiment.', 'buddypress' ); ?></li>
				<li><?php _e( 'This experiment will not be listed in the experiments directory or search results.', 'buddypress' ); ?></li>
				<li><?php _e( 'Experiment content and activity will only be visible to members of the experiment.', 'buddypress' ); ?></li>
			</ul>
		</label>
	</div>

	<hr />

	<h4><?php _e( 'Experiment Invitations', 'buddypress' ); ?></h4>

	<p><?php _e( 'Which members of this experiment are allowed to invite others?', 'buddypress' ); ?></p>

	<div class="radio">
		<label>
			<input type="radio" name="experiment-invite-status" value="members"<?php bp_experiment_show_invite_status_setting( 'members' ); ?> />
			<strong><?php _e( 'All experiment members', 'buddypress' ); ?></strong>
		</label>

		<!--label>
			<input type="radio" name="experiment-invite-status" value="mods"<?php bp_experiment_show_invite_status_setting( 'mods' ); ?> />
			<strong><?php _e( 'Experiment admins and mods only', 'buddypress' ); ?></strong>
		</label-->

		<label>
			<input type="radio" name="experiment-invite-status" value="admins"<?php bp_experiment_show_invite_status_setting( 'admins' ); ?> />
			<strong><?php _e( 'Only you', 'buddypress' ); ?></strong>
		</label>
 	</div>

	<hr />

	<?php do_action( 'bp_after_experiment_settings_admin' ); ?>

	<p><input type="submit" value="<?php esc_attr_e( 'Save Changes', 'buddypress' ); ?>" id="save" name="save" /></p>
	<?php wp_nonce_field( 'experiments_edit_experiment_settings' ); ?>

<?php endif; ?>

<?php /* Experiment Avatar Settings */ ?>
<?php if ( bp_is_experiment_admin_screen( 'experiment-avatar' ) ) : ?>

	<?php if ( 'upload-image' == bp_get_avatar_admin_step() ) : ?>

			<p><?php _e("Upload an image to use as a logo for this experiment. The image will be shown on the main experiment page, and in search results.", 'buddypress' ); ?></p>

			<p>
				<input type="file" name="file" id="file" />
				<input type="submit" name="upload" id="upload" value="<?php esc_attr_e( 'Upload Image', 'buddypress' ); ?>" />
				<input type="hidden" name="action" id="action" value="bp_avatar_upload" />
			</p>

			<?php if ( bp_get_experiment_has_avatar() ) : ?>

				<p><?php _e( "If you'd like to remove the existing logo but not upload a new one, please use the delete logo button.", 'buddypress' ); ?></p>

				<?php bp_button( array( 'id' => 'delete_experiment_avatar', 'component' => 'experiments', 'wrapper_id' => 'delete-experiment-avatar-button', 'link_class' => 'edit', 'link_href' => bp_get_experiment_avatar_delete_link(), 'link_title' => __( 'Delete Logo', 'buddypress' ), 'link_text' => __( 'Delete Logo', 'buddypress' ) ) ); ?>

			<?php endif; ?>

			<?php wp_nonce_field( 'bp_avatar_upload' ); ?>

	<?php endif; ?>

	<?php if ( 'crop-image' == bp_get_avatar_admin_step() ) : ?>

		<h4><?php _e( 'Crop Logo', 'buddypress' ); ?></h4>

		<img src="<?php bp_avatar_to_crop(); ?>" id="avatar-to-crop" class="avatar" alt="<?php esc_attr_e( 'Logo to crop', 'buddypress' ); ?>" />

		<div id="avatar-crop-pane">
			<img src="<?php bp_avatar_to_crop(); ?>" id="avatar-crop-preview" class="avatar" alt="<?php esc_attr_e( 'Logo preview', 'buddypress' ); ?>" />
		</div>

		<input type="submit" name="avatar-crop-submit" id="avatar-crop-submit" value="<?php esc_attr_e( 'Crop Image', 'buddypress' ); ?>" />

		<input type="hidden" name="image_src" id="image_src" value="<?php bp_avatar_to_crop_src(); ?>" />
		<input type="hidden" id="x" name="x" />
		<input type="hidden" id="y" name="y" />
		<input type="hidden" id="w" name="w" />
		<input type="hidden" id="h" name="h" />

		<?php wp_nonce_field( 'bp_avatar_cropstore' ); ?>

	<?php endif; ?>

<?php endif; ?>

<?php /* Manage Experiment Members */ ?>
<?php if ( bp_is_experiment_admin_screen( 'manage-members' ) ) : ?>

	<?php do_action( 'bp_before_experiment_manage_members_admin' ); ?>

	<div class="bp-widget">
		<h4><?php _e( 'Administrators', 'buddypress' ); ?></h4>

		<?php if ( bp_has_members( '&include='. bp_experiment_admin_ids() ) ) : ?>

		<ul id="admins-list" class="item-list single-line">

			<?php while ( bp_members() ) : bp_the_member(); ?>
			<li>
				<?php echo bp_core_fetch_avatar( array( 'item_id' => bp_get_member_user_id(), 'type' => 'thumb', 'width' => 30, 'height' => 30, 'alt' => sprintf( __( 'Profile picture of %s', 'buddypress' ), bp_get_member_name() ) ) ); ?>
				<h5>
					<a href="<?php bp_member_permalink(); ?>"> <?php bp_member_name(); ?></a>
					<?php if ( count( bp_experiment_admin_ids( false, 'array' ) ) > 1 ) : ?>
					<span class="small">
						<a class="button confirm admin-demote-to-member" href="<?php bp_experiment_member_demote_link( bp_get_member_user_id() ); ?>"><?php _e( 'Demote to Member', 'buddypress' ); ?></a>
					</span>
					<?php endif; ?>
				</h5>
			</li>
			<?php endwhile; ?>

		</ul>

		<?php endif; ?>

	</div>

	<?php if ( bp_experiment_has_moderators() ) : ?>
		<div class="bp-widget">
			<h4><?php _e( 'Moderators', 'buddypress' ); ?></h4>

			<?php if ( bp_has_members( '&include=' . bp_experiment_mod_ids() ) ) : ?>
				<ul id="mods-list" class="item-list single-line">

					<?php while ( bp_members() ) : bp_the_member(); ?>
					<li>
						<?php echo bp_core_fetch_avatar( array( 'item_id' => bp_get_member_user_id(), 'type' => 'thumb', 'width' => 30, 'height' => 30, 'alt' => sprintf( __( 'Profile picture of %s', 'buddypress' ), bp_get_member_name() ) ) ); ?>
						<h5>
							<a href="<?php bp_member_permalink(); ?>"> <?php bp_member_name(); ?></a>
							<span class="small">
								<a href="<?php bp_experiment_member_promote_admin_link( array( 'user_id' => bp_get_member_user_id() ) ); ?>" class="button confirm mod-promote-to-admin" title="<?php esc_attr_e( 'Promote to Admin', 'buddypress' ); ?>"><?php _e( 'Promote to Admin', 'buddypress' ); ?></a>
								<a class="button confirm mod-demote-to-member" href="<?php bp_experiment_member_demote_link( bp_get_member_user_id() ); ?>"><?php _e( 'Demote to Member', 'buddypress' ); ?></a>
							</span>
						</h5>
					</li>
					<?php endwhile; ?>

				</ul>

			<?php endif; ?>
		</div>
	<?php endif ?>


	<div class="bp-widget">
		<h4><?php _e("Members", "buddypress"); ?></h4>

		<?php if ( bp_experiment_has_members( 'per_page=15&exclude_banned=false' ) ) : ?>

			<?php if ( bp_experiment_member_needs_pagination() ) : ?>

				<div class="pagination no-ajax">

					<div id="member-count" class="pag-count">
						<?php bp_experiment_member_pagination_count(); ?>
					</div>

					<div id="member-admin-pagination" class="pagination-links">
						<?php bp_experiment_member_admin_pagination(); ?>
					</div>

				</div>

			<?php endif; ?>

			<ul id="members-list" class="item-list single-line">
				<?php while ( bp_experiment_members() ) : bp_experiment_the_member(); ?>

					<li class="<?php bp_experiment_member_css_class(); ?>">
						<?php bp_experiment_member_avatar_mini(); ?>

						<h5>
							<?php bp_experiment_member_link(); ?>

							<?php if ( bp_get_experiment_member_is_banned() ) _e( '(banned)', 'buddypress' ); ?>

							<!--span class="small">

							<?php if ( bp_get_experiment_member_is_banned() ) : ?>

								<a href="<?php bp_experiment_member_unban_link(); ?>" class="button confirm member-unban" title="<?php esc_attr_e( 'Unban this member', 'buddypress' ); ?>"><?php _e( 'Remove Ban', 'buddypress' ); ?></a>

							<?php else : ?>

								<a href="<?php bp_experiment_member_ban_link(); ?>" class="button confirm member-ban" title="<?php esc_attr_e( 'Kick and ban this member', 'buddypress' ); ?>"><?php _e( 'Kick &amp; Ban', 'buddypress' ); ?></a>
								<a href="<?php bp_experiment_member_promote_mod_link(); ?>" class="button confirm member-promote-to-mod" title="<?php esc_attr_e( 'Promote to Mod', 'buddypress' ); ?>"><?php _e( 'Promote to Mod', 'buddypress' ); ?></a>
								<a href="<?php bp_experiment_member_promote_admin_link(); ?>" class="button confirm member-promote-to-admin" title="<?php esc_attr_e( 'Promote to Admin', 'buddypress' ); ?>"><?php _e( 'Promote to Admin', 'buddypress' ); ?></a>

							<?php endif; ?>

								<a href="<?php bp_experiment_member_remove_link(); ?>" class="button confirm" title="<?php esc_attr_e( 'Remove this member', 'buddypress' ); ?>"><?php _e( 'Remove from experiment', 'buddypress' ); ?></a>

								<?php do_action( 'bp_experiment_manage_members_admin_item' ); ?>

							</span-->
						</h5>
					</li>

				<?php endwhile; ?>
			</ul>

		<?php else: ?>

			<div id="message" class="info">
				<p><?php _e( 'This experiment has no members.', 'buddypress' ); ?></p>
			</div>

		<?php endif; ?>

	</div>

	<?php do_action( 'bp_after_experiment_manage_members_admin' ); ?>

<?php endif; ?>

<?php /* Manage Membership Requests */ ?>
<?php if ( bp_is_experiment_admin_screen( 'membership-requests' ) ) : ?>

	<?php do_action( 'bp_before_experiment_membership_requests_admin' ); ?>

		<div class="requests">

			<?php bp_get_template_part( 'experiments/single/requests-loop' ); ?>

		</div>

	<?php do_action( 'bp_after_experiment_membership_requests_admin' ); ?>

<?php endif; ?>

<?php do_action( 'experiments_custom_edit_steps' ) // Allow plugins to add custom experiment edit screens ?>

<?php /* Delete Experiment Option */ ?>
<?php if ( bp_is_experiment_admin_screen( 'delete-experiment' ) ) : ?>

	<?php do_action( 'bp_before_experiment_delete_admin' ); ?>

	<div id="message" class="info">
		<p><?php _e( 'WARNING: Deleting this experiment will completely remove ALL content associated with it. There is no way back, please be careful with this option.', 'buddypress' ); ?></p>
	</div>

	<label><input type="checkbox" name="delete-experiment-understand" id="delete-experiment-understand" value="1" onclick="if(this.checked) { document.getElementById('delete-experiment-button').disabled = ''; } else { document.getElementById('delete-experiment-button').disabled = 'disabled'; }" /> <?php _e( 'I understand the consequences of deleting this experiment.', 'buddypress' ); ?></label>

	<?php do_action( 'bp_after_experiment_delete_admin' ); ?>

	<div class="submit">
		<input type="submit" disabled="disabled" value="<?php esc_attr_e( 'Delete Experiment', 'buddypress' ); ?>" id="delete-experiment-button" name="delete-experiment-button" />
	</div>

	<?php wp_nonce_field( 'experiments_delete_experiment' ); ?>

<?php endif; ?>

<?php /* This is important, don't forget it */ ?>
	<input type="hidden" name="experiment-id" id="experiment-id" value="<?php bp_experiment_id(); ?>" />

<?php do_action( 'bp_after_experiment_admin_content' ); ?>

</form><!-- #experiment-settings-form -->

