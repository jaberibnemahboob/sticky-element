let StickyElement = function(){
    let data = Array.prototype.slice.call(arguments);
    data.forEach(function(object,index){
        if(!("element" in object) || (typeof object["element"] !== "string") || (document.querySelector(object["element"]) === null)) return;

        let scrollTop = function (e){
            let scrollLocation = 0;
            do {scrollLocation += e.offsetTop;} while (e = e.offsetParent);
            scrollLocation = Math.max(scrollLocation, 0);
            return scrollLocation;
        }

        let elems = document.querySelectorAll(object["element"]);
        elems.forEach(function(elem){
            let targetPos = ("stickTo" in object) ? Math.max(parseInt(object["stickTo"]), 0) : scrollTop(elem);
            let elemPos = scrollTop(elem);
            let scll = ("scrollTowards" in object) ? object["scrollTowards"] : "none";
            let cond = (scll == "down") ? 1 : ((scll == "up") ? -1 : 0);
            let curScroll = 0;
            let preState = elem.style.position;
            let prePos = elem.style.top;
            let elemParent = elem.parentNode;


            let setStickyElement = function(){
                setTimeout(function(){elemParent.style.minHeight = elemParent.clientHeight + "px";},500);
                if((window.pageYOffset >= curScroll) && (cond == 1)){
                    if(window.pageYOffset >= elemPos) {
                        elem.style.position = "fixed";
                        elem.style.top = targetPos;
                    }
                }else if((window.pageYOffset < curScroll) && (cond == 1)){
                    if(window.pageYOffset < elemPos) {
                        elem.style.position = preState;
                        elem.style.top = prePos;
                    }
                }else if((window.pageYOffset <= curScroll) && (cond == -1)){
                    if(window.pageYOffset <= elemPos) {
                        elem.style.position = "fixed";
                        elem.style.top = targetPos;
                    }
                }else if((window.pageYOffset > curScroll) && (cond == -1)){
                    if(window.pageYOffset > elemPos) {
                        elem.style.position = preState;
                        elem.style.top = prePos;
                    }
                }else if(cond == 0){
                    elem.style.position = "fixed";
                    elem.style.top = targetPos;
                }else{
                    elem.style.position = preState;
                    elem.style.top = prePos;
                }
                curScroll = window.pageYOffset;
            }

            window.addEventListener("scroll",function(event){
                setStickyElement();
            });
            setStickyElement();
        });

    });
}
