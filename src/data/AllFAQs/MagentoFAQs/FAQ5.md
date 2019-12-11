---
title: "Check your Zendesk app API token setting"
category: "Magento"
priority: 12
---

In order to set up the flow of information between Zendesk and Magento, authentication tokens must be provided to the Zendesk app and the M1 Extension.  A common occurrence is mixing up which tokens are provided.

<br>

Your new Zendesk app needs to be provided with an API token available within the M1 Extension. To find this, 

<br>

>
  1.Log into your Magento Admin Panel and access the configuration page by selecting __System > Configuration > Zendesk.__

>
   <img src="../../images/FAQ_Zendesk_API_Token.png" data-canonical-src="../../images/FAQ_Zendesk_API_Token.png" width="500" height="250" />

>
  2.Under the __API Details__ section, ensure that the __API Enabled__ dropdown option is set to Yes.

>
  3.Copy the __API Token__ field value, and enter it into the __API Token__ field inside of the __Manage Your Account__ in the new app.  This token should be 32 characters in length.