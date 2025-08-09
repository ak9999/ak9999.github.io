---
title: Initializer-List constructors
date: 2016-08-07
layout: layout.njk
---

So in modern C++ we have initializer-lists ({}-lists). I was reading about them because I was interested in how to add a {}-list constructor to my own classes. It turns out it’s actually really easy!

I’ll use a Singly Linked List as an example:

```cpp
#include <initializer_list>

template <typename T>
LinkedList<T>::LinkedList(std::initializer_list<T> lst) : root{nullptr}
{
    for (auto i = std::begin(lst); i != std::end(lst); ++i)
        this->push_back(*i);
    this->size_ = lst.size();
}
```

So here we have a template LinkedList class {}-list constructor. We use iterators to get the pointer to the data in the {}-list, and then we dereference the pointer when we push it to the LinkedList.

And we can use it like this:

```cpp
LinkedList<int> list{1, 2, 3, 4, 5}
```

Easy, isn’t it?