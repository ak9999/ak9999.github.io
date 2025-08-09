---
title: "My short look at Rust."
date: 2017-01-28
layout: layout.njk
---

Lately I’ve noticed that Rust is getting more attention on the programming related subreddits, so I decided to take a look.

I read the Getting Started chapter of the documentation, and I really liked it. After a few minutes of just following along any new user will come to know how to structure their Rust projects and Cargo is a straight-forward package manager and build system. What caught me off-guard however was the size of the executable Hello World program below.

This

```rust
fn main() {
 println!(“Hello, world!”);
}
```

turns into a 2.0M executable. But that’s when I do rustc main.rs or cargo build without any attempt to optimize the build. If I do a cargo build --release I still get a 2.0M executable. I did a quick search and found [this](https://stackoverflow.com/questions/29008127/why-are-rust-executables-so-huge) answer on StackOverflow, which explains that the standard library is statically linked in each program. A comment in response to the question recommends using GNU strip to cut the debug symbols out. So I did and my 2.0M executable is now closer to 400K. Still pretty huge. Checking the Rust FAQ explains this better, and offers advice on how to reduce executable size, as well as mentions work that is being done to remedy the situation.