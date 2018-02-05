/*!
 * sticky-element v1.0.0: Stick Element to position
 * (c) 2018 Jaber Ibne Mahboob
 * MIT License
 * http://github.com/jaberibnemahboob/sticky-element
 */

let StickyElement = function(){
    //ALLOCATE VARIABLE
    let i;

    //GET THE ARGUMENTS
    let data = Array.prototype.slice.call(arguments);

    //SET STICKY ELEMENT FOR EACH OBJECT
    data.forEach(function(object,index){

        //CHECK WHETHER OBJECT IS VALID
        if(!("element" in object) || (typeof object["element"] !== "string") || (document.querySelector(object["element"]) === null)) return;

        //GET TOP SCROLL OFFSET OF THE TARGET ELEMENT
        let topScrollOffset = function(e){
            let yPos = 0;
            do{yPos += e.offsetTop;} while(e = e.offsetParent);
            yPos = Math.max(yPos, 0);
            return yPos;
        };

        //GET THE TARGET ELEMENTS
        let elemsList = document.querySelectorAll(object["element"]);

        //ENSURE ELEMS IS AN ARRAY NOT OBJECT, IN IE IT'S AN OBJECT
        let elems = new Array();
        if(typeof(elemsList) == "object"){
            for(i=0;i<elemsList.length;i++){
                elems[i] = elemsList[i];
            }
        }

        //RUN STICKY SETUP SCRIPT
        elems.forEach(function(elem,index){

            //PREPARE ALL VARIABLES
            let targetPos = ("stickToY" in object) ? Math.max(parseInt(object["stickToY"]),0) : topScrollOffset(elem);
            let elemPos = topScrollOffset(elem);
            let scrollCondStr = ("scrollTowards" in object) ? object["scrollTowards"] : "none";
            let scrollCond = (scrollCondStr == "down") ? 1 : ((scrollCondStr == "up") ? -1 : 0);
            let scrollPos = 0;
            let preState = elem.style.position;
            let prePos = elem.style.top;
            let elemParent = elem.parentNode;


            //SET STICKY ELEMENT
            let setStickyElement = function(){
                setTimeout(function(){elemParent.style.minHeight = elemParent.clientHeight + "px";},200);
                if((window.pageYOffset >= scrollPos) && (scrollCond == 1)){
                    if(window.pageYOffset >= elemPos){
                        elem.style.position = "fixed";
                        elem.style.top = targetPos;
                    }
                }else if((window.pageYOffset < scrollPos) && (scrollCond == 1)){
                    if(window.pageYOffset < elemPos) {
                        elem.style.position = preState;
                        elem.style.top = prePos;
                    }
                }else if((window.pageYOffset <= scrollPos) && (scrollCond == -1)){
                    if(window.pageYOffset <= elemPos) {
                        elem.style.position = "fixed";
                        elem.style.top = targetPos;
                    }
                }else if((window.pageYOffset > scrollPos) && (scrollCond == -1)){
                    if(window.pageYOffset > elemPos) {
                        elem.style.position = preState;
                        elem.style.top = prePos;
                    }
                }else if(scrollCond == 0){
                    elem.style.position = "fixed";
                    elem.style.top = targetPos;
                }else{
                    elem.style.position = preState;
                    elem.style.top = prePos;
                }
                scrollPos = window.pageYOffset;
            }

            //BIND EVENT LISTENER WITH STICKY ELEMENT SCRIPT
            window.addEventListener("scroll",function(event){
                setStickyElement();
            });

            //INITIAL SETUP
            setStickyElement();

        });
    });
};
