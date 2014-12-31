import Ember from 'ember';
import Formatter from '../utils/timeformatter';

export default Ember.Component.extend({
  startTimeStamp: 0,
  duration: 0,
  autoStart: false,
  startTime: 0,
  stopRequired: true,
  isStopWatch: false,
  isRunning: false,
  
  didInsertElement: function(){
    if(this.get("autoStart")){
      this.send("start");
    }
  },

  showStartBtn: function(){
    return this.get("isStopWatch") || !this.get("autoStart");
  }.property('autoStart', 'isStopWatch'),
    
  run: function(){
    var self = this;
    var startTimeStamp = this.get("startTimeStamp");
    this.set('timerId', Ember.run.later(this, function() {
      var timeElapsed = Date.now() - startTimeStamp;
      var secs = timeElapsed / 1000;
      self.set("duration", Formatter.getTimefromSecs(secs, "HH:MM:SS"));
      self.run();
    }, 25));  
  },
  
  actions: {
    start: function(){
      var startTime = this.get("startTime") * 1000;
      this.set("startTimeStamp", Date.now() - startTime);
      this.set("isRunning", true);
      this.run();
    },

    stop: function(reset){
      var timerId = this.get("timerId");
      var duration = this.get("duration");
      Ember.run.cancel(timerId);
      this.sendAction("timerStopped", duration);
      this.set("isRunning", false);
      if(reset) {
        this.set("startTime", 0);
      }
    },
          
    pause: function(){
      var duration = this.get("duration");
      var isRunning = this.get("isRunning");
      if(isRunning) {
        this.set("startTime", Formatter.getSecs(duration));
        this.sendAction("timerPaused", duration);
        this.send("stop");
      } else {
        this.send("start");
      }
    }
  },
  
  willDestroyElement: function() {
    var timerId = this.get("timerId");
    Ember.run.cancel(timerId);
  }
  
});
