# reactive-date

**Goal**: Provide just one (unix-time) getter obtain reactive date value; should mimic `Date.now()`.

**Other Date Formats?**: Obtain manually as `Date` constructor takes a unix-time argument - and this package provides reactive unix-time.

**Underneath**: Polling interval with configurable period.

**Tip**: The argument to `ReactiveDate` should at most be on the order of the smallest unit of time you display to the users. Then, it will feel real-time.

---

## Full API

Constructor: `ReactiveDate`.
```
//client
var updateInterval = 140 //milliseconds, defaults to 1000 if not provided
var reactiveDate = new ReactiveDate(updateInterval)
```

Methods: `now`, `stop`.
```
//client
Date.now() //vanilla method for getting non-reactive unix-time.
reactiveDate.now() //returns reactive unix-time (e.g. 1437554051424)
reactiveDate.stop() //clears the interval. MUST call this before deleting the object.
```

**For Most Use Cases**: You can instantiate one global `ReactiveDate` per client, and use it throughout the entire app, and you don't ever need to worry about the `stop` method. 

**For Special Cases**: When having one universal variable doesn't cut it, you need to manage your intervals. When you're done with an instance, call the `stop` method to clear the interval. Don't lose the reference. The easiest and most natural way to manage this is to have these `ReactiveDate` instances tacked onto your `Template` instances, and then make use of the `onDestroyed` callback. If not, you can create your own global cache and store your `ReactiveDate` instances there.  
