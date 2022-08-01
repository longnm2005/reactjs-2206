$('#btn__submit').click(function(){
    var a=$('#nhapA').val();
    var b=$('#nhapB').val();
    var c=$('#nhapC').val();
    
    if (a ==0 ) {
        $('p').html('a phải khác 0!');
    }
    else {
        const delta = b*b -4*a*c;
        if (delta<0){
            $('p').html(' Phương trình vô nghiệm!');
        }
        else if (delta==0){
            $('p').html(` Phương trình có nghiệm kép x1 = x2 = ${-b/(2*a)}`);
        }
        else{
            $('p').html(` Phương trình có nghiệm x1 = ${(-b+Math.sqrt(delta))/(2*a)} và x2 = ${(-b-Math.sqrt(delta))/(2*a)}`);
        }
    }
});
