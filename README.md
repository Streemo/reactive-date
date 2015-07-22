# reactive-date

**Goal**: Provide a **single** reactive endpoint into the current date via unix-time. From here, other formats and the full blown Date object can be obtained manually; this package is very minimal (8-10 LOC). We do not need to implement reactivity for all of the formats because they are interchangable.

---
There is one constructor function: `ReactiveDate`. Only two instance methods: `now()`, and `stop()`. If you want a different date format, like ISODate or UTC or something, keep in mind that the forms are equivalent. I prefer the unix-time endpoint. From here, you can do something like `var desiredFormatOrInfo = new Date(1437546993997).useOneOfTheManyUtilityFunctionsProvidedInDateObject`.

**Full API** via example

```
//argument is number of ms until computation is invalidated
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
  var yourFavFormat = new Date(unixTimeFormat)
  console.log('%s and your favorite format will also log every 120ms', yourFavFormat)
})

//when you are done, don't forget to call rDate.stop() to clear the interval
//or else it will continue. Template's destroyed callback is useful for this.
//Alternatively, keep a global instance and use it everywhere
//instead of having many different instances.
```

