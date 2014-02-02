/* 
 * Code.js
 * Copyright Jacob Kelley
 * MIT License
 *
 * Seems like you've stumbled on my code.js
 * Feel free to copy this code if you want.
 *
 * Adds a link which when clicked, shows a dropdown
 * list of anything you want. Script writes anchor
 * to the DOM for ease of use. Link hover color
 * defined in data-color. ID of codejs is req
 * for color to work. Update your own code.js
 * script to globally update your code list on your
 * sites.
 *
 * scriptsDropup.create has 3 param
 * 1. InnerHTML of link, 2. Array of arrays[Link innerHTML, href], 3. color
 *
 * Usage
 * 
 * <script type="text/javascript" src="code.js" data-color="#ddd" id="codejs"></script>
 *
 */

var scriptsDropup=scriptsDropup||(function(){function appendStyles(a){var b=a.dataset['hovercolor']?a.dataset['hovercolor']:'#08C',css='#scripts{position:relative;z-index:9999;}.scripts-list{text-align:left;min-width:160px;margin:0;padding:0;display:none;position:absolute;top:0px;left:105%;list-style-type:none;border:1px solid rgba(0,0,0,0.2);background:#fefefe;padding-top:5px;padding-bottom:5px;-webkit-box-shadow:0 5px 10px rgba(0,0,0,0.2);-moz-box-shadow:0 5px 10px rgba(0,0,0,0.2);box-shadow:0 5px 10px rgba(0,0,0,0.2);}.scripts-list a{text-shadow:none;font-family:HelveticaNeue-Light, "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;text-decoration:none;display:block;clear:both;font-weight:normal;line-height:20px;color:#333;white-space:nowrap;padding:3px 20px;}.scripts-list a:hover{background:'+b+';}',head=document.getElementsByTagName('head')[0],style=document.createElement('style');style.type='text/css';if(style.styleSheet){style.styleSheet.cssText=css}else{style.appendChild(document.createTextNode(css))}head.appendChild(style)}function toggleList(e){e.stopPropagation();var l=document.getElementById('scripts-list');if(l.style.display=="block"){l.style.display="none"}else{l.style.display="block"}}function buildMenu(a,b){var i,data='',ul=document.createElement('ul');ul.className="scripts-list";ul.id='scripts-list';for(i in b){data+='<li><a href="'+b[i][1]+'" target="_blank">'+b[i][0]+'</a></li>'}ul.innerHTML=data;a.style.position='relative';a.appendChild(ul);a.addEventListener('click',toggleList)}function init(a,b,c){var d='<a href="javascript:;" id="scripts" data-hovercolor="'+c+'">'+a+'</a>';document.write(d);d=document.getElementById('scripts');appendStyles(d);buildMenu(d,b)}return{create:init}})();

scriptsDropup.create('More Code by @jakiestfu', [
    ['Sparky.js', 'http://sparkyjs.com'],
    ['Slow.js', 'http://lab.jakiestfu.com/slowjs/'],
    ['Blur.js V2', 'http://jakiestfu.com/2012/10/01/blurjs-take-ii/'],
    ['Context.js', 'http://contextjs.com/'],
    ['Blur.js', 'http://blurjs.com/'],
    ['Docs.js', 'http://docsjs.com/'],
    ['Code.js', 'http://lab.jakiestfu.com/code.js']
], document.getElementById('codejs').dataset['color']);