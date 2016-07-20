# HTTP Idempotency

An idempotent request is one that results in the *same* state on the server no matter how many times that request is executed.

PUT is *idempotent*. If the network is botched and the client is not sure whether his request made it through, it can just send it a second (or 100th) time, and it is guaranteed by the HTTP spec that this has exactly the same effect as sending once.

In fact, GET, HEAD, PUT, and DELETE all share this characteristic. OPTIONS and TRACE shouldn't have side effects and thus are inherently idempotent as well.

When PUT-ing a resource, you must send ALL PROPERTIES AND VALUES.

#### What do we do with these when we want to update a resource?

PUT can update a resource, but as we stated earlier, it must replace the entire resource. It also must have a specified resource identifier:

`PUT /videos/123`

If a video exists here, it will be overwritten. If not, it will be created.


POST can also update a resource. It can modify pieces of the resource instead of overwriting the entire thing:

`POST /videos/123`

If a video does not exist here, an error will be thrown.
