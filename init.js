// IoT Button
load('api_gpio.js');
load('api_mqtt.js');
 
let pin = 13;
let topic = 'bell';
let bellNumber = 1;
let qos = 1;
 
GPIO.set_mode(pin, GPIO.MODE_INPUT);
GPIO.set_button_handler(pin, GPIO.PULL_UP, GPIO.INT_EDGE_NEG, 500, function(x) {
  let message = JSON.stringify({
    "number": bellNumber
  });
  let ok = MQTT.pub(topic, message, qos);
  print('Published:', ok ? 'yes' : 'no', ', topic:', topic, ', message:', message);
}, true);
