var gcm = require('node-gcm');
var message = new gcm.Message();

//API Server Key
var sender = new gcm.Sender('AIzaSyDG7eIkszFnxo1mHLFwIbPJBRaHsugqX7o');
var registrationIds = [];

// Value the payload data to send...
message.addData('message',"\u270C Peace, Love \u2764 and PhoneGap \u2706!");
message.addData('title','Push Notification Sample' );
message.addData('msgcnt','3'); // Shows up in the notification in the status bar
message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
//message.collapseKey = 'demo';
//message.delayWhileIdle = true; //Default is false
message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.

// At least one reg id required
registrationIds.push('APA91bGY2tzLk18EXtYLsDYutkjVcu5JsW63GfRnA-IOqcM7266V5B86qd6IbRz-XwncfTARtHDKNhTi5z5VvrZMb0o7XSTZKyjk40uiHIFyOukJovI56iqyMKIJiOjkUT06FrRGDrXpOPhn31JzI28_ejTY8NTIeA');

/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 sender.send(message, registrationIds, 4, function (result) { */
 sender.send(message, registrationIds, 4, function (err, result) {
    console.log(result);
});
