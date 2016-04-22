jQuery(document).ready(function() {
	jQuery('.main-nav-search .search-link').click(function(e) {
		e.stopPropagation();
		if(jQuery(this).parent().find('.main-nav-search-form').css('display') == 'block') {
			jQuery(this).parent().find('.main-nav-search-form').hide();
			jQuery(this).parent().removeClass( 'search-box-open' );
		} else {

			jQuery(this).parent().find('.main-nav-search-form').removeAttr( 'style' );
			jQuery(this).parent().find('.main-nav-search-form').show();
			jQuery(this).parent().addClass( 'search-box-open' );

			// position main menu search box on click positioning
			if( js_local_vars.header_position == 'Top' ) {
				if( ! jQuery( 'body.rtl' ).length && jQuery(this).parent().find('.main-nav-search-form').offset().left < 0 ) {
					jQuery(this).parent().find('.main-nav-search-form').css({
						'left': '0',
						'right': 'auto'
					});
				}

				if( jQuery( 'body.rtl' ).length && jQuery(this).parent().find('.main-nav-search-form').offset().left + jQuery(this).parent().find('.main-nav-search-form').width()  > jQuery( window ).width() ) {
					jQuery(this).parent().find('.main-nav-search-form').css({
						'left': 'auto',
						'right': '0'
					});
				}
			}
		}
	});
});