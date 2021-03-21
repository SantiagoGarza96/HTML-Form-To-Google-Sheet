var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbw7HG5CL7LuLYTs8a7lbd9LM6sBQTTKNFVkrl_xHiFyQwQj6Omx4KVdSPOt3aDfmNP4LA/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
