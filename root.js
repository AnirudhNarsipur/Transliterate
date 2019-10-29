var dict = new Map();
dict.set("ऀ",["","a"]);
dict.set("ँ",["un","a"]);
dict.set("ं",["","a"]);
dict.set("ः",["","a"]);
dict.set("ऄ",["ay","d"]);
dict.set("अ",["a","d"]);
dict.set("आ",["aa","d"]);
dict.set("इ",["i","d"]);
dict.set("ई",["ayi","d"]);
dict.set("उ",["u","d"]);
dict.set("ऊ",["oo","d"]);
dict.set("ऋ",["r","d"]);
dict.set("ऌ",["ul","d"]);
dict.set("ऍ",["eh","d"]);
dict.set("ऎ",["ehh","d"]);
dict.set("ए",["e","d"]);
dict.set("ऐ",["ay","d"]);
dict.set("ऑ",["aa","d"]);
dict.set("ऒ",["o","d"]);
dict.set("ओ",["oo","d"]);
dict.set("औ",["ou","d"]);
dict.set("क",["ka","c"]);
dict.set("ख",["kha","c"]);
dict.set("ग",["ga","c"]);
dict.set("घ",["gha","c"]);
dict.set("ङ",["nya","c"]);
dict.set("च",["cha","c"]);
dict.set("छ",["chcha","c"]);
dict.set("ज",["ja","c"]);
dict.set("झ",["jha","c"]);
dict.set("ञ",["","c"]);
dict.set("ट",["ta","c"]);
dict.set("ठ",["ta","c"]);
dict.set("ड",["da","c"]);
dict.set("ढ",["dda","c"]);
dict.set("ण",["nna","c"]);
dict.set("त",["tha","c"]);
dict.set("थ",["ththa","c"]);
dict.set("द",["da","c"]);
dict.set("ध",["dha","c"]);
dict.set("न",["na","c"]);
dict.set("ऩ",["nn","c"]);
dict.set("प",["pa","c"]);
dict.set("फ",["pha","c"]);
dict.set("ब",["ba","c"]);
dict.set("भ",["bha","c"]);
dict.set("म",["ma","c"]);
dict.set("य",["ya","c"]);
dict.set("र",["ra","c"]);
dict.set("ऱ",["rra","c"]);
dict.set("ल",["la","c"]);
dict.set("ळ",["zha","c"]);
dict.set("ऴ",["zhzha","c"]);
dict.set("व",["va","c"]);
dict.set("श",["shey","c"]);
dict.set("ष",["sha","c"]);
dict.set("स",["sa","c"]);
dict.set("ह",["ha","c"]);
dict.set("ऺ",["","a"]);
dict.set("ऻ",["uh","a"]);
dict.set("़",["","a"]);
dict.set("ऽ",["aaa","a"]);
dict.set("ा",["a","a"]);
dict.set("ि",["i","a"]);
dict.set("ी",["i","a"]);
dict.set("ु",["u","a"]);
dict.set("ू",["oo","a"]);
dict.set("ृ",["ru","a"]);
dict.set("ॄ",["ruu","a"]);
dict.set("ॅ",["un","a"]);
dict.set("ॆ",["","a"]);
dict.set("े",["e","a"]);
dict.set("ै",["ai","a"]);
dict.set("ॉ",["ung","a"]);
dict.set("ॊ",["","a"]);
dict.set("ो",["o","a"]);
dict.set("ौ",["ou","a"]);
dict.set("्",["","a"]);
dict.set("ॎ",["","a"]);
dict.set("ॏ",["","a"]);
dict.set("ॐ",["om","a"]);
dict.set("॑",["","a"]);
dict.set("॒",["","a"]);
dict.set("॓",["","a"]);
dict.set("॔",["","a"]);
dict.set("ॕ",["","a"]);
dict.set("ॖ",["","a"]);
dict.set("ॗ",["","a"]);
dict.set("क़",["","a"]);
dict.set("ख़",["","a"]);
dict.set("ग़",["","a"]);
dict.set("ज़",["","a"]);
dict.set("ड़",["","a"]);
dict.set("ढ़",["","a"]);
dict.set("फ़",["","a"]);
dict.set("य़",["","a"]);
dict.set("ॠ",["","a"]);
dict.set("ॡ",["","a"]);
dict.set("ॢ",["","a"]);
dict.set("ॣ",["","a"]);
dict.set("।",[".","r"]);
dict.set("्र",["ra","c"]);
dict.set("॥",["","a"]);
dict.set("१",["1","a"]);
dict.set("२",["2","a"]);
dict.set("३",["3","a"]);
dict.set("४",["4","a"]);
dict.set("५",["5","a"]);
dict.set("६",["6","a"]);
dict.set("७",["7","a"]);
dict.set("८",["8","a"]);
dict.set("९",["9","a"]);
dict.set("॰",["","a"]);
dict.set("ॱ ",[" ","r"]);
dict.set("ॲ",["","a"]);
dict.set("ॳ",["an","a"]);
dict.set("ॴ",["","a"]);
dict.set("ॵ",["ou","a"]);
dict.set("ॶ",["","a"]);
dict.set("ॷ",["","a"]);
dict.set(" ",[" ","a"]);
dict.set(".",[".","r"]);
dict.set("।",[".","r"]);
var n_rep = ["ट","न","द","त"];
var m_rep = ["ह","ब"] ;
function replaceTextOnPage(){
  getAllTextNodes().forEach(function(node){
    var text =  node.nodeValue ;
  //  alert("YOYOOYOY") ;
    var new_text = [];
    for(var t = 0 ; t < text.length ; t++){
      var chr = text.charAt(t);
      if(!dict.has(chr)){
        new_text.push(chr) ;
        continue;
      } else if (dict.get(chr)[1] =="r"){
        new_text.push(dict.get(chr)[0]) ;
        continue;
      }
      if( t!=(text.length-1)&&   (dict.get(chr)[1])  =="c" ) {
        var nchr = text.charAt(t+1) ;
        var ty = dict.get(chr)[0];
        if(chr=="ज"&&nchr=="्"&&text.charAt(t+2)=="ञ"){
          new_text.push("gya") ;
          continue;
        }
        if(dict.has(nchr)){
      if(dict.get(nchr)[1]=="a"){

        ty = ty.substring(0,ty.length-1) ;
        new_text.push( ty) ;
      } else {
        new_text.push( ty) ;
      }
    }
      } else {
        if(chr=="्"&&text.charAt(t+1)=="र"){
          t+=1;
          new_text.push("ra") ;
          continue;
        }
        else if(chr=="ं"){
          var nchr = text.charAt(t+1) ;
          if(text.charAt(t-1) == "स"){
            new_text.push("a");
          }
          if(m_rep.includes(nchr)){
            new_text.push("m") ;
          } else if(n_rep.includes(nchr)){
          new_text.push("n");
          continue;
        } else if(text.charAt(t-1)=="े"){
          new_text.push("h");
          continue ;
        }
        }else if(chr=="अ"&&text.charAt(t+1)=="ं"){
          new_text.push("an");
          continue;
        }else if(chr=="ई"&&text.charAt(t-1)==" "){
          new_text.push("i");
        }
        else{
            new_text.push(dict.get(chr)[0]) ;
          }
      }
    }
    var nt = (new_text.join("")).capitalize() ;

    node.nodeValue = node.nodeValue.replace(new RegExp(quote(node.nodeValue), 'g'), nt);

  });

  function getAllTextNodes(){
    var result = [];

    (function scanSubTree(node){
      if(node.childNodes.length)
        for(var i = 0; i < node.childNodes.length; i++)
          scanSubTree(node.childNodes[i]);
      else if(node.nodeType == Node.TEXT_NODE)
        result.push(node);
    })(document);

    return result;
  }

  function quote(str){
    return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
  }
}
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
// Content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  /* Content script action */
  replaceTextOnPage();

});
