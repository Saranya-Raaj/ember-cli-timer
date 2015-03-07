export default Ember.Controller.extend({
  basicTimer: "{{x-timer autoStart='true' format='HH:MM:SS' stopRequired=false}}",
  basicTimerWithStop: "{{x-timer autoStart='true' format='HH:MM:SS'}}",
  basicTimerStartStop: "{{x-timer format='HH:MM:SS'}}",
  basicTimerStartTime: "{{x-timer autoStart='false' startTime='300' format='HH:MM:SS'}}",
  stopWatch: "{{x-timer autoStart='false' startTime='300' format='HH:MM:SS' isStopWatch='true' updatePausedTime='updatePausedTime'}}",
  
  laps: [],
  actions: {
    updatePausedTime: function (time){
      this.get("laps").pushObject(time);
    }
  }
});