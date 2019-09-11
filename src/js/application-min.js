var font=null;window.proofingPhase="Hamburgers";var fontFormats={truetype:"ttf",opentype:"otf"},json="src/js/proof.json",utc=(new Date).toJSON().slice(0,10).replace(/-/g,"/"),utcNoSlash=(new Date).toJSON().slice(0,10).replace(/-/g,"");function toggleClass(e,t){$("#"+e+" .testarea").toggleClass(t)}function preserveUnique(e){for(var t={},a=[],n=e.length,s=0,l=0;l<n;l++){var i=e[l];1!==t[i]&&(t[i]=1,a[s++]=i)}return a}function showErrorMessage(e){var t=document.getElementById("message");e&&0!==e.trim().length?t.style.display="block":t.style.display="none",t.innerHTML=e}function uint8ToBase64(e){for(var t="",a=e.byteLength,n=0;n<a;n++)t+=String.fromCharCode(e[n]);return window.btoa(t)}function localStorageClear(){localStorage.clear(),localStorage.setItem("proofingPhase","Hamburgers"),location.reload()}function whichFontSize(e){if("t__size-xxl"===e)return"140";if("t__size-xl"===e)return"100";if("t__size-l"===e)return"84";if("t__size-m"===e)return"56";if("t__size-s"===e)return"28";if("t__size-xs"===e)return"14";var t=e.length;return t<25?"t__size-xxl":t<50?"t__size-xl":t<95?"t__size-l":t<200?"t__size-m":t<1e3?"t__size-s":"t__size-xs"}function removeElementsByClass(e){for(var t=document.getElementsByClassName(e);0<t.length;)t[0].parentNode.removeChild(t[0])}function removeElementsByID(e){var t=$("#"+e);t.slideUp("slow",function(){t.remove()})}function saveData(e,t){if("undefined"!=typeof Storage)if("thisContent"!==t)localStorage.setItem(e,t);else{var a=$("#"+e).text();localStorage.setItem(e,a)}}function setStage(v){var h=document.getElementById("section__article-app"),_=document.getElementById("section__header-stage-buttons"),b="",y="",S="";$.getJSON(json,function(e){for(stage in e){if(stage===v){var a=function(){if(font.tables.fvar){var e=[];for(var t in font.tables.fvar.axes){var a=font.tables.fvar.axes[t].tag;e.push(a)}for(var n in S+="font-variation-settings:",font.tables.fvar.axes){var s=font.tables.fvar.axes[n].minValue,l=font.tables.fvar.axes[n].maxValue,i=(a=font.tables.fvar.axes[n].tag,font.tables.fvar.axes[n].name.en);if(localStorage.getItem(c+"-slider-"+a+"-val")){var o=localStorage.getItem(c+"-slider-"+a+"-val");S+="'"+a+"' "+o+" "}else{o=font.tables.fvar.axes[n].defaultValue;S+="'"+a+"' "+o+" "}b+='<label for="'+f+"-"+a+'">'+i+" </label>",b+='<span class="t__right" id="'+f+"-"+a+'-val">'+o+"</span>",b+='<input id="'+f+"-"+a+'" type="range" class="slider" min="'+s+'" max="'+l+'" value="'+o+'" oninput="passfvarValue(\''+c+"', '"+a+"', this.value, '"+e+"')\">",n!=font.tables.fvar.axes.length-1&&(S+=", ")}S+=";"}};b="",gsubFeatures=font.tables.gsub.features;var n=[];for(var s in gsubFeatures){var l=gsubFeatures[s].tag;null!=e.Features[l]&&n.push(l)}for(var i in n=preserveUnique(n),e[stage])if("Features"!==stage||n.includes(i)){var o=whichFontSize(e[stage][i]),r="section__proofing-"+i,c="item--"+i,f=c+"-slider",m="";if(localStorage.getItem(f+"-fontSize-val"))m+="font-size: "+(u=localStorage.getItem(f+"-fontSize-val"))+"pt;";else var u=whichFontSize(o);if(localStorage.getItem(f+"-lineHeight-val")){m+="line-height: "+(p=localStorage.getItem(f+"-lineHeight-val"))+";"}else{var p="1.2";m+="line-height: 1.2;"}if(localStorage.getItem(f+"-letterSpacing-val")){m+="letter-spacing: "+(g=localStorage.getItem(f+"-letterSpacing-val"))+"em;"}else{var g="0em";m+="letter-spacing: 0em;"}for(b+='<div id="'+c+'" class="item">',b+='<button class="btn btn-link add-item-above chip" onclick="insertField(\''+c+"')\">+ Add Proof Window</button>",b+='<div class="u__flex">',b+='<div class="item__sliders mr-6 pt-2"><div class="item__sliders-wrapper">',b+='<label for="'+f+'-fontSize">Font Size </label><span class="t__right" id="'+f+'-fontSize-val">'+u+'pt</span><input id="'+f+'-fontSize" type="range" class="slider" min="4" max="160" step="2" value="'+u+'" oninput="passStyleValue(\''+c+"', 'fontSize', this.value)\">",b+='<label for="'+f+'-lineHeight">Line Height </label><span class="t__right" id="'+f+'-lineHeight-val">'+p+'</span><input id="'+f+'-lineHeight" type="range" class="slider" min="0.6" max="3.0" step="0.01" value="'+p+'" oninput="passStyleValue(\''+c+"', 'lineHeight', this.value)\">",b+='<label for="'+f+'-letterSpacing">Letter Spacing </label><span class="t__right" id="'+f+'-letterSpacing-val">'+g+'</span><input id="'+f+'-letterSpacing" type="range" class="slider" min="-0.4" max="0.4" step="0.01" value="'+g+'" oninput="passStyleValue(\''+c+"', 'letterSpacing', this.value)\">",a(),b+='<div id="btn__wrapper-case" class="u__flex btn__wrapper">',b+='<button class="btn btn-link textTransform-uppercase mr-1 mb-1" title="Uppercase" onclick="passStyleValue(\''+c+"','textTransform', 'uppercase')\">TT</button>",b+='<button class="btn btn-link textTransform-capitalize mr-1 mb-1" title="Capitalize" onclick="passStyleValue(\''+c+"','textTransform', 'capitalize')\">Tt</button>",b+='<button class="btn btn-link textTransform-lowercase mr-1 mb-1" title="Lowercase" onclick="passStyleValue(\''+c+"','textTransform', 'lowercase')\">tt</button>",b+="</div>",b+='<div id="btn__wrapper-columns" class="u__flex btn__wrapper">',b+='<button class="btn btn-link column-count-1 mr-1 mb-1" title="1 column layout" onclick="passStyleValue(\''+c+"','column-count', '1')\">☱</button>",b+='<button class="btn btn-link column-count-2 mr-1 mb-1" title="2 column layout" onclick="passStyleValue(\''+c+"','column-count', '2')\">☷</button>",b+='<button class="btn btn-link column-count-3 mr-1 mb-1" title="3 column layout" onclick="passStyleValue(\''+c+"','column-count', '3')\">☵</button>",b+="</div>",b+='<div class="btn__wrapper t_left mt-3">',t=0;t<n.length;t++){l=n[t];var d=e.Features[l].abstract;b+='<div class="btn__setfont mt-1 d-block">',b+='<input id="'+c+"-checkbox-"+l+'" type="checkbox" name="" onclick="passfeatValue(\''+c+"', '"+l+"', '"+n+"')\"> ",b+=d+'<span class="float-right">'+l+"</span></div>"}if(b+="</div>",b+='<button class="btn btn-secondary mr-1 mb-1 mt-6" title="Applies styles above to all text fields currently visable." onclick="passStyleValue(\''+c+"','idiocracy','global')\">Global Idiocracy</button>",b+="</div>",b+="</div>",b+='<div class="item__proof">',b+='<button class="btn btn-link remove-item-this" onclick="removeElementsByID(\''+c+"')\">×</button>","Features"===stage){o=whichFontSize(e[stage][i].sample);b+='<h6 class="h6" title="'+e[stage][i].definition+'" contentEditable="true" onkeyup="saveData(\''+r+"-title', 'thisContent')\">"+i+'</h6><span class="testarea-values small"> <span class="fontSize">fontSize: '+u+'pt</span> <span class="lineHeight">lineHeight: '+p+'</span> <span class="letterSpacing">letterSpacing: '+g+"</span></span>",b+='<div id="'+r+'" style="'+m+" "+S+'" class="t__importedfontfamily '+o+' testarea" contenteditable="true" spellcheck="false" onkeyup="saveData(\''+r+"', 'thisContent')\">",localStorage.getItem(r)?b+=localStorage.getItem(r):b+=e[stage][i].sample}else b+='<h6 contentEditable="true" onkeyup="saveData(\''+r+"-title', 'thisContent')\">"+i+'</h6><span class="testarea-values small"> <span class="fontSize">fontSize: '+u+'pt</span> <span class="lineHeight">lineHeight: '+p+'</span> <span class="letterSpacing">letterSpacing: '+g+"</span></span>",b+='<div id="'+r+'" style="'+m+" "+S+'" class="t__importedfontfamily '+o+' testarea" contentEditable="true" spellcheck="false" onkeyup="saveData(\''+r+"', 'thisContent')\">",localStorage.getItem(r)?b+=localStorage.getItem(r):b+=e[stage][i];b+="</div>",b+="</div>",b+="</div>",b+="</div>"}}""===b&&(b+='<div class="item u__flex t__center"><div class="item__proof">No features found! :...(</div></div>'),stage===v?y+='<li class="tab-item active tab__setstage" onclick="setStage(\''+stage+'\')"><a class="#">'+stage+"</a></li>":y+='<li class="tab-item tab__setstage" onclick="setStage(\''+stage+'\')"><a class="#">'+stage+"</a></li>"}_.innerHTML=y,h.innerHTML=b,$("#style__opentype-features").html("")}),saveData("proofingPhase",v)}function insertField(e){var t=jQuery("#"+e).clone();$("#"+e).prepend(t);var a=t.height();t.css("height","auto"),t.css("height","0px").animate({height:a},600)}function passStyleValue(e,t,a){if("fontSize"===t||"lineHeight"===t||"letterSpacing"===t?(saveData(e+"-slider-"+t+"-val",a),"fontSize"===t?a+="pt":"letterSpacing"===t&&(a+="em"),document.getElementById(e+"-slider-"+t+"-val").innerHTML=a):saveData(e+t,a),"idiocracy"===t){var n=$("#"+e+" .testarea").attr("style");$(".testarea").attr("style",n)}else $("#"+e+" .testarea").css(t,a);if($("#"+e+" .testarea-values").has("."+t).length)$("#"+e+" .testarea-values ."+t).html(" "+t+": "+a);else{var s="<span class='"+t+"'> "+t+": "+a+"</span>";$("#"+e+" .testarea-values").append(s)}$(".btn."+t+"-"+a).addClass("active").siblings(".btn").removeClass("active")}function passfvarValue(e,t,a,n){saveData(e+"-slider-"+t+"-val",document.getElementById(e+"-slider-"+t+"-val").innerHTML=a),Array.isArray(n)||(n=n.split(","));var s="";if(1==n.length)s+="'"+t+"' "+a+" ";else for(f=0;f<n.length;f++){if(t==n[f])s+="'"+t+"' "+a;else{var l=document.getElementById(e+"-slider-"+n[f]).value;s+="'"+String(n[f])+"' "+l}f!=n.length-1&&(s+=", ")}if($("#"+e+" .testarea").css("font-variation-settings",s),$("#"+e+" .testarea-values").has(".fvar").length)$("#"+e+" .testarea-values .fvar").html(s);else{var i="<span class='fvar'>"+s+"</span>";$("#"+e+" .testarea-values").append(i)}}function passfeatValue(e,t,a){var n=a.split(","),s="";for(f=0;f<n.length;f++)document.getElementById(e+"-checkbox-"+n[f]).checked&&(s+="'"+n[f]+"',");s=s.replace(/,\s*$/,""),$("#"+e+" .testarea").css("font-feature-settings",s)}function displayFontData(e){var t,a="";for(t in font.tables){if(font.tables[t],"cmap"===t){var n=font.tables.cmap.glyphIndexMap,s=Object.keys(n).length;window.proofingPhase=s<=100?"Hamburgers":400<=s?"Diacritics":"Spacing"}var l=font.outlinesFormat;if(l=fontFormats[l],"name"!==t);else{if(nameHtml="",font.names.designer)var i=font.names.designer.en;else i="No Designer Name :(";if(font.names.postScriptName)var o=font.names.postScriptName.en;else o="Font Name";nameHtml+='<h6 class="h6 section__header-name u__flex-grow-1 t__left" contenteditable="true" spellcheck="false">'+i+"</h6>",nameHtml+='<a class="off-canvas-toggle h6 section__header-name u__flex-grow-1 t__center p-sticky" href="#sidebar-demo" spellcheck="false">'+o+"</a>",a+='.t__importedfontfamily { font-family: "'+e+'" }',nameHtml+='<h6 class="h6 section__header-name  u__flex-grow-1 t__right">'+utc+"</h6>",document.getElementById("section__header-names").innerHTML=nameHtml}}$("#style__fontfamily").html(a),localStorage.getItem("proofingPhase")?setStage(localStorage.getItem("proofingPhase")):setStage(window.proofingPhase)}function onFontLoaded(e,t,a){window.font=e;var n=[];n.push(e),window.URL.createObjectURL(new Blob(n,{type:"application/zip"})),displayFontData(window.fontFamily=a),"localhost"!==location.hostname&&"127.0.0.1"!==location.hostname&&""!==location.hostname||(localStorage.setItem("fontFamily",a),localStorage.setItem("fontFamilySource",t))}function onReadFile(e){var t=e.target.files[0],a=e.target.files;if(1<e.target.files.length)for(var n=0;n<e.target.files.length;n++){var s,l=a[n];(s=new FileReader).onload=function(e){new DataView(e.target.result);var t=opentype.parse(e.target.result);t.file={name:e.name,lastModified:e.lastModified,size:e.size,type:e.type},t.type="upload",t.fontFamily=t.names.postScriptName.en,t.menuName=t.fontFamily;var a=new Uint8Array(e.target.result);$("#style__fontface").append("@font-face {font-family:'"+t.fontFamily+"'; src: url('data:;base64,"+uint8ToBase64(a)+"') format('truetype');} "),$("#section__header-file-buttons").append('<span class="btn__setfont chip d-block" title="'+t.fontFamily+'" id="btn__setfont-'+t.fontFamily+'" onclick="setFont(\'data:;base64,'+uint8ToBase64(a)+"', '"+t.fontFamily+"')\">"+t.fontFamily+"</span>")},s.readAsArrayBuffer(l)}else(s=new FileReader).onload=function(e){try{var t=opentype.parse(e.target.result),a=t.names.postScriptName.en;onFontLoaded(t,"fonts/"+t.names.postScriptName.en,a),t.file={name:e.name,lastModified:e.lastModified,size:e.size,type:e.type},t.type="user:local";var n=new Uint8Array(e.target.result);$("#style__fontface").html("@font-face {font-family:'"+window.fontFamily+"';  src: url('data:;base64,"+uint8ToBase64(n)+"') format('truetype');} "),showErrorMessage("")}catch(e){throw showErrorMessage(e.toString()),e.stack&&console.log(e.stack),e}},s.onerror=function(e){showErrorMessage(e.toString())},s.readAsArrayBuffer(t)}function setFont(a,n){opentype.load(a,function(e,t){onFontLoaded(t,a,n)})}function serverLoad(){var e=document.getElementById("section__header-file-buttons");setFont("fonts/gooper-VF.ttf","gooper-VF-ttf"),$("#style__fontface").html('@font-face { font-family: "gooper-VF-ttf"; src: url("fonts/gooper-VF.ttf");}');e.innerHTML='<form class="box has-advanced-upload" method="post" action="" enctype="multipart/form-data"><div class="box__input"><input id="fontInput" class="box__file" type="file" name="files[]"  data-multiple-caption="{count} files selected" multiple /></form><div id="message"></div><div id="listfonts"></div>',document.getElementById("fontInput").addEventListener("change",onReadFile,!1)}function localLoad(){var o=document.getElementById("section__header-file-buttons");document.getElementById("section__header-file-buttons").innerHTML="Place fonts you want to proof into <code>/fonts</code> to begin";var r="",c="",f="";$.get("../src/txt/fonts.txt",{},function(e){f=e.split("fonts/");for(var t=[],a=0;a<f.length;a++)""!=f[a]&&(thisFont=f[a].trim(),t.push(thisFont));preserveUnique(t),t.sort();for(a=0;a<t.length;a++){var n=t[a],s=n.split(".").pop();thisFontName=n.replace("ignore/","").replace("-"," ").replace(/([A-Z])/g," $1").trim(),thisFontFamily=n.replace(".","-"),r+='<div class="btn__setfont chip d-block" title="'+n+'" id="btn__setfont-'+thisFontFamily+'" onclick="setFont(\'fonts/'+n+"', '"+thisFontFamily+"')\">"+thisFontName.substring(0,thisFontName.length-4)+'<span class="float-right">'+s+"</span></div>",c+='@font-face { font-family: "'+thisFontFamily+'"; src: url("fonts/'+n+'");}'}if(o.innerHTML=r,localStorage.getItem("fontFamilySource"))var l=localStorage.getItem("fontFamilySource"),i=localStorage.getItem("fontFamily");else l="fonts/"+t[t.length-1],i=thisFontFamily;setFont(l,i),$("#style__fontface").append(c)},"text")}window.onload=function(){"localhost"===location.hostname||"127.0.0.1"===location.hostname||""===location.hostname?localLoad():serverLoad(),$("#section__header-file-buttons").on("click",".btn__setfont",function(){$(this).addClass("active").siblings().removeClass("active"),$(this).addClass("visited")}),$("#section__header-stage-buttons").on("click",".btn__setstage",function(){$(this).addClass("active").siblings().removeClass("active")}),$("#btn__view-tools-toggle").on("click",function(e){$(".body__idiotproofed").toggleClass("tools-visible")}),document.body.className+=" loaded"};var isAnimating=null;function animatefvarValue(e,t,a,n,s,l){document.getElementById(e+"-slider-"+t+"-val").value=a;var i="",o=null;if(null!==isAnimating)$("#style__fvar-animation").html(""),isAnimating=null;else{o=function(e,t){CSSRule.WEBKIT_KEYFRAMES_RULE?i+="@-webkit-keyframes "+e+" {"+t+"}":CSSRule.MOZ_KEYFRAMES_RULE?i+="@-moz-keyframes "+e+" {"+t+"}":CSSRule.KEYFRAMES_RULE&&(i+="@keyframes "+e+" {"+t+"}")},Array.isArray(l)||(l=l.split(","));var r="";if(1==l.length)o(t+"infinite",'0%, 100% {font-variation-settings:"'+t+'" '+a+';}25% {font-variation-settings:"'+t+'" '+n+';}50% {font-variation-settings:"'+t+'" '+s+";}");else{for(f=0;f<l.length;f++)if(t!==l[f]){var c=document.getElementById(id+"-slider-"+l[f]).value;r+="'"+String(l[f])+"' "+c+","}o(t+"infinite",'0%, 100% {font-variation-settings:"'+t+'" '+a+", "+(r=r.substring(0,r.length-1))+';}25% {font-variation-settings:"'+t+'" '+n+", "+r+';}50% {font-variation-settings:"'+t+'" '+s+", "+r+";}")}$("#style__fvar-animation").html(i),$("#"+e).css("font-variation-settings","unset").css("animation",t+"infinite 4s ease-in-out infinite"),isAnimating=!0}}