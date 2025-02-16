# What is Reducer?
As a beginner in React.js, I was curious what reducer means? So I googled it and found an answer from devlog.jwgo.kr
> [Jiwoo Choi] 5 years ago
> The word of 'Reduce' means 'Change' more than 'Make something less quantity".
> "To change something into a simpler or more general form"
> "In mathmathics, reduction refers to the rewriting of an expression into a simpler form".
> In that meaning, We can't translate the whole meaning in Korean, We can think 'reduce' mean that "Change somehow (To make it simple or apply a specific rules).
> So, Changing sates is reduce() function in Functional programing. 
> State.reduce(specific rule) => changed state
> Reducer is a function that is used to change previous state to new state in Redux
> The Official redux website explain it :
> "You, developers, will use it this function as Array.prototype.reduce(reducer, ?initialValue). That's why we call it Reducer."
> On the other word, Thre reason why we call it reducer is that we use reducer as callback function for reduce() function.
> [Original website](https://devlog.jwgo.kr/2018/08/23/redux-which-is-weird-term/)

### How I understand
Reducer has a simple rule with data. So that data, state will be changed. That's why we call it reducer.