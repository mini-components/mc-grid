(function($ng) {
  'use strict';

  class GridDirective extends $ng.Directive {
    static module = 'mc.grid';
    static tagName = 'grid';

    restrict = 'E';
    transclude = true;
    templateUrl = 'templates/grid.html';
  }


  $ng.register(GridDirective);
})(window.$ng);
