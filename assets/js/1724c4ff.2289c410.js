"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[257],{22936:function(e){e.exports=JSON.parse('{"functions":[{"name":"Compound","desc":"Creates a compound streamable around all the given streamables. The compound\\nstreamable\'s observer handler will be fired once _all_ the given streamables\\nare in existence, and will be cleaned up when _any_ of the streamables\\ndisappear.\\n\\n```lua\\nlocal s1 = Streamable.new(workspace, \\"Part1\\")\\nlocal s2 = Streamable.new(workspace, \\"Part2\\")\\n\\nlocal compoundJanitor = StreamableUtil.Compound({S1 = s1, S2 = s2}, function(streamables, janitor)\\n\\tlocal part1 = streamables.S1.Instance\\n\\tlocal part2 = streamables.S2.Instance\\n\\tjanitor:Add(function()\\n\\t\\tprint(\\"Cleanup\\")\\n\\tend)\\nend)\\n```","params":[{"name":"streamables","desc":"","lua_type":"{Streamable}"},{"name":"handler","desc":"","lua_type":"({[child: string]: Instance}, janitor: Janitor) -> nil"}],"returns":[{"desc":"","lua_type":"Janitor"}],"function_type":"static","source":{"line":69,"path":"packages/streamable/StreamableUtil.lua"}}],"properties":[],"types":[],"name":"StreamableUtil","desc":"A utility library for the Streamable class.\\n\\n```lua\\nlocal StreamableUtil = require(packages.Streamable).StreamableUtil\\n```","source":{"line":43,"path":"packages/streamable/StreamableUtil.lua"}}')}}]);