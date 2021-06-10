$("button").click(function(){
      let name=$(".name").val();
      let gender=$(".gender").val();
      let haircolor=$(".haircolor").val();
      let question1=$(".question1").val();
      $(".fullsentence").append("<li>Your name is:" + name +"</li>");
      $(".fullsentence").append("<li>Your are a:" + gender + "</li>");
      $(".fullsentence").append("<li>Your haircolor is:" + haircolor + "</li>");
    $(".fullsentence").append("<li>" + question1 + "</li>");
});