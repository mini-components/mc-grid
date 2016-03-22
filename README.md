# mc-grid

This is a simple grid directive implemented with Angular.js that makes it really easy to build dashboard-like interfaces in just seconds.

### Requirements
This library depends on:

- [objective-ng](https://github.com/ngonzalvez/objective-ng)

## Example
~~~html
<grid>
	<grid-box>First panel</grid-box>
	<grid-box span="2">Second panel</grid-box>
	<grid-box>Third panel</grid-box>
	<grid-box>Fourth panel</grid-box>
	<grid-box>Fifth Panel</grid-box>
</grid>
~~~

## Tags

#### grid

Attribute 	| Value 	| Description
----------|-----------|---------------------------------------------------
columns   	| Number	| The number of columns the grid will have


#### grid-box

Attribute | Value 	 | Description
----------|-----------|---------------------------------------------------
span	   | Number	 | The with of the grid element measured in columns.