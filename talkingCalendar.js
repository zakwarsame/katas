const talkingCalendar = function(date) {
    // Your code here
    const event = new Date(date);
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return event.toLocaleString('en-US', options)
  };
  
  console.log(talkingCalendar("2017/12/02"));
  console.log(talkingCalendar("2007/11/11"));
  console.log(talkingCalendar("1987/08/24"));