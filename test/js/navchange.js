$(document).ready(function(){
    var sub=$('#sub');
    var activeRow;
    var activeMenu;
    var timer;
    var mouseInSub=false;

    sub.on('mouseenter',function(e){
        mouseInSub=true;
    });
    sub.on('mouseleave',function(e){
        mouseInSub=false;
    });
    var mouseTrack=[];
    var moveHandler=function(e){
        mouseTrack.push({
            x:e.pageX,
            y:e.pageY
        });
        if(mouseTrack.length>3){
            mouseTrack.shift();
        }
    };

    $('#test').on('mouseenter',function(e){
        sub.removeClass('none');
        $(document).bind('mousemove',moveHandler);
    });
    $('#test').on('mouseleave',function(e){
        sub.addClass('none');
        if(activeRow){
            activeRow.removeClass('active');
            activeRow=null;
        }
        if(activeMenu){
            activeMenu.removeClass('active');
            activeMenu=null;
        }
        $(document).unbind('mousemove',moveHandler);
    });


    $('#test').on('mouseenter','li',function(e){
        if(!activeRow){
            activeRow=$(e.target).addClass('active');
            activeMenu=$('#'+activeRow.data('id'));
            activeMenu.removeClass('none');
            return;
        }
        //如果频繁操作则只执行最后一下，以此消除抖动
        if(timer){
            clearTimeout(timer);
        }
        //获取两次鼠标的位置坐标
        var currMousePos=mouseTrack[mouseTrack.length-1];
        var leftCorner=mouseTrack[mouseTrack.length-2];

        var delay=needDelay(sub,leftCorner,currMousePos);
       
        if(delay){
            //利用计时器实现缓冲，
            timer=setTimeout(function(){
                if(mouseInSub){
                    return;
                }
                activeRow.removeClass('active');
                activeMenu.addClass('none');
        
                activeRow=$(e.target);
                activeRow.addClass('active');
                activeMenu=$('#'+activeRow.data('id'));
                activeMenu.removeClass('none');
                timer=null;
            },300);
        }else{
            var prevActiveRow=activeRow;
            var prevActiveMenu=activeMenu;

            activeRow=$(e.target);
            activeMenu=$('#'+activeRow.data('id'));

            prevActiveRow.removeClass('active');
            prevActiveMenu.addClass('none');

            activeRow.addClass('active');
            activeMenu.removeClass('none');
        }
       
    });
});