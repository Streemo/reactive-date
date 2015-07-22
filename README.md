# reactive-date

**Goal**: Provide just one readable endpoint to obtain a reactive date value; usage feeling should mimic `Date.now()`.

**Other Reactive Date Formats?**: Did not implement these since other formats can be obtained manually as `Date` constructor takes unix-time as an argument - and this package provides reactive unix-time.

**Underneath**: Time itself is a poll in certain sense, so use polling interval with configurable period.

**Tip**: The argument to `ReactiveDate` should be on the order of the smallest unit of time you display to the users. For example, if you display time in minutes, then updating the date every 20 minutes will reveal that your displayed date is not in real-time. But updating it every 12 seconds will make it seem as if it is updating in real-time, which is what matters.

---

## Full API (via example)

Constructor: `ReactiveDate`.

Methods: `now`, `stop`.

```
//argument is number of ms until computation is invalidated
//defaults to 1000ms
var rDate = new ReactiveDate(120);

Tracker.autorun(function(){
  //vanilla Date.now() is non reactive.
  console.log('this code runs one time at ', Date.now())
})

Tracker.autorun(function(){
  //rDate.now() is reactive
  console.log('this code ran at %s and it will run again in 120ms.', rDate.now())
})

Tracker.autorun(function(){
  //this is reactive since we call rDate.now()
  var myFavFormat = rDate.now()
  //this new variable will contain all the methods on Date
  var yourFavFormat = new Date(myFavFormat)
  console.log('%s and your favorite format will also log every 120ms', yourFavFormat)
})

//when you are done, don't forget to call rDate.stop() to clear the interval
//or else it will continue. Template's destroyed callback is useful for this.
//Alternatively, keep a global instance and use it everywhere
//instead of having many different instances.
```

