# PUT vs. POST



The PUT method requests that the enclosed entity be stored under the supplied Request-URI. If we are PUT-ing to `/api/resource/123`, we will either be updating or creating a resource at "123." 

POST functions ARE NOT cacheable. The function performed by a POST method is determined by the server. This is the main difference between POST and PUT. The URI in a POST request may be a process, i.e. `/api/videos`. When we POST here, the server could add a new video.

If we were using PUT, the URI would need an identifier like so: `/api/videos/123`. If a video exists at this location, we update it, otherwise we create one. If we hit this route with POST, we could update the video but if it doesnt exist yet, an error should be thrown. 

POST is used to *modify*.
**Remember this: You send Mail(Modify) by POST. We can modify small bits of a resource without sending the entire thing.**

PUT is used to *create* and *overwrite*. If we are overwriting, it must be with a completely new resource. We can not just update one part of an existing resource. 
**Remember this: You are PUTting a whole resource in this place.**

[MORE INFO](http://stackoverflow.com/questions/630453/put-vs-post-in-rest)

-----




refernce stuff down here


<blockquote>
    This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?
```js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
    <Markdown source="# Your markdown here" />,
    document.getElementById('content')
);
```

Pretty neat, eh?

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal