<?php
/**
 * BuddyPress Experiments Forums
 *
 * Action functions are exactly the same as screen functions, however they do not
 * have a template screen associated with them. Usually they will send the user
 * back to the default screen after execution.
 *
 * Note that this file is only used for the retired version of bbPress (1.x) and
 * will see minimal updates as of BuddyPress 1.9.0.
 *
 * @package BuddyPress
 * @subpackage ExperimentsForums
 */

// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

/**
 * Creates a new forum inside a specific BuddyPress experiment.
 *
 * Uses the bundled version of bbPress packaged with BuddyPress.
 *
 * @param int $experiment_id The experiment ID that the new forum should be attached to
 * @param string $experiment_name The experiment name
 * @param string $experiment_description The experiment description
 *
 * @since BuddyPress (1.0)
 */
function experiments_new_experiment_forum( $experiment_id = 0, $experiment_name = '', $experiment_desc = '' ) {
	global $bp;

	if ( empty( $experiment_id ) )
		$experiment_id = bp_get_current_experiment_id();

	if ( empty( $experiment_name ) )
		$experiment_name = bp_get_current_experiment_name();

	if ( empty( $experiment_desc ) )
		$experiment_desc = $bp->experiments->current_experiment->description;

	$forum_id = bp_forums_new_forum( array( 'forum_name' => $experiment_name, 'forum_desc' => $experiment_desc ) );

	experiments_update_experimentmeta( $experiment_id, 'forum_id', $forum_id );

	do_action( 'experiments_new_experiment_forum', $forum_id, $experiment_id );
}

/**
 * Updates experiment forum metadata (title, description, slug) when the experiment's details are edited
 *
 * @package BuddyPress
 * @subpackage Experiments
 *
 * @param int $experiment_id Experiment id, passed from experiments_details_updated
 *
 * @since BuddyPress (1.1)
 */
function experiments_update_experiment_forum( $experiment_id ) {

	$experiment = experiments_get_experiment( array( 'experiment_id' => $experiment_id ) );

	/**
	 * Bail in the following three situations:
	 *  1. Forums are not enabled for this experiment
	 *  2. The BP Forum component is not enabled
	 *  3. The built-in bbPress forums are not correctly installed (usually means they've been
	 *     uninstalled)
	 */
	if ( empty( $experiment->enable_forum ) || !bp_is_active( 'forums' ) || ( function_exists( 'bp_forums_is_installed_correctly' ) && !bp_forums_is_installed_correctly() ) )
		return false;

	$args = array(
		'forum_id'      => experiments_get_experimentmeta( $experiment_id, 'forum_id' ),
		'forum_name'    => $experiment->name,
		'forum_desc'    => $experiment->description,
		'forum_slug'    => $experiment->slug
	);

	bp_forums_update_forum( apply_filters( 'experiments_update_experiment_forum', $args ) );
}
add_action( 'experiments_details_updated', 'experiments_update_experiment_forum' );

/**
 * Creates a new experiment forum post.
 *
 * Uses the bundled version of bbPress packaged with BuddyPress.
 *
 * @param string $post_text The text for the forum post
 * @param int $topic_id The topic ID used so we can identify where the new forum post should reside
 * @param mixed $page The page number where the new forum post should reside. Defaults to boolean false.
 * @return mixed The new forum post ID on success. Boolean false on failure.
 *
 * @since BuddyPress (1.0)
 */
function experiments_new_experiment_forum_post( $post_text, $topic_id, $page = false ) {
	if ( empty( $post_text ) )
		return false;

	$post_text = apply_filters( 'experiment_forum_post_text_before_save', $post_text );
	$topic_id  = apply_filters( 'experiment_forum_post_topic_id_before_save', $topic_id );

	if ( $post_id = bp_forums_insert_post( array( 'post_text' => $post_text, 'topic_id' => $topic_id ) ) ) {
		$topic = bp_forums_get_topic_details( $topic_id );

		$activity_action = sprintf( __( '%1$s replied to the forum topic %2$s in the experiment %3$s', 'buddypress'), bp_core_get_userlink( bp_loggedin_user_id() ), '<a href="' . bp_get_experiment_permalink( experiments_get_current_experiment() ) . 'forum/topic/' . $topic->topic_slug .'/">' . esc_attr( $topic->topic_title ) . '</a>', '<a href="' . bp_get_experiment_permalink( experiments_get_current_experiment() ) . '">' . esc_attr( bp_get_current_experiment_name() ) . '</a>' );
		$activity_content = bp_create_excerpt( $post_text );
		$primary_link = bp_get_experiment_permalink( experiments_get_current_experiment() ) . 'forum/topic/' . $topic->topic_slug . '/';

		if ( $page )
			$primary_link .= "?topic_page=" . $page;

		// Record this in activity streams
		experiments_record_activity( array(
			'action'            => apply_filters_ref_array( 'experiments_activity_new_forum_post_action',  array( $activity_action,  $post_id, $post_text, &$topic ) ),
			'content'           => apply_filters_ref_array( 'experiments_activity_new_forum_post_content', array( $activity_content, $post_id, $post_text, &$topic ) ),
			'primary_link'      => apply_filters( 'experiments_activity_new_forum_post_primary_link', "{$primary_link}#post-{$post_id}" ),
			'type'              => 'new_forum_post',
			'item_id'           => bp_get_current_experiment_id(),
			'secondary_item_id' => $post_id
		) );

		do_action( 'experiments_new_forum_topic_post', bp_get_current_experiment_id(), $post_id );

		return $post_id;
	}

	return false;
}

/**
 * Creates a new experiment forum topic.
 *
 * Uses the bundled version of bbPress packaged with BuddyPress.
 *
 * @param string $topic_title The title for the forum topic
 * @param string $topic_text The text for the forum topic
 * @param string $topic_tags A comma-delimited string of topic tags
 * @param int $forum_id The forum ID this forum topic resides in
 * @return mixed The new topic object on success. Boolean false on failure.
 *
 * @since BuddyPress (1.0)
 */
function experiments_new_experiment_forum_topic( $topic_title, $topic_text, $topic_tags, $forum_id ) {
	if ( empty( $topic_title ) || empty( $topic_text ) )
		return false;

	$topic_title = apply_filters( 'experiment_forum_topic_title_before_save', $topic_title );
	$topic_text  = apply_filters( 'experiment_forum_topic_text_before_save', $topic_text );
	$topic_tags  = apply_filters( 'experiment_forum_topic_tags_before_save', $topic_tags );
	$forum_id    = apply_filters( 'experiment_forum_topic_forum_id_before_save', $forum_id );

	if ( $topic_id = bp_forums_new_topic( array( 'topic_title' => $topic_title, 'topic_text' => $topic_text, 'topic_tags' => $topic_tags, 'forum_id' => $forum_id ) ) ) {
		$topic = bp_forums_get_topic_details( $topic_id );

		$activity_action = sprintf( __( '%1$s started the forum topic %2$s in the experiment %3$s', 'buddypress'), bp_core_get_userlink( bp_loggedin_user_id() ), '<a href="' . bp_get_experiment_permalink( experiments_get_current_experiment() ) . 'forum/topic/' . $topic->topic_slug .'/">' . esc_attr( $topic->topic_title ) . '</a>', '<a href="' . bp_get_experiment_permalink( experiments_get_current_experiment() ) . '">' . esc_attr( bp_get_current_experiment_name() ) . '</a>' );
		$activity_content = bp_create_excerpt( $topic_text );

		// Record this in activity streams
		experiments_record_activity( array(
			'action'            => apply_filters_ref_array( 'experiments_activity_new_forum_topic_action',  array( $activity_action,  $topic_text, &$topic ) ),
			'content'           => apply_filters_ref_array( 'experiments_activity_new_forum_topic_content', array( $activity_content, $topic_text, &$topic ) ),
			'primary_link'      => apply_filters( 'experiments_activity_new_forum_topic_primary_link', bp_get_experiment_permalink( experiments_get_current_experiment() ) . 'forum/topic/' . $topic->topic_slug . '/' ),
			'type'              => 'new_forum_topic',
			'item_id'           => bp_get_current_experiment_id(),
			'secondary_item_id' => $topic->topic_id
		) );

		do_action_ref_array( 'experiments_new_forum_topic', array( bp_get_current_experiment_id(), &$topic ) );

		return $topic;
	}

	return false;
}

/**
 * Updates an existing experiment forum topic.
 *
 * Uses the bundled version of bbPress packaged with BuddyPress.
 *
 * @param int $topic_id The topic ID of the existing forum topic
 * @param string $topic_title The title for the forum topic
 * @param string $topic_text The text for the forum topic
 * @param mixed $topic_tags A comma-delimited string of topic tags. Defaults to boolean false.
 * @return mixed The topic object on success. Boolean false on failure.
 *
 * @since BuddyPress (1.1)
 */
function experiments_update_experiment_forum_topic( $topic_id, $topic_title, $topic_text, $topic_tags = false ) {
	global $bp;

	$topic_title = apply_filters( 'experiment_forum_topic_title_before_save', $topic_title );
	$topic_text  = apply_filters( 'experiment_forum_topic_text_before_save',  $topic_text  );

	if ( $topic = bp_forums_update_topic( array( 'topic_title' => $topic_title, 'topic_text' => $topic_text, 'topic_id' => $topic_id, 'topic_tags' => $topic_tags ) ) ) {

		// Get the corresponding activity item
		if ( bp_is_active( 'activity' ) ) {
			$id = bp_activity_get_activity_id( array(
					'item_id'           => bp_get_current_experiment_id(),
					'secondary_item_id' => $topic_id,
					'component'         => $bp->experiments->id,
					'type'              => 'new_forum_topic'
			) );
		}

		$activity_action = sprintf( __( '%1$s edited the forum topic %2$s in the experiment %3$s', 'buddypress'), bp_core_get_userlink( $topic->topic_poster ), '<a href="' . bp_get_experiment_permalink( experiments_get_current_experiment() ) . 'forum/topic/' . $topic->topic_slug .'/">' . esc_attr( $topic->topic_title ) . '</a>', '<a href="' . bp_get_experiment_permalink( experiments_get_current_experiment() ) . '">' . esc_attr( bp_get_current_experiment_name() ) . '</a>' );
		$activity_content = bp_create_excerpt( $topic_text );

		// Record this in activity streams
		experiments_record_activity( array(
			'id'                => $id,
			'action'            => apply_filters_ref_array( 'experiments_activity_new_forum_topic_action',  array( $activity_action,  $topic_text, &$topic ) ),
			'content'           => apply_filters_ref_array( 'experiments_activity_new_forum_topic_content', array( $activity_content, $topic_text, &$topic ) ),
			'primary_link'      => apply_filters( 'experiments_activity_new_forum_topic_primary_link', bp_get_experiment_permalink( experiments_get_current_experiment() ) . 'forum/topic/' . $topic->topic_slug . '/' ),
			'type'              => 'new_forum_topic',
			'item_id'           => (int) bp_get_current_experiment_id(),
			'user_id'           => (int) $topic->topic_poster,
			'secondary_item_id' => $topic->topic_id,
			'recorded_time '    => $topic->topic_time
		) );

		do_action_ref_array( 'experiments_update_experiment_forum_topic', array( &$topic ) );

		return $topic;
	}

	return false;
}

/**
 * Updates an existing experiment forum post.
 *
 * Uses the bundled version of bbPress packaged with BuddyPress.
 *
 * @param int $post_id The post ID of the existing forum post
 * @param string $post_text The text for the forum post
 * @param int $topic_id The topic ID of the existing forum topic
 * @param mixed $page The page number where the new forum post should reside. Defaults to boolean false.
 * @return mixed The forum post ID on success. Boolean false on failure.
 *
 * @since BuddyPress (1.1)
 */
function experiments_update_experiment_forum_post( $post_id, $post_text, $topic_id, $page = false ) {
	global $bp;

	$post_text = apply_filters( 'experiment_forum_post_text_before_save', $post_text );
	$topic_id  = apply_filters( 'experiment_forum_post_topic_id_before_save', $topic_id );
	$post      = bp_forums_get_post( $post_id );

	if ( $post_id = bp_forums_insert_post( array( 'post_id' => $post_id, 'post_text' => $post_text, 'post_time' => $post->post_time, 'topic_id' => $topic_id, 'poster_id' => $post->poster_id ) ) ) {
		$topic = bp_forums_get_topic_details( $topic_id );

		$activity_action = sprintf( __( '%1$s replied to the forum topic %2$s in the experiment %3$s', 'buddypress'), bp_core_get_userlink( $post->poster_id ), '<a href="' . bp_get_experiment_permalink( experiments_get_current_experiment() ) . 'forum/topic/' . $topic->topic_slug .'">' . esc_attr( $topic->topic_title ) . '</a>', '<a href="' . bp_get_experiment_permalink( experiments_get_current_experiment() ) . '">' . esc_attr( bp_get_current_experiment_name() ) . '</a>' );
		$activity_content = bp_create_excerpt( $post_text );
		$primary_link = bp_get_experiment_permalink( experiments_get_current_experiment() ) . 'forum/topic/' . $topic->topic_slug . '/';

		if ( $page )
			$primary_link .= "?topic_page=" . $page;

		// Get the corresponding activity item
		if ( bp_is_active( 'activity' ) ) {
			$id = bp_activity_get_activity_id( array(
				'user_id'           => $post->poster_id,
				'component'         => $bp->experiments->id,
				'type'              => 'new_forum_post',
				'item_id'           => bp_get_current_experiment_id(),
				'secondary_item_id' => $post_id
			 ) );
		}

		// Update the entry in activity streams
		experiments_record_activity( array(
			'id'                => $id,
			'action'            => apply_filters_ref_array( 'experiments_activity_new_forum_post_action',  array( $activity_action,  $post_text, &$topic, &$topic ) ),
			'content'           => apply_filters_ref_array( 'experiments_activity_new_forum_post_content', array( $activity_content, $post_text, &$topic, &$topic ) ),
			'primary_link'      => apply_filters( 'experiments_activity_new_forum_post_primary_link', $primary_link . "#post-" . $post_id ),
			'type'              => 'new_forum_post',
			'item_id'           => (int) bp_get_current_experiment_id(),
			'user_id'           => (int) $post->poster_id,
			'secondary_item_id' => $post_id,
			'recorded_time'     => $post->post_time
		) );

		do_action_ref_array( 'experiments_update_experiment_forum_post', array( $post, &$topic ) );

		return $post_id;
	}

	return false;
}

/**
 * Deletes a experiment forum topic and also any corresponding activity items.
 *
 * Uses the bundled version of bbPress packaged with BuddyPress.
 *
 * @package BuddyPress
 *
 * @uses bp_activity_delete() to delete corresponding activity items
 * @uses bp_forums_get_topic_posts() to get the child posts
 * @uses bp_forums_delete_topic() to do the deletion itself
 * @param int $topic_id The id of the topic to be deleted
 * @return bool True if the delete routine went through properly
 *
 * @since BuddyPress (1.1)
 */
function experiments_delete_experiment_forum_topic( $topic_id ) {
	global $bp;

	// Before deleting the thread, get the post ids so that their activity items can be deleted
	$posts = bp_forums_get_topic_posts( array( 'topic_id' => $topic_id, 'per_page' => -1 ) );

	if ( bp_forums_delete_topic( array( 'topic_id' => $topic_id ) ) ) {
		do_action( 'experiments_before_delete_experiment_forum_topic', $topic_id );

		// Delete the corresponding activity stream items
		if ( bp_is_active( 'activity' ) ) {
			// The activity item for the initial topic
			bp_activity_delete( array(
				'item_id'           => bp_get_current_experiment_id(),
				'secondary_item_id' => $topic_id,
				'component'         => $bp->experiments->id,
				'type'              => 'new_forum_topic'
			) );

			// The activity item for each post
			foreach ( (array) $posts as $post ) {
				bp_activity_delete( array(
					'item_id'           => bp_get_current_experiment_id(),
					'secondary_item_id' => $post->post_id,
					'component'         => $bp->experiments->id,
					'type'              => 'new_forum_post'
				) );
			}
		}

		do_action( 'experiments_delete_experiment_forum_topic', $topic_id );

		return true;
	}

	return false;
}

/**
 * Deletes a experiment forum post and its corresponding activity item.
 *
 * Uses the bundled version of bbPress packaged with BuddyPress.
 *
 * @package BuddyPress
 *
 * @param int $post_id The id of the post you want to delete
 * @param int $topic_id Optional. The topic to which the post belongs. This value isn't used in the
 *   function but is passed along to do_action() hooks.
 * @return bool True on success.
 *
 * @since BuddyPress (1.1)
 */
function experiments_delete_experiment_forum_post( $post_id, $topic_id = false ) {
	global $bp;

	if ( bp_forums_delete_post( array( 'post_id' => $post_id ) ) ) {
		do_action( 'experiments_before_delete_experiment_forum_post', $post_id, $topic_id );

		// Delete the corresponding activity stream item
		if ( bp_is_active( 'activity' ) )
			bp_activity_delete( array(
				'item_id'           => bp_get_current_experiment_id(),
				'secondary_item_id' => $post_id,
				'component'         => $bp->experiments->id,
				'type'              => 'new_forum_post'
			) );

		do_action( 'experiments_delete_experiment_forum_post', $post_id, $topic_id );

		return true;
	}

	return false;
}

/**
 * Get a total count of all public topics of a given type, across experiments/forums
 *
 * @package BuddyPress
 * @since BuddyPress (1.5)
 *
 * @param string $type Either 'newest', 'popular', 'unreplied', 'tags'.  Defaults to 'newest'.
 * @return int The topic count
 */
function experiments_total_public_forum_topic_count( $type = 'newest' ) {
	return apply_filters( 'experiments_total_public_forum_topic_count', BP_Experiments_Experiment::get_global_forum_topic_count( $type ) );
}

/**
 * Get a total count of all topics of a given status, across experiments/forums
 *
 * @package BuddyPress
 * @since BuddyPress (1.5)
 *
 * @param string $status 'public', 'private', 'hidden', 'all' Which experiment types to count
 * @return int The topic count
 */
function experiments_total_forum_topic_count( $status = 'public', $search_terms = false ) {
	return apply_filters( 'experiments_total_forum_topic_count', BP_Experiments_Experiment::get_global_topic_count( $status, $search_terms ) );
}