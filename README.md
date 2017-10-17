# spider

爬虫小程序,以后慢慢研究

感觉挺好的，不用写正则表达式

```
supervisor app.js
```
自动刷新

注意查看robot.txt

使用eventproxy控制并发
[eventproxy](https://github.com/JacksonTian/eventproxy)

或者使用async
[async](https://github.com/caolan/async)

当你需要去多个源(一般是小于 10 个)汇总数据的时候，用 eventproxy 方便；当你需要用到队列，   
需要控制并发数，或者你喜欢函数式编程思维时，使用 async。大部分场景是前者，所以我个人大部分时间是用 eventproxy 的。



