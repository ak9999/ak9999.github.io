---
title: "Implementing my own version of std::array"
date: 2017-02-19
layout: layout.njk
---

I’ve been working on implementing my own data structures for practice, and I decided I’d try to make my own std::array. I had written a pretty bare bones Array class, but it was missing list-initialization, and I couldn’t use any of the neat things in the <algorithm> library. I realized that I’d need to implement iterators, but I had never done that before, and after a while of searching Google I found this gem from the computer science department at Northwestern University which says:

### *C pointers are legal iterators, so if your internal container is a simple C array, then all you need to do is return the pointers.*

Cool. So I keep reading through the doc and I’ve implemented my Array class like so:

```cpp
#pragma once // Only include this file once.

#include <memory>
#include <initializer_list>

template <typename T, size_t N>
class Array {
private:
    const size_t size_ = N;
    std::unique_ptr<T[]> array_ = std::make_unique<T[]>(N);
public:
    Array(); // Default c-tor
    Array(const Array&) = delete; // No copy-constructor.
    Array(Array&&) = delete; // No move-constructor.
    Array(std::initializer_list<T>); // initializer_list constructor
    ~Array() = default; // Destructor.

    // Public accessors.
    T& operator[] (size_t);
    T const& operator[] (size_t) const; // const version

    // Public operations.
    int size() const; // Return size.
    T* data(); // Return underlying array.

    // Iterators
    using iterator = T*;
    iterator begin() { return &array_.get()[0]; }
    iterator end() { return &array_.get()[size_]; }

    using const_iterator = const T*;
    const_iterator begin() const { return &array_.get()[0]; }
    const_iterator end() const { return &array_.get()[size_]; }
    const_iterator cbegin() const { return begin(); }
    const_iterator cend() const { return end(); }
};

#include "Array.cpp"
```

Pretty simple and clean. And for the initializer-list constructor:

```cpp
template <typename T, size_t N>
Array<T, N>::Array(std::initializer_list<T> lst) {
 std::copy(lst.begin(), lst.begin() + size_, array_.get());
}
```

This is easy to implement (but not so easy to understand at first) because raw pointers **are** iterators.
Specifically [random access iterators](http://en.cppreference.com/w/cpp/concept/RandomAccessIterator).
I did run into one problem while implementing this though. At first I didn’t have a `const` version of `begin()` and `end()`, but I did have a `cbegin()` and `cend()`.
So when I tried to iterate through one of my arrays using something like:

```cpp
for (const auto& i : array) { /* code goes here */ }
```

I’d get a compiler error, because there was no version of `begin()` that was marked `const`.
My mistake was in thinking that the compiler would know to use `cbegin()` instead of `begin()`.
The functions `cbegin()` and `cend()` are for users of the library, so they don’t make mistakes when asking for an iterator.
You need to have both a `const` version of `begin()` and `end()`, as well as a non-`const` version.

Implementing iterators was easy this time, but it won’t be when it comes to implementing them for other containers.