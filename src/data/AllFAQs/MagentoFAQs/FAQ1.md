---
title: "Make sure there are no URL redirects in place"
category: "Magento"
priority: 8
---

For security purposes, the secure proxy used by the app to access the Magento Extension APIs does not support redirects.

<br>

Make sure the store URL you have entered points directly to your store, and is not relying on redirects at the CDN, network, or server. Having redirects in place will often result in  “fail-orders” errors within the new app.

<br>

The app will make requests similar to the following:

<br>

<pre>https://<< YOUR ZENDESK SUBDOMAIN >>.zendesk.com/proxy/apps/secure/<<YOUR STORE URL>>%2Findex.php%2Fzendesk%2Fapi%2Fcustomers%2Fsomecustomer%40somedomain.com</pre>

<br>

<span>

Any requests coming from **_https://<< YOUR SUBDOMAIN >>.zendesk.com/proxy/apps/secure_**
and going to your Magento server at 
**_<< YOUR STORE URL >>/index.php/zendesk/api/*_** must be able to come through without restriction or redirect.

</span>