var messages = [{
  user: "Bob",
  avatar: "profile",
  message: "Hi"
},{
  user: "Jeff",
  avatar: "profile",
  message: "Hello"
},{
  user: "Bob",
  avatar: "profile",
  message: "how you doing"
},{
  user: "Jeff",
  avatar: "profile",
  message: "heckin good"
},{
  user: "Bob",
  avatar: "profile",
  message: "im doing gooder"
},{
  user: "Jeff",
  avatar: "profile",
  message: "shut up nerd"
},{
  user: "Bob",
  avatar: "profile",
  message: "ok"
},{
  user: "Bob",
  avatar: "profile",
  message: "Hi"
},{
  user: "Jeff",
  avatar: "profile",
  message: "Hello"
},{
  user: "Bob",
  avatar: "profile",
  message: "how you doing"
},{
  user: "Jeff",
  avatar: "profile",
  message: "heckin good"
},{
  user: "Bob",
  avatar: "profile",
  message: "im doing gooder"
},{
  user: "Jeff",
  avatar: "profile",
  message: "shut up nerd"
},{
  user: "Bob",
  avatar: "profile",
  message: "ok"
},{
  user: "Bob",
  avatar: "profile",
  message: "Hi"
},{
  user: "Jeff",
  avatar: "profile",
  message: "Hello"
},{
  user: "Bob",
  avatar: "profile",
  message: "how you doing"
},{
  user: "Jeff",
  avatar: "profile",
  message: "heckin good"
},{
  user: "Bob",
  avatar: "profile",
  message: "im doing gooder"
},{
  user: "Jeff",
  avatar: "profile",
  message: "shut up nerd"
},{
  user: "Bob",
  avatar: "profile",
  message: "ok"
}]

for (var i = 0; i < messages.length; i++) {
  $('.messages-container').append('<div class="message"><div class="avatar" title="'+messages[i].user+'"><img src="'+messages[i].avatar+'.png" alt="'+messages[i].user+'"></div><div class="message-text">'+messages[i].message+'</div></div>')
}
