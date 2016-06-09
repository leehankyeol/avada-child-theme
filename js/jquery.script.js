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

		var $fusionMobileSelector = $('.fusion-mobile-selector'),
			$fusionMobileNavHolder = $('.fusion-mobile-nav-holder');

		// Avada's avada-header.js and all those js management are f***ed up...
		setTimeout(function() {
			$fusionMobileSelector.find('span').remove();

			var $searchList = $('<li/>', {
				class: 'fusion-mobile-nav-item'
			});
			$searchList.html($('<form/>', {
				role: 'search',
				class: 'searchform',
				method: 'get',
				action: 'http://jjambong.com/',
				html: '<div class="search-table"><div class="search-field">'
				 + '<input type="text" value="" name="s" class="s" placeholder="검색..."></div>'
				 + '<div class="search-button"><input type="submit" class="searchsubmit" value=""></div></div>'
				 + '<input type="hidden" name="lang" value="en">'
			}));
			
			$fusionMobileNavHolder.find('ul.fusion-menu').append($searchList);
		}, 300);


	});
})(jQuery);