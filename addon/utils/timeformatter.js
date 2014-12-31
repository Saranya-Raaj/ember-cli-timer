import Ember from 'ember';

export default Ember.Object.create({
  getTimefromSecs: function(seconds, format){
    if(format === "seconds"){
      return seconds;
    }
    var h = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    var m = Math.floor(seconds / 60);
    var s = Math.floor(seconds % 60);
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    if(format === "HH:MM"){
      return h + ":" + m;
    } else if(format === "HH:MM:SS") {
      return h + ":" + m + ":" + s;
    }
  },
  
  getSecs: function(time){
    var arr = time.split(':');
    var h = arr[0];
    var m = arr[1];
    var s = arr[2]; 
    return (parseFloat(h) * 3600 + parseFloat(m) * 60 + parseFloat(s));
  }
});