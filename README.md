## Sending and receiving message
Setup the header `Authorization` with value `key=<your_server_key>` in the project settings `Setting->Cloud Messaging->server key` 

![]({{site.baseurl}}/tutorial/1.jpg)

and use this for request body
```
{
	"notification": {
	    "title": "OnSmart Apps",
	    "body": "The device has been submitted",
	    "icon": "./icon.png",
	    "click_action": "http://localhost:3000"
	},
	"to" : "dyxPpnuGB08:APA91bH9TJ1s8k9ACGmyMg1ACK_ZNEyiDrz-NJYi2Y3r_2oXUTZgrpOMCbCZ78GwqMrWsloepoXUwh9tBsT9t8sjaX4FInedy_uFvZ0eROfwOcJReImhiiFpD2mFd46gctTllP6pcH49"
}
```
change `to` with token client
