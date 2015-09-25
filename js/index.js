$(document).ready(function() {

  var quoteList = ['"Yesterday is history; tomorrow is a mystery. Today is a gift, which is why we call it the present." - Bil Keane','"Once a year, go some place you\'ve never been before" - Unknown','"Create something today even if it sucks" - Unknown','“You are never too old to set another goal or to dream a new dream.” - C. S. Lewis'];

   var quoteNumber = Math.floor(Math.random() * quoteList.length);

            $('.Quotes').html(quoteList[quoteNumber]);

   $('.nextQuote').on('click', function(){

      $('.Quotes').html(quoteList[quoteNumber]);

      quoteNumber = Math.floor(Math.random() * quoteList.length);

  });
});



});
