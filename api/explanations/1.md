## HEAD

This method is **identical** to GET but there is no message-body in the response. It is often used to test hyperlinks for validity and modification.

## TRACE

This allows the client to see what is being recieved at the other end of the request chain. Responses MUST NOT be cached

## OPTIONS

This method allows the client to determine options/requirements associated with a resource, without actually submitting or retrieving a resource.

NOT CACHEABLE

A 200 response should include header fields that indicate optional features implemented by the server.
