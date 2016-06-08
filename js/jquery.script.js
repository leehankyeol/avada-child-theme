(function($) {
	'use strict';

	$(document).ready(function() {
		$('.main-nav-search .search-link').click(function(e) {
			e.stopPropagation();
			if($(this).parent().find('.main-nav-search-form').css('display') == 'block') {
				$(this).parent().find('.main-nav-search-form').hide();
				$(this).parent().removeClass( 'search-box-open' );
			} else {

				$(this).parent().find('.main-nav-search-form').removeAttr( 'style' );
				$(this).parent().find('.main-nav-search-form').show();
				$(this).parent().addClass( 'search-box-open' );

				// position main menu search box on click positioning
				if( js_local_vars.header_position == 'Top' ) {
					if( ! $( 'body.rtl' ).length && $(this).parent().find('.main-nav-search-form').offset().left < 0 ) {
						$(this).parent().find('.main-nav-search-form').css({
							'left': '0',
							'right': 'auto'
						});
					}

					if( $( 'body.rtl' ).length && $(this).parent().find('.main-nav-search-form').offset().left + $(this).parent().find('.main-nav-search-form').width()  > $( window ).width() ) {
						$(this).parent().find('.main-nav-search-form').css({
							'left': 'auto',
							'right': '0'
						});
					}
				}
			}
		});

		// Avada's avada-header.js and all those js management are f***ed up...
		setTimeout(function() {
			$('.fusion-mobile-selector').find('span').remove();
		}, 300);

	});
})(jQuery);