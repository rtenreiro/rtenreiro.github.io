x_cards = [170, 483, 800];
y_cards = [330, 365, 330];

var ani_time = 0;
var need_name = true;
var need_wallet = true;


var name = '';
var wallet = '';


function joinGame(place) {
  $('.input-panel').hide();
  data = {command: 'join', place: place};
  validateW = function (wallet) {
    r = /^\d*(\.\d{1,}){0,1}[mkMK]{0,1}$/;
    if (!r.test(wallet))
      return 'Solo números';
    return '';
  };
  validateN = function (name) {
    if (name.length < 3)
      return 'Mínimo 3 letras';
    return '';
  };

  f = function () {
    $.post('bj-query.php', data);
  }
  fwi = function () {
    if (need_wallet)inputPanel(fw, 'Compre fichas', validateW); else f();
  }
  fn = function (name) {
    data['name'] = name;
    fwi();
  }
  fw = function (wallet) {
    data['wallet'] = wallet;
    f();
  }
  if (need_name)
    inputPanel(fn, 'Introduzca su nombre', validateN);
  else
    fwi();
}


function inputPanel(func, text, validate) {
  $('.input-panel .input-text').html(text);
  $('.input-panel .text-error').html('');
  $('.input-panel .input-value').val('');
  $('.input-panel .ok-input').unbind('click');
  $('.input-panel .cancel-input').unbind('click');
  $('.input-panel .cancel-input').click(function () {
    $('.input-panel').hide();
  });
  $('.input-panel .input-value').unbind('keyup');

  fn = function () {
    $('.input-panel .text-error').html('');
    if (typeof(validate) != 'undefined') {
      r = validate($('.input-panel .input-value').val());
      if (r.length) {
        $('.input-panel .text-error').html(r);
        return;
      }
    }
    $('.input-panel').hide();
    func($('.input-panel .input-value').val());


  }

  $('.input-panel .input-value').keyup(function (e) {
    if (e.keyCode == 13) {
      fn();


    }


  });

  $('.input-panel .ok-input').click(function () {
    fn();

  });
  $('.input-panel').show();

  $('.input-panel .input-value').focus();
}


$(document).on('click', '.set-ready', function () {
  $.post('bj-query.php', {command: 'ready'});
});

$(document).on('click', '.set-sit-1', function () {
  joinGame(1);
});
$(document).on('click', '.set-sit-2', function () {
  joinGame(2);
});
$(document).on('click', '.set-sit-3', function () {
  joinGame(3);
});


$(document).on('click', '.bj_t1', function () {
  $.post('bj-query.php', {command: 'place_bet', bet: 1});
});
$(document).on('click', '.bj_t2', function () {
  $.post('bj-query.php', {command: 'place_bet', bet: 5});
});
$(document).on('click', '.bj_t3', function () {
  $.post('bj-query.php', {command: 'place_bet', bet: 10});
});
$(document).on('click', '.bj_t4', function () {
  $.post('bj-query.php', {command: 'place_bet', bet: 20});
});
$(document).on('click', '.bj_t5', function () {
  $.post('bj-query.php', {command: 'place_bet', bet: 50});
});


$(document).on('click', '.cancel-bet', function () {
  $('.begin-panel').hide();
  $.post('bj-query.php', {command: 'cancel-bet'});
});

$(document).on('click', '.insurance-yes', function () {
  $('.insurance-panel').hide();
  $.post('bj-query.php', {command: 'insurance', type: 1});
});

$(document).on('click', '.insurance-no', function () {
  $('.insurance-panel').hide();
  $.post('bj-query.php', {command: 'insurance', type: 0});
});

$(document).on('click', '.control-stand', function () {
  $('.control-panel').hide();
  $.post('bj-query.php', {command: 'turn', type: 'stand'});
});

$(document).on('click', '.control-double', function () {
  $('.control-panel').hide();
  $.post('bj-query.php', {command: 'turn', type: 'double'});
});

$(document).on('click', '.control-hit', function () {
  $('.control-panel').hide();
  $.post('bj-query.php', {command: 'turn', type: 'hit'});
});

$(document).on('click', '.control-split', function () {
  $('.control-panel').hide();
  $.post('bj-query.php', {command: 'turn', type: 'split'});
});

$(document).on('click', '#exit-game,.exit-game', function () {
  $.post('bj-query.php', {command: 'exit'});
});

$(document).on('keyup', '.input-newwallet', function (e) {
  if (e.keyCode == 13) {
    r = /^\d*(\.\d{1,}){0,1}[mkMK]{0,1}$/;
    if (!r.test($('.input-newwallet').val())) {
      $('.new-wallet .text-error').html('Incorrect wallet format');
      return;
    }
    $.post('bj-query.php', {command: 'new-wallet', wallet: $('.input-newwallet').val()});
    $('.input-newwallet').val('');

  }
});
$(document).on('click', '.ok-wallet', function () {
  r = /^\d*(\.\d{1,}){0,1}[mkMK]{0,1}$/;
  if (!r.test($('.input-newwallet').val())) {
    $('.new-wallet .text-error').html('Incorrect wallet format');
    return;
  }
  $.post('bj-query.php', {command: 'new-wallet', wallet: $('.input-newwallet').val()});
  $('.input-newwallet').val('');

});

$(document).on('click', '.your-name', function () {


  $('.input-panel').hide();
  validateN = function (name) {
    if (name.length < 3)
      return 'Mínimo 3 letras';
    return '';
  };

  fn = function (name) {
    $.post('bj-query.php', {command: 'name', name: name});
  }
  inputPanel(fn, 'Introduzca nombre', validateN);

});

function add_card(card, index, id, split) {
  if (id == -1)
    setTimeout(function () {
      card = $('<div ' + (index == 0 ? ' id="dealer-first" ' : '') + 'class="card-d card ' + card + '" style="top:45px;left:65px;"></div>');
      card.appendTo('.bj-conteiner');
      card.animate({top: '60px', left: (484 + index * 23) + 'px'}, 200);
      ani_time -= 300;
    }, ani_time);
  else
    setTimeout(function () {
      card = $('<div class="active card-' + id + ' card ' + card + ' ' + ((split > 0) ? 'card-split-' + id : 'card-nonsplit-' + id) + '" style="top:45px;left:65px;"></div>');
      card.appendTo('.bj-conteiner');
      topPos = (y_cards[id - 1] + index * 20);
      0 + 20
      if (split > 0)topPos += 20;
      leftPos = (x_cards[id - 1] + index*20);
      -10 + 20
      if (split != 0)leftPos += 15 * split;
      card.animate({top: topPos + 'px', left: leftPos + 'px'}, 200);
      ani_time -= 300;
      if ($('.card-holder-' + id + '-s' + split).length == 0)
        $('<div class="card-holder card-holder-' + id + '-s' + split + '" style="top:' + topPos + 'px;left:' + leftPos + 'px;"></div>').appendTo('.bj-conteiner');
      else
        $('.card-holder-' + id + '-s' + split).animate({height: '+=20'}, 100);
    }, ani_time);
  ani_time += 300;

}

function getState(data) {
  need_name = data.need_name;
  need_wallet = data.need_wallet;
  if (!need_name) {
    new_txt = '<span class="your-name">' + (data.name.length ? data.name : 'Introduzca nombre') + '</span> ' + data.wallet + ' ' + (data.in_game ? ' <button id="exit-game">Salir</button>' : '');
    if (new_txt != $('.user-info').html())
      $('.user-info').html(new_txt);
  }
  if (data.in_game && data.need_wallet)
    $('.new-wallet').show();
  else
    $('.new-wallet').hide();

  if (data.state <= 1 || data.state == 4)
    $('.card-holder').remove();
  if (data.state != 4 || (data.state == game_data.state)) {
    a = [];
    for (i in data.players) {
      $('.p' + data.players[i].pos + '-name').html(data.players[i].name);
      if (data.players[i].message.length)
        $('.p' + data.players[i].pos + '-text').show();
      else
        $('.p' + data.players[i].pos + '-text').hide();
      $('.p' + data.players[i].pos + '-text').html(data.players[i].message);

      if (data.players[i].split && $('.p' + data.players[i].pos + '-text-split').length == 0) {
        $('<div class="p' + data.players[i].pos + '-text-split"></div>').appendTo('.bj-conteiner');
        $('.p' + data.players[i].pos + '-text').animate({top: "-=10", left: "-=15"});
        $('.p' + data.players[i].pos + '-text-split').animate({top: "+=30", left: "+=15"});
      }
      if (data.players[i].split_message.length)
        $('.p' + data.players[i].pos + '-text-split').show();
      else
        $('.p' + data.players[i].pos + '-text-split').hide();
      $('.p' + data.players[i].pos + '-text-split').html(data.players[i].split_message);
      if (data.players[i].qty) {
        $('.p' + data.players[i].pos + '-qty').html(data.players[i].qty);
        $('.p' + data.players[i].pos + '-qty').show();
      }
      else
        $('.p' + data.players[i].pos + '-qty').hide();
      if (data.players[i].split_qty) {
        $('.p' + data.players[i].pos + '-qty-s').html(data.players[i].split_qty);
        $('.p' + data.players[i].pos + '-qty-s').show();
      }
      else
        $('.p' + data.players[i].pos + '-qty-s').hide();
      $('.p' + data.players[i].pos + '-bet').html(data.players[i].bet);
      a.push(parseInt(data.players[i].pos));
      if (data.players[i].cards.length == 0)
        if (game_data.players[i] && data.players[i].cards.length == 0 && game_data.players[i].cards.length > 0) {
          $('.card-' + data.players[i].pos).animate({top: '25px', left: '318px'}, function () {
            $(this).remove();
          });
          if ($('.p' + data.players[i].pos + '-text-split').length > 0) {
            $('.p' + data.players[i].pos + '-text').animate({top: "+=10", left: "+=15"});
            $('.p' + data.players[i].pos + '-text-split').remove();
          }
        }
    }


    for (i = 1; i < 6; i++)if (a.indexOf(i) < 0) {
      $('.p' + i + '-name').html('');
      $('.p' + i + '-text').hide();//html('Loss');
      $('.p' + i + '-text-split').remove();
      $('.p' + i + '-qty').hide();
      $('.p' + i + '-qty-s').hide();
      $('.p' + i + '-bet').html('');
      $('.card-' + i).animate({top: '25px', left: '318px'}, function () {
        $(this).remove();
      });
      if ($('.p' + i + '-text-split').length > 0) {
        $('.p' + i + '-text').animate({top: "+=10", left: "+=15"});
        $('.p' + i + '-text-split').remove();
      }
    }
  }
  if (game_data.secs != data.secs)
    $('.secs').html(data.secs);

  if (data.cards.length == 0 && game_data.cards.length > 0) {
    game_data.cards = [];
    $('.card-d').animate({top: '25px', left: '318px'}, function () {
      $(this).remove();
    });
    $('.d-qty').html('').hide();
  }

  if (data.pos_1_free && !data.in_game && data.is_allow_game)
    $('.set-sit-1').show();
  else
    $('.set-sit-1').hide();
  if (data.pos_2_free && !data.in_game && data.is_allow_game)
    $('.set-sit-2').show();
  else
    $('.set-sit-2').hide();
  if (data.pos_3_free && !data.in_game && data.is_allow_game)
    $('.set-sit-3').show();
  else
    $('.set-sit-3').hide();

  if (data.t1_show)
    $('.bj_t1').show();
  else
    $('.bj_t1').hide();
  if (data.t2_show)
    $('.bj_t2').show();
  else
    $('.bj_t2').hide();
  if (data.t3_show)
    $('.bj_t3').show();
  else
    $('.bj_t3').hide();
  if (data.t4_show)
    $('.bj_t4').show();
  else
    $('.bj_t4').hide();
  if (data.t5_show)
    $('.bj_t5').show();
  else
    $('.bj_t5').hide();


  if (!data.is_allow_game)
    $('.nomoney-panel').show();
  else
    $('.nomoney-panel').hide();

  if (data.state == 1 && data.in_game && data.my_state == 0) {
    $('.set-ready-' + data.my_pos).show();
  } else {
    $('.set-ready-1').hide();
    $('.set-ready-2').hide();
    $('.set-ready-3').hide();
  }


  if (game_data.state <= 1 && data.state >= 2) {
    $('.deck').show();
    $('.start-panel').hide();
    $('.card-d').animate({top: '25px', left: '318px'}, function () {
      $(this).remove();
    });
    for (i = 1; i < 4; i++)
      $('.card-' + i).animate({top: '25px', left: '318px'}, function () {
        $(this).remove();
      });
    for (i = 0; i < 2; i++) {
      add_card(data.cards[i], i, -1);
      for (p_i in data.players) {
        add_card(data.players[p_i].cards[i], i, data.players[p_i].pos, 0);
      }
    }
  }

  if (data.state == 2 && data.my_state == 0 && data.state != game_data.state)
    setTimeout(function () {
      $('.insurance-panel').show();
    }, ani_time);
  if (data.state == 2 && data.my_state == 1)
    $('.insurance-panel').hide();
  if (game_data.state == 2 && data.state != game_data.state)
    $('.insurance-panel').hide();

  if (data.state == 3 && (game_data.is_turn != data.is_turn || game_data.ltime != data.ltime) && data.is_turn) {
    setTimeout(function () {
      $('.control-panel').show();
    }, ani_time);
    if (data.allow_double)
      $('.control-double').show();
    else
      $('.control-double').hide();
    if (data.split_awail)
      $('.control-split').show();
    else
      $('.control-split').hide();
  }
  if (game_data.is_turn != data.is_turn && game_data.is_turn) {
    $('.control-panel').hide();
  }

  if ((data.state >= 3 && game_data.state >= 3 ) || game_data.game_id != data.game_id) {

    $('.card-holder').removeClass('active');
    $('.card').removeClass('active');
    if (data.current_player_pos > 0) {
      $('.card-holder-' + data.current_player_pos + '-s' + data.split).addClass('active');
      if (data.split == 0)$('.card-holder-' + data.current_player_pos + '-s-1').addClass('active');
      $('.card-' + (data.split > 0 ? '' : 'non') + 'split-' + data.current_player_pos).addClass('active');
    }
    for (p_i in data.players) {
      if (game_data.players[p_i] && data.players[p_i].split && !game_data.players[p_i].split) {
        $($('.card-' + data.players[p_i].pos)[0]).animate({top: '-=0', left: '-=15'}, 100);
        $($('.card-' + data.players[p_i].pos)[1]).removeClass('card-nonsplit-' + data.players[p_i].pos).addClass('card-split-' + data.players[p_i].pos).animate({
          top: '-=0',
          left: '+=15'
        }, 100);
        $('.card-holder-' + data.players[p_i].pos + '-s0').remove();
        topPos = y_cards[data.players[p_i].pos - 1];
        leftPos = x_cards[data.players[p_i].pos - 1];
        $('<div class="card-holder card-holder-' + data.players[p_i].pos + '-s-1" style="top:' + topPos + 'px;left:' + (leftPos - 15) + 'px;"></div>').appendTo('.bj-conteiner');
        $('<div class="card-holder card-holder-' + data.players[p_i].pos + '-s1" style="top:' + (topPos + 20) + 'px;left:' + (leftPos + 15) + 'px;"></div>').appendTo('.bj-conteiner');
        add_card(data.players[p_i].cards[1], 1, data.players[p_i].pos, -1);
        add_card(data.players[p_i].split[1], 1, data.players[p_i].pos, 1);

      }
      if (game_data.players[p_i] && data.players[p_i].cards.length != game_data.players[p_i].cards.length) {
        i = 1;
        for (c_i in data.players[p_i].cards) {
          if (i++ > game_data.players[p_i].cards.length)
            add_card(data.players[p_i].cards[c_i], i - 2, data.players[p_i].pos, data.players[p_i].split ? -1 : 0);
        }
      }
      if (game_data.players[p_i] && data.players[p_i].split && data.players[p_i].split.length != game_data.players[p_i].split.length) {
        i = 1;
        for (c_i in data.players[p_i].split) {
          if (i++ > game_data.players[p_i].split.length)
            add_card(data.players[p_i].split[c_i], i - 2, data.players[p_i].pos, 1);
        }
      }
    }
  }


  if (data.game_over_text && data.state == 1) {
    //$('.win-panel').hide();
    $($('.start-panel .text')[0]).html(data.game_over_text);
  }
  else if (data.game_over_text && data.state != 1) {
    //$('.win-panel').show().find('.text').html(data.game_over_text);
    $($('.start-panel .text')[0]).html('');
  }
  else {
    //$('.win-panel').hide();
    $($('.start-panel .text')[0]).html('');
  }
  //if(data.state==4 && data.state!=game_data.state){
  if (data.state == 1 && (game_data.state > 1 || game_data.game_id != data.game_id)) {
    //$('#dealer-first').removeClass('bc');
    //$('#dealer-first').addClass(data.cards[0]);
    for (i = game_data.state == 1 ? 0 : 2; i < data.cards.length; i++)
      add_card(data.cards[i], i, -1);
    setTimeout(function () {
      $('.d-qty').html(data.qty).show();
    }, ani_time);
    setTimeout(function () {
      $.post('bj-query.php', {command: 'state'}, getState);
    }, ani_time);
  } else {
    setTimeout(function () {
      $.post('bj-query.php', {command: 'state'}, getState);
    }, 500);
  }

  if (data.state <= 1 || data.state == 4 && typeof(data.cards[0]) != "undefined" && $('#dealer-first').hasClass('bc')) {
    $('#dealer-first').removeClass('bc');
    $('#dealer-first').addClass(data.cards[0]);
  }

  if (data.state == 1)
    setTimeout(function () {
      $('.start-panel').show();
      if (data.is_allow_cancel)$('.cancel-bet').show(); else $('.cancel-bet').hide();
    }, ani_time);
  else
    $('.start-panel').hide();


  game_data = data;

}

$(document).ready(function () {
  $.post('bj-query.php', {command: 'state'}, function (data) {
    game_data = data;
    setTimeout(function () {
      $.post('bj-query.php', {command: 'state'}, getState);
    }, 500);
  });
});