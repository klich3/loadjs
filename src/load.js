/**
 * 211 dev Anthony Sychov (belyaev at dm211 dot com)
 *
 *
 * loadJS function.
 * 
 * @access public
 * @param mixed cnf (Object)
 * @return void
 *
 * Exsample to use:
 
 	<script type="text/javascript">
		var jsToLoad = {
			path:'js/',
			items:['jquery-1.11.1.js', 'jquery.uilang.js']
		};
	</script>
	<script type="text/javascript" src="js/load.js"></script>
 
 */

(function()
{
	window.loadJS = function(cnf)
	{
		if(cnf.items.length == 0) 
		{
			console.log('[loadJS] no files to load');
			return;
		}
		
		this.queue_script = cnf.items;
		
		this.asyncLoad = function()
		{
			var that = this,
				file = this.queue_script.shift(),
				ref = window.document.getElementsByTagName("script")[0],
				script = window.document.createElement("script");
				
			//break loop when array is empty
			if(file == undefined) return;
			
			script.src = cnf.path+file;
			script.async = true;
			script.type = "text/javascript";
			
			script.onload = function()
			{ 
				that.asyncLoad(); 
			};
			
			script.onreadystatechange = function()
			{
				var state = this.readyState;
		        if (state === 'loaded' || state === 'complete') 
		        {
		            script.onreadystatechange = null;
					that.asyncLoad(); 
		        }
			}
			
			//add to stage
			ref.parentNode.insertBefore(script, ref);
			
			return this;
		};
		
		this.asyncLoad();
	};
	
	//Auto Initi
	if(jsToLoad.items.length !== 0) window.loadJS(jsToLoad);
})();