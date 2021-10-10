"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[797],{17461:function(e){e.exports=JSON.parse('{"functions":[{"name":"Is","desc":"Returns `true` if `object` is a RemoteSignal.","params":[{"name":"object","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":42,"path":"packages/remote/RemoteSignal.lua"}},{"name":"new","desc":"Constructs a new RemoteSignal.","params":[],"returns":[{"desc":"","lua_type":"RemoteSignal"}],"function_type":"static","source":{"line":51,"path":"packages/remote/RemoteSignal.lua"}},{"name":"Fire","desc":"Fires the signal for the given player with any number of arguments.","params":[{"name":"player","desc":"","lua_type":"Player"},{"name":"...","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"RemoteSignal"}],"function_type":"method","source":{"line":66,"path":"packages/remote/RemoteSignal.lua"}},{"name":"FireAll","desc":"Fires the signal for all players with any number of arguments.","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"RemoteSignal"}],"function_type":"method","source":{"line":76,"path":"packages/remote/RemoteSignal.lua"}},{"name":"FireExcept","desc":"Fires the signal for all players (_except_ `player`) with any number of arguments.","params":[{"name":"player","desc":"","lua_type":"Player"},{"name":"...","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"RemoteSignal"}],"function_type":"method","source":{"line":87,"path":"packages/remote/RemoteSignal.lua"}},{"name":"Wait","desc":"Waits for the signal to be fired and then returns the arguments.","params":[],"returns":[{"desc":"","lua_type":"...: any"}],"function_type":"method","yields":true,"source":{"line":102,"path":"packages/remote/RemoteSignal.lua"}},{"name":"Connect","desc":"Connects a function to the signal, which will be fired\\nanytime a client fires the signal.","params":[{"name":"handler","desc":"","lua_type":"(player: Player, args: ...any) -> nil"}],"returns":[{"desc":"","lua_type":"RBXScriptConnection"}],"function_type":"method","source":{"line":113,"path":"packages/remote/RemoteSignal.lua"}},{"name":"Destroy","desc":"Destroys the signal.","params":[],"returns":[],"function_type":"method","source":{"line":123,"path":"packages/remote/RemoteSignal.lua"}}],"properties":[],"types":[],"name":"RemoteSignal","desc":"Represents a remote signal.\\n```lua\\nlocal RemoteSignal = require(packages.Remote).RemoteSignal\\n```","realm":["Server"],"source":{"line":33,"path":"packages/remote/RemoteSignal.lua"}}')}}]);