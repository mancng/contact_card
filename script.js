var clearInputs = function(){
    $('#first_name' ).val('');
    $('#last_name'  ).val('');
    $('#description').val('');
}

$(document).ready(function(){

    $(document).on('click', '.btn', function(e){
        e.preventDefault();

        var first_name  = $('#first_name' ).val();
        var last_name   = $('#last_name'  ).val();
        var description = $('#description').val();

        var row = '<div class="user_card"><h2>'
                  +first_name
                  + " " 
                  +last_name
                  +'</h2><h5>Click for description!</h5></div>';
        
        var hiddenDis = '<div class="descriptionCard hidden"><p>'                      +description
                        +'</p></div>';

        $('.card_div').append(row);
        $('.card_div').append(hiddenDis);

        clearInputs();
    });

    $(document).on('click', '.user_card', function(){
        $(this).addClass('hidden');
        $(this).next('.descriptionCard').removeClass('hidden');
    });
});