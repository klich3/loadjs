loadJS
======

A simple function for asynchronously loading JavaScript files with possibility of callback function

## Usage

Place the [`loadJS` function] inline in the `head` of your page (it can also be included in an external JavaScript file if preferable).

Then call it by passing it a JavaScript URL:

``` html
<head>
...

<script type="text/javascript">
	var jsToLoad = {
		path:'js/', //path to js folder
		items:[
		{
			file:'jquery-1.11.1.js' //file to load
		}, {
			file:'jquery.uilang.js',
			callback:function(){
				//callback function
				console.log('callback');
			}
		}]
	};
</script>
<script type="text/javascript" src="load.js"></script>

...
</head>
```