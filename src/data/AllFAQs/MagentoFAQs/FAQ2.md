---
title: "Check you have the latest version of the M1 extension installed"
category: "Magento"
priority: 9
---

Older versions of the M1 Extension are no longer supported and are likely to cause “fail-order” errors within the new app.  Please check that your extension version matches the latest version available (https://github.com/zendesk/magento_extension). If not please update by following the instructions in [Magento: Installing the Zendesk extension for Magento.](https://support.zendesk.com/hc/en-us/articles/203660046-Magento-Integration-Installing-the-Zendesk-extension-for-Magento)

<br>

Errors caused by outdated M1 Extension versions can be seen within your Magento PHP logs, and include the following error messages:

<br>

<pre>
ArgumentCountError
<br>
Uncaught exception ‘ArgumentCountError’ with message ‘Too few arguments to function Zendesk_Zendesk_ApiController::ordersAction()
</pre>

<br>

or

<br>

```
PHP Fatal error: Call to a member function find() on a non-object in /var/www/html/apache.git/magento/store2/app/code/community/Zendesk/Zendesk/Model/Observer.php`
```