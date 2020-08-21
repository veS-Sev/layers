var $layers = $('div[data-role="layer"]'),
    $panel = $('#panel'),
    
    panel = '';

$(window).on('scroll', function(e) {
  panel = '';
  panel += 'scrollTop: ' + $(window).scrollTop()
  
  $layers.each(function(i) {
    var $layer = $(this),
        coef = $layer.data('coef'),
        scroll = $(window).scrollTop();
    
    panel += '<br>layer scroll: ' + scroll + ' * ' + coef + ' = ' + (scroll * coef);
    
    $layer.css('background-position' , '0px -' + (scroll * coef) + 'px');
  });
  
  $panel.html(panel);
});