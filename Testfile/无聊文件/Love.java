 switch (person.sex) { 
    case "女": {//如果对方是个妹子
    if (person.getAppearance() >= Girl.Appearance.AVERAGE){   //而且长得不错
        if (!person.hasBoyfriend()) {   //再问问有没有男朋友 
            person.teach(person.getHand(), this.getHand());//没有的话就手把手教导吧
            person.tell("留个联系方式吧，有什么不懂的好问我");
            this.phone.save(person.getTelNumber());//留个电话，不懂的好问 
       } else {
            person.teach(person.getHand(), this.getHand()); //有男朋友也没关系 :) 
            person.tell("留个联系方式吧，有什么不懂的好问我，你男友在旁边瞪着我不方便，叫他在外边等你吧"); 
            person.boyFriend.setColor("#00FF00", "head");//#00FF00==绿色 
            this.phone.save(person.getTelNumber());
        } 
    }else {
        person.tell("隔壁老王说不定他会");
    } 
    break; 
    }
    case "男": {     //如果是汉子也没关系 
        if (person.dress=="CosMM") {        //emmm...如果能女装的话 :)
                this.phone.save(person.getTelNumber());//留个电话，不懂的好问 
            } 
        else { 
            if (person.isGoodFriend() && person.offferMeGF()) { //不能女装的话，offferMeGF()能否给我介绍个女票
                person.teach("carefully");      //如果可以的话
                person.tell("咱哥俩谈什么钱啊，说钱伤感情！还有妹子多久给我介绍啊"); 
            } else {            //如果不行的话
                person.tell("百度一下，你就知道"); 
            } 
        } 
        break; 
    } 
    default: { //如果是人妖的话，
        person.tell("不会"); 
            break;
    } 
} 