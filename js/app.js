$('.carousel').slick({
    dots:true,
    arrows:false,
    autoplay:true,
    autoplaySpeed:5000,
});

function customInputNumberInit(){
    var inputsNumber = document.querySelectorAll('.custom-input-number');
    inputsNumber.forEach(function(item){
        var target = item.querySelector('input[type="number"]');
        target.value = 1;
        var increment = item.querySelector('.increment');
        var decrement = item.querySelector('.decrement');
        var max = target.max;
        if(max === ''){
            max = 9999;
        }
        var min = target.min;
        if(min === ''){
            min = 1;
        }
        increment.addEventListener('click', function(){
            if(parseInt(target.value) < max){
                target.value = parseInt(target.value) + 1;
            }
        });
        decrement.addEventListener('click', function(){
            if(parseInt(target.value) > min){
                target.value = parseInt(target.value) - 1;
            }
        });
    })
}
customInputNumberInit();