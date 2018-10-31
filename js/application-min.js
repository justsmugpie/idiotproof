var font=null,fontFormats={truetype:"ttf",opentype:"otf"},json="js/proof.json",utc=(new Date).toJSON().slice(0,10).replace(/-/g,"/"),utcNoSlash=(new Date).toJSON().slice(0,10).replace(/-/g,"");function toggleClass(e,t){document.getElementById(e).classList.toggle(t)}function preserveUnique(e){for(var t={},a=[],n=e.length,o=0,s=0;s<n;s++){var l=e[s];1!==t[l]&&(t[l]=1,a[o++]=l)}return a}function showErrorMessage(e){var t=document.getElementById("message");e&&0!==e.trim().length?t.style.display="block":t.style.display="none",t.innerHTML=e}function uint8ToBase64(e){for(var t="",a=e.byteLength,n=0;n<a;n++)t+=String.fromCharCode(e[n]);return window.btoa(t)}function localStorageClear(){localStorage.clear(),location.reload()}function whichFontSize(e){if("t__size-xxl"===e)return"140";if("t__size-xl"===e)return"100";if("t__size-l"===e)return"84";if("t__size-m"===e)return"56";if("t__size-s"===e)return"28";if("t__size-xs"===e)return"14";var t=e.length;return t<25?"t__size-xxl":t<50?"t__size-xl":t<95?"t__size-l":t<200?"t__size-m":t<1e3?"t__size-s":"t__size-xs"}function removeElementsByClass(e){for(var t=document.getElementsByClassName(e);0<t.length;)t[0].parentNode.removeChild(t[0])}function removeElementsByID(e){document.getElementById(e).outerHTML=""}function saveData(e,t){"undefined"!=typeof Storage&&localStorage.setItem(e,t)}function setStage(d){var v=document.getElementById("section__article-app"),p=document.getElementById("section__header-stage-buttons"),_="",h="",y="",b="";$.getJSON(json,function(e){for(stage in e){if(stage===d){var t=function(){if(font.tables.fvar){var e=[];for(var t in font.tables.fvar.axes){var a=font.tables.fvar.axes[t].tag;e.push(a)}for(var n in b+="font-variation-settings:",font.tables.fvar.axes){var o=font.tables.fvar.axes[n].minValue,s=font.tables.fvar.axes[n].maxValue,l=(a=font.tables.fvar.axes[n].tag,font.tables.fvar.axes[n].name.en);if(console.log(r+"-slider-"+a+"-val"),localStorage.getItem(r+"-slider-"+a+"-val")){var i=localStorage.getItem(r+"-slider-"+a+"-val");b+="'"+a+"' "+i+" "}else i=font.tables.fvar.axes[n].defaultValue;_+='<label for="'+f+"-"+a+'">'+l+" </label>",_+='<span id="'+f+"-"+a+'-val">'+i+"</span>",_+="<button onclick=\"animatefvarValue('"+r+"', '"+a+"', '"+i+"', '"+o+"', '"+s+"', '"+e+'\')" class="btn">ease</button>',_+='<input id="'+f+"-"+a+'" type="range" class="slider" min="'+o+'" max="'+s+'" value="'+i+'" oninput="passfvarValue(\''+r+"', '"+a+"', this.value, '"+e+"')\">",n!=font.tables.fvar.axes.length-1&&(b+=", ")}b+=";"}};_="",gsubFeatures=font.tables.gsub.features;var a=[];for(var n in gsubFeatures)if("aalt"!==gsubFeatures[n].tag){var o=gsubFeatures[n].tag;a.push(o)}for(var s in a=preserveUnique(a),e[stage])if("Features"!==stage||a.includes(s)){var l=whichFontSize(e[stage][s]),r="section__proofing-"+s,f=r+"-slider",i="item--"+s,c="";if(localStorage.getItem(f+"-fontSize-val"))c+="font-size: "+(g=localStorage.getItem(f+"-fontSize-val"))+"px;";else var g=whichFontSize(l);if(localStorage.getItem(f+"-lineHeight-val")){var u=localStorage.getItem(f+"-lineHeight-val");c+="line-height: "+u+";"}if(localStorage.getItem(f+"-letterSpacing-val")){var m=localStorage.getItem(f+"-letterSpacing-val");c+="letter-spacing: "+m+"em;"}if(_+='<div id="'+i+'" class="item u__flex">',_+='<div class="item__sliders"><div class="item__sliders-wrapper">',_+='<label for="'+f+'-fontSize">Font Size </label><span id="'+f+'-fontSize-val">'+g+'</span><input id="'+f+'-fontSize" type="range" class="slider" min="4" max="160" step="2" value="'+g+'" oninput="passStyleValue(\''+r+"', 'fontSize', this.value)\">",_+='<label for="'+f+'-lineHeight">Line Height </label><span id="'+f+'-lineHeight-val">'+u+'</span><input id="'+f+'-lineHeight" type="range" class="slider" min="0.6" max="5.0" step="0.05" value="'+u+'" oninput="passStyleValue(\''+r+"', 'lineHeight', this.value)\">",_+='<label for="'+f+'-letterSpacing">Letter Spacing </label><span id="'+f+'-letterSpacing-val">'+m+'</span><input id="'+f+'-letterSpacing" type="range" class="slider" min="-0.4" max="0.4" step="0.01" value="'+m+'" oninput="passStyleValue(\''+r+"', 'letterSpacing', this.value)\">",t(),_+='<div class="u__flex btn__wrapper">',_+='<div class="add-item-above"><button class="btn" onclick="insertField(\''+i+"')\">+</button></div>",_+='<div class="remove-item-this"><button class="btn" onclick="removeElementsByID(\''+i+"')\">-</button></div>","Features"===stage&&(_+='<div class="turn-off-feature"><button class="btn" title="Turn on and off feature preview" onclick="toggleClass(\''+r+"', '"+r+"')\">♫&#xFE0E;</button></div>"),_+='<div class="turn-off-feature"><button class="btn" onclick="passStyleValue(\''+r+"','textTransform', 'uppercase')\">TT</button></div>",_+='<div class="turn-off-feature"><button class="btn" onclick="passStyleValue(\''+r+"','textTransform', 'capitalize')\">Tt</button></div>",_+='<div class="turn-off-feature"><button class="btn" onclick="passStyleValue(\''+r+"','textTransform', 'lowercase')\">tt</button></div>",_+="</div>",_+="</div>",_+="</div>",_+='<div class="item__proof">',"Features"===stage){y+="."+r+' { font-feature-settings: "'+s+'" 1;}';l=whichFontSize(e[stage][s].sample);_+='<h3 class="h3">'+s+' <span class="tooltip tooltip__features">'+e[stage][s].definition+"</span></h3>",_+='<textarea id="'+r+'" style="'+c+" "+b+'" class="t__importedfontfamily '+l+' testarea" contenteditable="true" onkeyup="saveData(\''+r+"', this.value)\">",localStorage.getItem(r)?_+=localStorage.getItem(r):_+=e[stage][s].sample}else _+='<h3 class="h3">'+s+"</h3>",_+='<textarea id="'+r+'" style="'+c+" "+b+'" class="t__importedfontfamily '+l+' testarea" contentEditable="true" onkeyup="saveData(\''+r+"', this.value)\">",localStorage.getItem(r)?_+=localStorage.getItem(r):_+=e[stage][s];_+="</textarea>",_+="</div>",_+="</div>"}}""===_&&(console.log(_),_+='<div class="item u__flex t__center"><div class="item__proof">No features found! :...(</div></div>'),stage===d?h+='<button class="tab active tab__setstage" onclick="setStage(\''+stage+"')\">"+stage+"</button>":h+='<button class="tab tab__setstage" onclick="setStage(\''+stage+"')\">"+stage+"</button>"}p.innerHTML=h,v.innerHTML=_,$("#style__opentype-features").html(y)}),saveData("proofingPhase",d)}var fieldcount=0;function insertField(e){fieldcount+=1,console.log(e);var t=jQuery("#"+e).clone(),a=t.attr("id");console.log(a),a=a.replace("item--",""),console.log(a),t.html().replace(a,fieldcount),t.children("textarea").text("eff yeah"),$("#"+e).parent().prepend(t)}function passStyleValue(e,t,a){"fontSize"===t||"lineHeight"===t||"letterSpacing"===t?(saveData(e+"-slider-"+t+"-val",document.getElementById(e+"-slider-"+t+"-val").innerHTML=a),"fontSize"===t?a+="px":"letterSpacing"===t&&(a+="em")):saveData(e+t,a),document.getElementById(e).style[t]=a}function passfvarValue(e,t,a,n){saveData(e+"-slider-"+t+"-val",document.getElementById(e+"-slider-"+t+"-val").innerHTML=a),Array.isArray(n)||(n=n.split(","));var o="";if(1==n.length)o+="'"+t+"' "+a+" ";else for(f=0;f<n.length;f++){if(t==n[f])o+="'"+t+"' "+a;else{var s=document.getElementById(e+"-slider-"+n[f]).value;o+="'"+String(n[f])+"' "+s}f!=n.length-1&&(o+=", ")}$("#"+e).css("font-variation-settings",o)}var isAnimating=null;function animatefvarValue(e,t,a,n,o,s){document.getElementById(e+"-slider-"+t+"-val").value=a;var l="",i=null;if(null!==isAnimating)$("#style__fvar-animation").html(""),isAnimating=null;else{i=function(e,t){CSSRule.WEBKIT_KEYFRAMES_RULE?l+="@-webkit-keyframes "+e+" {"+t+"}":CSSRule.MOZ_KEYFRAMES_RULE?l+="@-moz-keyframes "+e+" {"+t+"}":CSSRule.KEYFRAMES_RULE&&(l+="@keyframes "+e+" {"+t+"}")},Array.isArray(s)||(s=s.split(","));var r="";if(1==s.length)i(t+"infinite",'0%, 100% {font-variation-settings:"'+t+'" '+a+';}25% {font-variation-settings:"'+t+'" '+n+';}50% {font-variation-settings:"'+t+'" '+o+";}");else{for(f=0;f<s.length;f++)if(t!==s[f]){var c=document.getElementById(e+"-slider-"+s[f]).value;r+="'"+String(s[f])+"' "+c+","}i(t+"infinite",'0%, 100% {font-variation-settings:"'+t+'" '+a+", "+(r=r.substring(0,r.length-1))+';}25% {font-variation-settings:"'+t+'" '+n+", "+r+';}50% {font-variation-settings:"'+t+'" '+o+", "+r+";}")}$("#style__fvar-animation").html(l),$("#"+e).css("font-variation-settings","unset").css("animation",t+"infinite 4s ease-in-out infinite"),isAnimating=!0}}function displayFontData(e){var t,a="";for(t in font.tables){if(font.tables[t],"cmap"===t){var n=font.tables.cmap.glyphIndexMap,o=Object.keys(n).length;window.proofingPhase=o<=100?"HAMB":400<=o?"DIAC":"OHNO"}var s=font.outlinesFormat;if(s=fontFormats[s],"name"!==t);else{if(nameHtml="",font.names.designer)var l=font.names.designer.en;else l="Designer Name";if(font.names.postScriptName)var i=font.names.postScriptName.en;else i="Font Name";nameHtml+='<h6 class="h6 section__header-name u__flex-grow-1 t__left" contenteditable="true">'+l+"</h6>",nameHtml+='<h6 class="h6 section__header-name u__flex-grow-1 t__center" contenteditable="true">'+i+"</h6>",a+='.t__importedfontfamily { font-family: "'+e+'" }',nameHtml+='<h6 class="h6 section__header-name  u__flex-grow-1 t__right">'+utc+"</h6>",document.getElementById("section__header-names").innerHTML=nameHtml}}$("#style__fontfamily").html(a),localStorage.getItem("proofingPhase")?setStage(localStorage.getItem("proofingPhase")):setStage(window.proofingPhase)}function onFontLoaded(e,t,a){window.font=e;var n=[];n.push(e),window.URL.createObjectURL(new Blob(n,{type:"application/zip"})),displayFontData(window.fontFamily=a),"localhost"!==location.hostname&&"127.0.0.1"!==location.hostname&&""!==location.hostname||(localStorage.setItem("fontFamily",a),localStorage.setItem("fontFamilySource",t))}function onReadFile(e){var t=e.target.files[0],a=new FileReader;a.onload=function(e){try{var t=opentype.parse(e.target.result),a=t.names.postScriptName.en;onFontLoaded(t,"fonts/"+t.names.postScriptName.en,a),t.file={name:e.name,lastModified:e.lastModified,size:e.size,type:e.type},t.type="user:local";var n=new Uint8Array(e.target.result);$("#style__fontface").html("@font-face {font-family:'"+window.fontFamily+"'; src: url('data:;base64,"+uint8ToBase64(n)+"') format('truetype');} "),showErrorMessage("")}catch(e){throw showErrorMessage(e.toString()),e.stack&&console.log(e.stack),e}},a.onerror=function(e){showErrorMessage(e.toString())},a.readAsArrayBuffer(t)}function setFont(a,n){opentype.load(a,function(e,t){onFontLoaded(t,a,n)})}window.onload=function(){var r=document.getElementById("section__header-file-buttons");if("localhost"===location.hostname||"127.0.0.1"===location.hostname||""===location.hostname){document.getElementById("section__header-file-buttons").innerHTML="Place fonts you want to proof into <code>/fonts</code> to begin";var f="",c="",g="";$.get("../txt/fonts.txt",{},function(e){g=e.split("fonts/");for(var t,a=[],n=0;n<g.length;n++)""!=g[n]&&(thisFont=g[n].trim(),a.push(thisFont));preserveUnique(a);for(n=0;n<a.length;n++){var o=a[n],s=o.replace(".","-");f+='<button class="btn btn__setfont" title="'+o+'" id="btn__setfont-'+s+'" onclick="setFont(\'fonts/'+o+"', '"+s+"')\">"+o+"</button>",c+='@font-face { font-family: "'+s+'"; src: url("fonts/'+o+'");}'}if(r.innerHTML=f,localStorage.getItem("fontFamilySource"))var l=localStorage.getItem("fontFamilySource"),i=localStorage.getItem("fontFamily");else l="fonts/"+a[a.length-1],i=s;for(setFont(l,i),document.getElementById("btn__setfont-"+i).classList.add("active"),$("#style__fontface").append(c),console.log("local storage"),t=0;t<localStorage.length;t++)console.log(localStorage.key(t)+"=["+localStorage.getItem(localStorage.key(t))+"]")},"text")}else{setFont("fonts/gooper-VF.ttf","gooper-VF-ttf"),$("#style__fontface").html('@font-face { font-family: "gooper-VF-ttf"; src: url("fonts/gooper-VF.ttf");}'),r.innerHTML='<input id="fontInput" type="file"><div id="message"></div>',document.getElementById("fontInput").addEventListener("change",onReadFile,!1)}$("#section__header-file-buttons").on("click",".btn__setfont",function(){$(this).addClass("active").siblings().removeClass("active")}),$("#section__header-stage-buttons").on("click",".btn__setstage",function(){$(this).addClass("active").siblings().removeClass("active")}),$("#btn__view-tools-toggle").on("click",function(e){$(".body__idiotproofed").toggleClass("tools-visible")}),document.body.className+=" loaded"};