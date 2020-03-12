const chatbox = jQuery.noConflict();
var $=jQuery.noConflict();
var $messages = $(".messages-content"),
  d,
  h,
  m,
  i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 100);
});


chatbox(() => {
  chatbox(".chatbox-open").click(() =>
    chatbox(".chatbox-popup, .chatbox-close").fadeIn()
  );

  chatbox(".chatbox-close").click(() =>
    chatbox(".chatbox-popup, .chatbox-close").fadeOut()
  );

  chatbox(".chatbox-maximize").click(() => {
    chatbox(".chatbox-popup, .chatbox-open, .chatbox-close").fadeOut();
    chatbox(".chatbox-panel").fadeIn();
    chatbox(".chatbox-panel").css({ display: "flex" });
  });

  chatbox(".chatbox-minimize").click(() => {
    chatbox(".chatbox-panel").fadeOut();
    chatbox(".chatbox-popup, .chatbox-open, .chatbox-close").fadeIn();
  });

  chatbox(".chatbox-panel-close").click(() => {
    chatbox(".chatbox-panel").fadeOut();
    chatbox(".chatbox-open").fadeIn();
  });
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar("scrollTo", "bottom", {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate() {
  d = new Date();
  if (m != d.getMinutes()) {
    m = d.getMinutes();
  /*  $('<div class="timestamp">' + d.getHours() + ":" + m + "</div>").appendTo(
      $(".message:last")
    );
    $('<div class="checkmark-sent-delivered">&check;</div>').appendTo(
      $(".message:last")
    );
    $('<div class="checkmark-read">&check;</div>').appendTo($(".message:last"));*/
  }
}

function insertMessage() {
  msg = $(".message-input").val();
  if ($.trim(msg) == "") {
    return false;
  }
  $('<div class="message message-personal" style="color:green; text-align: right;">' + msg + "</div>")
    .appendTo($(".mCSB_container"))
    .addClass("new");
  setDate();
  $(".message-input").val(null);
  updateScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 1000 + Math.random() * 20 * 100);
}

$(".message-submit").click(function() {
  insertMessage();
});

$(window).on("keydown", function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
});

var Fake = [
  'Hi, I\'m the agent what\'s your name?',
  'Nice to meet you',
  'How are you?',
  'Not too bad, thanks',
  'What are you looking for?',
  'Can you provide your address?',
  'Do you need an application?',
  'for which category you want a permit for?',
  'Are you sure this is what you are looking for?',
  'Great?',
  'Anything else you need help with?',
  'It was a pleasure chat with you',
  'Feel free to chat with us whenever you need help',
  'Bye'
];

function fakeMessage() {
  if ($(".message-input").val() != "") {
    return false;
  }
  $(
    '<div class="message loading new"><figure><img src="content/images/agent_avatar.png" style="float: left;" /></figure><span></span></div>'
  ).appendTo($(".mCSB_container"));
  updateScrollbar();

  setTimeout(function() {
    $(".message.loading").remove();
    $(
      '<div class="message new"><figure><img src="content/images/agent_avatar.png" style="float: left;"/></figure>' +
        Fake[i] +
        "</div>"
    )
      .appendTo($(".mCSB_container"))
      .addClass("new");
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + Math.random() * 20 * 100);

  $(".msg_container_base").stop().animate({ scrollTop: $(".msg_container_base")[0].scrollHeight}, 1000);
}

$(".button").click(function() {
  $(".menu .items span").toggleClass("active");
  $(".menu .button").toggleClass("active");
});
