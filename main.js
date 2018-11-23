// var messages = [{
//   user: "Bob",
//   message: "Hi"
// },{
//   user: "Jeff",
//   message: "Hello"
// },{
//   user: "Bob",
//   message: "how you doing"
// },{
//   user: "Jeff",
//   message: "heckin good"
// },{
//   user: "Bob",
//   message: "im doing gooder"
// },{
//   user: "Jeff",
//   message: "shut up nerd"
// },{
//   user: "Bob",
//   message: "ok"
// },{
//   user: "Bob",
//   message: "Hi"
// },{
//   user: "Jeff",
//   message: "Hello"
// },{
//   user: "Bob",
//   message: "how you doing"
// },{
//   user: "Jeff",
//   message: "heckin good"
// },{
//   user: "Bob",
//   message: "im doing gooder"
// },{
//   user: "Jeff",
//   message: "shut up nerd"
// },{
//   user: "Bob",
//   message: "ok"
// },{
//   user: "Bob",
//   message: "Hi"
// },{
//   user: "Jeff",
//   message: "Hello"
// },{
//   user: "Bob",
//   message: "how you doing"
// },{
//   user: "Jeff",
//   message: "heckin good"
// },{
//   user: "Bob",
//   message: "im doing gooder"
// },{
//   user: "Jeff",
//   message: "shut up nerd"
// },{
//   user: "Bob",
//   message: "ok"
// }]
var friends = [{
  user: "Jeff",
  messages: [{
    user: "Bob",
    message: "Hi"
  },{
    user: "Jeff",
    message: "Hello"
  },{
    user: "Bob",
    message: "how you doing"
  },{
    user: "Jeff",
    message: "heckin good"
  },{
    user: "Bob",
    message: "im doing gooder"
  },{
    user: "Jeff",
    message: "shut up nerd"
  },{
    user: "Bob",
    message: "ok"
  },{
    user: "Bob",
    message: "Hi"
  },{
    user: "Jeff",
    message: "Hello"
  },{
    user: "Bob",
    message: "how you doing"
  },{
    user: "Jeff",
    message: "heckin good"
  },{
    user: "Bob",
    message: "im doing gooder"
  },{
    user: "Jeff",
    message: "shut up nerd"
  },{
    user: "Bob",
    message: "ok"
  },{
    user: "Bob",
    message: "Hi"
  },{
    user: "Jeff",
    message: "Hello"
  },{
    user: "Bob",
    message: "how you doing"
  },{
    user: "Jeff",
    message: "heckin good"
  },{
    user: "Bob",
    message: "im doing gooder"
  },{
    user: "Jeff",
    message: "shut up nerd"
  },{
    user: "Bob",
    message: "ok"
  }]
},{
  user: "Bob",
  messages: [{
    user: "Bob",
    message: "heck"
  }]
},{
  user: "Jeffica",
  messages: [{
    user: "Bob",
    message: "test"
  },{
    user: "Jeffica",
    message: "yo"
  }]
},{
  user: "Bobita",
  messages: [{
    user: "Bobita",
    message: "breh"
  }]
}]
var page = 'Jeff';
// friends.find(x => x.user === page).length;

var messages = friends.find(x => x.user === page).messages;
$(document).ready(function() {
  $('.messages-container').scrollTop($('.messages-container')[0].scrollHeight);
})
for (var i = 0; i < friends.length; i++) {
  $('.friends-container').append('<div class="friend"><div class="avatar-small"><img class="friend-avatar" src="' + friends[i].user +'.png" alt="' + friends[i].user +'"><div class="friend-text">' + friends[i].user + '</div></div></div>')
}
function start() {
  messages = friends.find(x => x.user === page).messages;
  $('.messages-container').empty();
  $('.messages-header').text('@' + page);
  for (var i = 0; i < friends.find(x => x.user === page).messages.length; i++) {
    $('.messages-container').append('<div class="message"><div class="avatar" title="'+messages[i].user+'"><img class="message-avatar" src="'+messages[i].user+'.png" alt="'+messages[i].user+'"></div><div class="message-text">'+messages[i].message+'</div></div>')
  }
  $('.messages-container').scrollTop($('.messages-container')[0].scrollHeight);
}

$('.settings-button').click(function() {
  $('.settings-overlay').css('bottom', '0');
})
$('.settings-close').click(function() {
  $('.settings-overlay').css('bottom', '100vh');
})
$('.toggleable').click(function() {
  $('.ball').toggleClass('on');
  if ($('.ball').hasClass('on')) {
    $('.toggleable').css('background-color', '#00ACBF');
  }
  else {
    $('.toggleable').css('background-color', 'white');
  }
})

start();
$('.friend').click(function() {
  page = $(this).text();
  start();
});
