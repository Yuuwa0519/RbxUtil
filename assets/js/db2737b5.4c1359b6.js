"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[911],{14571:function(e){e.exports=JSON.parse('{"functions":[{"name":"Some","desc":"Creates an Option instance with the given value. Throws an error\\nif the given value is `nil`.","params":[{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"Option"}],"function_type":"static","source":{"line":113,"path":"packages/option/init.lua"}},{"name":"Wrap","desc":"Safely wraps the given value as an option. If the\\nvalue is `nil`, returns `Option.None`, otherwise\\nreturns `Option.Some(value)`.","params":[{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"Option"}],"function_type":"static","source":{"line":127,"path":"packages/option/init.lua"}},{"name":"Is","desc":"Returns `true` if `obj` is an Option.","params":[{"name":"obj","desc":"","lua_type":"any"}],"returns":[],"function_type":"static","source":{"line":140,"path":"packages/option/init.lua"}},{"name":"Assert","desc":"Throws an error if `obj` is not an Option.","params":[{"name":"obj","desc":"","lua_type":"any"}],"returns":[],"function_type":"static","source":{"line":149,"path":"packages/option/init.lua"}},{"name":"Deserialize","desc":"Deserializes the data into an Option. This data should have come from\\nthe `option:Serialize()` method.","params":[{"name":"data","desc":"","lua_type":"table"}],"returns":[{"desc":"","lua_type":"Option"}],"function_type":"static","source":{"line":160,"path":"packages/option/init.lua"}},{"name":"Serialize","desc":"Returns a serialized version of the option.","params":[],"returns":[{"desc":"","lua_type":"table"}],"function_type":"method","source":{"line":170,"path":"packages/option/init.lua"}},{"name":"Match","desc":"Matches against the option.\\n\\n```lua\\nlocal opt = Option.Some(32)\\nopt:Match {\\n\\tSome = function(num) print(\\"Number\\", num) end,\\n\\tNone = function() print(\\"No value\\") end,\\n}\\n```","params":[{"name":"matches","desc":"","lua_type":"{Some: (value: any) -> any, None: () -> any}"}],"returns":[{"desc":"","lua_type":"any"}],"function_type":"method","source":{"line":192,"path":"packages/option/init.lua"}},{"name":"IsSome","desc":"Returns `true` if the option has a value.","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":209,"path":"packages/option/init.lua"}},{"name":"IsNone","desc":"Returns `true` if the option is None.","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":218,"path":"packages/option/init.lua"}},{"name":"Expect","desc":"Unwraps the value in the option, otherwise throws an error with `msg` as the error message.\\n```lua\\nlocal opt = Option.Some(10)\\nprint(opt:Expect(\\"No number\\")) -> 10\\nprint(Option.None:Expect(\\"No number\\")) -- Throws an error \\"No number\\"\\n```","params":[{"name":"msg","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"value: any"}],"function_type":"method","source":{"line":233,"path":"packages/option/init.lua"}},{"name":"ExpectNone","desc":"Throws an error with `msg` as the error message if the value is _not_ None.","params":[{"name":"msg","desc":"","lua_type":"string"}],"returns":[],"function_type":"method","source":{"line":243,"path":"packages/option/init.lua"}},{"name":"Unwrap","desc":"Returns the value in the option, or throws an error if the option is None.","params":[],"returns":[{"desc":"","lua_type":"value: any"}],"function_type":"method","source":{"line":252,"path":"packages/option/init.lua"}},{"name":"UnwrapOr","desc":"If the option holds a value, returns the value. Otherwise, returns `default`.","params":[{"name":"default","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"value: any"}],"function_type":"method","source":{"line":262,"path":"packages/option/init.lua"}},{"name":"UnwrapOrElse","desc":"If the option holds a value, returns the value. Otherwise, returns the\\nresult of the `defaultFn` function.","params":[{"name":"defaultFn","desc":"","lua_type":"() -> any"}],"returns":[{"desc":"","lua_type":"value: any"}],"function_type":"method","source":{"line":277,"path":"packages/option/init.lua"}},{"name":"And","desc":"Returns `optionB` if the calling option has a value,\\notherwise returns None.\\n\\n```lua\\nlocal optionA = Option.Some(32)\\nlocal optionB = Option.Some(64)\\nlocal opt = optionA:And(optionB)\\n-- opt == optionB\\n\\nlocal optionA = Option.None\\nlocal optionB = Option.Some(64)\\nlocal opt = optionA:And(optionB)\\n-- opt == Option.None\\n```","params":[{"name":"optionB","desc":"","lua_type":"Option"}],"returns":[{"desc":"","lua_type":"Option"}],"function_type":"method","source":{"line":304,"path":"packages/option/init.lua"}},{"name":"AndThen","desc":"If the option holds a value, then the `andThenFn`\\nfunction is called with the held value of the option,\\nand then the resultant Option returned by the `andThenFn`\\nis returned. Otherwise, None is returned.\\n\\n```lua\\nlocal optA = Option.Some(32)\\nlocal optB = optA:AndThen(function(num)\\n\\treturn Option.Some(num * 2)\\nend)\\nprint(optB:Expect(\\"Expected number\\")) --\x3e 64\\n```","params":[{"name":"andThenFn","desc":"","lua_type":"(value: any) -> Option"}],"returns":[{"desc":"","lua_type":"value: Option"}],"function_type":"method","source":{"line":329,"path":"packages/option/init.lua"}},{"name":"Or","desc":"If caller has a value, returns itself. Otherwise, returns `optionB`.","params":[{"name":"optionB","desc":"","lua_type":"Option"}],"returns":[{"desc":"","lua_type":"Option"}],"function_type":"method","source":{"line":345,"path":"packages/option/init.lua"}},{"name":"OrElse","desc":"If caller has a value, returns itself. Otherwise, returns the\\noption generated by the `orElseFn` function.","params":[{"name":"orElseFn","desc":"","lua_type":"() -> Option"}],"returns":[{"desc":"","lua_type":"Option"}],"function_type":"method","source":{"line":360,"path":"packages/option/init.lua"}},{"name":"XOr","desc":"If both `self` and `optionB` have values _or_ both don\'t have a value,\\nthen this returns None. Otherwise, it returns the option that does have\\na value.","params":[{"name":"optionB","desc":"","lua_type":"Option"}],"returns":[{"desc":"","lua_type":"Option"}],"function_type":"method","source":{"line":378,"path":"packages/option/init.lua"}},{"name":"Filter","desc":"Returns `self` if this option has a value and the predicate returns `true.\\nOtherwise, returns None.","params":[{"name":"predicate","desc":"","lua_type":"(value: any) -> boolean"}],"returns":[{"desc":"","lua_type":"Option"}],"function_type":"method","source":{"line":397,"path":"packages/option/init.lua"}},{"name":"Contains","desc":"Returns `true` if this option contains `value`.","params":[{"name":"value:","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":411,"path":"packages/option/init.lua"}},{"name":"__tostring","desc":"Metamethod to transform the option into a string.\\n```lua\\nlocal optA = Option.Some(64)\\nlocal optB = Option.None\\nprint(optA) --\x3e Option<number>\\nprint(optB) --\x3e Option<None>\\n```","params":[],"returns":[],"function_type":"method","source":{"line":425,"path":"packages/option/init.lua"}},{"name":"__eq","desc":"Metamethod to check equality between two options. Returns `true` if both\\noptions hold the same value _or_ both options are None.\\n```lua\\nlocal o1 = Option.Some(32)\\nlocal o2 = Option.Some(32)\\nlocal o3 = Option.Some(64)\\nlocal o4 = Option.None\\nlocal o5 = Option.None\\n\\nprint(o1 == o2) --\x3e true\\nprint(o1 == o3) --\x3e false\\nprint(o1 == o4) --\x3e false\\nprint(o4 == o5) --\x3e true\\n```","params":[],"returns":[],"function_type":"method","source":{"line":450,"path":"packages/option/init.lua"}}],"properties":[{"name":"None","desc":"Represents no value.","lua_type":"Option<None>","source":{"line":467,"path":"packages/option/init.lua"}}],"types":[],"name":"Option","desc":"Represents an optional value in Lua. This is useful to avoid `nil` bugs, which can\\ngo silently undetected within code and cause hidden or hard-to-find bugs.","source":{"line":92,"path":"packages/option/init.lua"}}')}}]);