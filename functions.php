<?php
function avada_child_styles() {
        wp_enqueue_style( 'avada-child-stylesheet', get_stylesheet_uri());
}
function avada_child_scripts() {
        // TODO: Remove codes below when all plugins & themes support jQuery 1.12.x
        wp_enqueue_script('child_script', get_stylesheet_directory_uri() . '/js/jquery.script.js', array('jquery'), false, true);
}
add_action('wp_enqueue_scripts', 'avada_child_styles');
add_action('wp_enqueue_scripts', 'avada_child_scripts', 20);

// http://www.wpbeginner.com/wp-tutorials/how-to-add-search-form-in-your-post-with-a-wordpress-search-shortcode/
add_shortcode('wpbsearch', 'get_search_form');

// https://gist.github.com/JosefJezek/ea16852d30bb4663e3b6
// wp-plugin-periods-in-title.php
remove_filter('sanitize_title', 'sanitize_title_with_dashes');
function sanitize_title_with_dots_and_dashes($title) {
        $title = strip_tags($title);
        // Preserve escaped octets.
        $title = preg_replace('|%([a-fA-F0-9][a-fA-F0-9])|', '---$1---', $title);
        // Remove percent signs that are not part of an octet.
        $title = str_replace('%', '', $title);
        // Restore octets.
        $title = preg_replace('|---([a-fA-F0-9][a-fA-F0-9])---|', '%$1', $title);
        $title = remove_accents($title);
        if (seems_utf8($title)) {
                if (function_exists('mb_strtolower')) {
                        $title = mb_strtolower($title, 'UTF-8');
                }
                $title = utf8_uri_encode($title);
        }
        $title = strtolower($title);
        $title = preg_replace('/&.+?;/', '', $title); // kill entities
        $title = preg_replace('/[^%a-z0-9 ._-]/', '', $title);
        $title = preg_replace('/\s+/', '-', $title);
        $title = preg_replace('|-+|', '-', $title);
        $title = trim($title, '-');
        $title = str_replace('-.-', '.', $title);
        $title = str_replace('-.', '.', $title);
        $title = str_replace('.-', '.', $title);
        $title = preg_replace('|([^.])\.$|', '$1', $title);
        $title = trim($title, '-'); // yes, again
        return $title;
}
add_filter('sanitize_title', 'sanitize_title_with_dots_and_dashes');