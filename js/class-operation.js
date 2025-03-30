$(function(){
    $('#toggle').on('click',function(){
        //id属性がtargetの要素にclass属性'sample'を追加／削除する
        $('#target').toggleClass('sample');
    });

    //id属性がhasの要素がクリックされたら
    $('#has').on('click',function(){
        //id属性がtargetの要素にclass属性'sample'があるか取得する
        let redult = $('#target').hasClass('sample');

        //条件分岐してconsole.logを表示する
        if(redult){
            console.log('sampleクラスがあります');
        }else {
            console.log('sampleクラスがありません');
        }
    });
});


