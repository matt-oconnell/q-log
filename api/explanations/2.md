# POST Format

`application/x-www-form-urlencoded` is the default encoding of a POST request. It is in the same format as a GET query string. The POST request may look something like this (HTTP headers, followed by a space, followed by a a query string):

```
POST /path/handle_form HTTP/1.1
From: matt@matto.xyz
User-Agent: HTTPTool/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 33

first_name=Bart&last_name=Simpson
```
