(function($ng) {
  'use strict';


  class GridBoxDirective extends $ng.Directive {
    static module = 'mc.grid';
    static tagName = 'gridBox';

    restrict = 'E';
    transclude = true;
    templateUrl = 'templates/grid-box.html';
    scope = {
      span: '='
    };
  }


  $ng.register(GridBoxDirective);
})(window.$ng);
