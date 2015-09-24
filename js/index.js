$(document).ready(function() { 
  
  var quoteList = ['"Yesterday is history; tomorrow is a mystery. Today is a gift, which is why we call it the present." - Bil Keane','"Once a year, go some place you\'ve never been before" - Unknown','"Create something today even if it sucks" - Unknown'];
  
  var quoteNumber = 0;
  
  $('.Quotes').html(quoteList[quoteNumber]);
    quoteNumber++
  
  $('.nextQuote').on('click', function(){
    
    $('.Quotes').html(quoteList[quoteNumber]);
    quoteNumber++
    
    if (quoteNumber === quoteList.length) {
      quoteNumber = 0
    }
  });
  
  
  
  
});