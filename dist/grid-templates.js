angular.module("mc.grid").run(['$templateCache', function(a) { a.put('templates/grid.html', '<section\n' +
    '    class="grid"\n' +
    '    ng-transclude>\n' +
    '</section>\n' +
    '');
	a.put('templates/grid-box.html', '<div\n' +
    '    class="grid-box-{{span}}x"\n' +
    '    ng-transclude>\n' +
    '</div>\n' +
    '');
	 }]);