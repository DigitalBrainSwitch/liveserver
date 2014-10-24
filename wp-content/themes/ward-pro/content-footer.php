<?php
/**
 * The template for displaying article footers
 *
 * @since 1.0.6
 */

 ?>
	<footer class="entry">


	    <?php

	    if ( is_single() ) wp_link_pages( array( 'before' => '<p id="pages">' . __( 'Pages:', 'ward' ) ) );
	    edit_post_link( __( '(edit)', 'ward' ), '<p class="edit-link">', '</p>' );
		if ( is_single() ) the_tags( '<p class="tags"><i class="icon-tags"></i> <span>' . __( 'Tags:', 'ward' ) . '</span>', ' ', '</p>' );
	    ?>

	</footer><!-- .entry -->
			<?php bavotasan_home_page_default_widgets(); ?>