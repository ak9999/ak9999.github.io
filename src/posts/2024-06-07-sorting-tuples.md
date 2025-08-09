---
title: "Why don't tuples in Python have a sort method?"
date: 2024-06-07
layout: layout.njk
---

My friend James from [Don't Use This Code](https://www.dontusethiscode.com/) gave a [teaser](https://www.linkedin.com/posts/dont-use-this-code_the-weekend-doesnt-have-to-be-about-yard-activity-7202292737549758465-L3tk) the other day:

> Why can't you `.sort` a `tuple`? Why doesn't the method exist?

My answer below.

#### We can use `sorted` on a `tuple`.

Let's quickly review what `sorted` does:

```python
>>> help(sorted)
Help on built-in function sorted in module builtins:

sorted(iterable, /, *, key=None, reverse=False)
    Return a new list containing all items from the iterable in ascending order.

    A custom key function can be supplied to customize the sort order, and the
    reverse flag can be set to request the result in descending order.
```

So you are right, but we'll get a `list` back *not* a `tuple`.

Let's keep going.

#### What is a tuple anyway?

According to the [Python documentation](https://docs.python.org/3/library/stdtypes.html#tuples), a `tuple` is a builtin immutable sequence that is typically used to store collections of **heterogeneous data**, and then it gives the example of [`enumerate()`](https://docs.python.org/3/library/functions.html#enumerate).

The key phrase here is "**heterogeneous data**", meaning it is not a collection the same way a `list` is.

Let's look at the example of `enumerate()` by using it in action:

```python
alphabet = [chr(i) for i in range(65, 91)]
# alphabet = ['A', 'B', 'C', 'D', 'E', 'F', ...]
enumerated_alphabet = [pair for pair in enumerate(alphabet)]
# enumerated_alphabet = [(0, 'A'), (1, 'B'), (2, 'C'), ...]
```

We just used `enumerate()` to give us a `list` of `tuple[int, str]`. Integers and strings are not the same data-type.
This pairing is exactly an example of the use-case given by the documentation. A `tuple` is typically a "pairing" of items. You can't sort a `tuple` because you aren't meant to sort pairs of data, only retrieve them by index, or by unpacking them via iterable unpacking.

If we further explore `tuple`, we find there is also [`namedtuple`](https://docs.python.org/3/library/collections.html#collections.namedtuple), for when we want to access data by name instead of index. Further, if we look at the Python DB-API Spec, [PEP-249](https://peps.python.org/pep-0249/), all the functions for retrieving data return...

> (e.g. a list of tuples)

So we find that tuples are immutable because they represent a pairing of data which shouldn't be modified, so think of it like a record of some kind. It doesn't make sense to take a record and try to sort the record itself.

#### I think we can still use `sorted` on a `tuple`.

You can call `sorted` if you want to, but let's say we have a table, `T`, with columns `id`, and `username`.

If you query `T` and get a result, `r`, which is `[(123, "AJ"), (456, "Arthur"), ...]`, it wouldn't make sense for you to try and do something like `first_element = r[0]; first_element.sort()`. How would you compare an `int` against a `str` and see which one is lesser or greater?

So that's why there is no `.sort` method for tuples.

Thank you for joining me in this exercise, I enjoyed it very much.

If you also found this Python exercise interesting, please visit my friends over at [Don't Use This Code](https://www.linkedin.com/company/dont-use-this-code/posts/?feedView=all) on LinkedIn, they have a lot more posts like this as well as articles, videos, and webinars.

Thanks for reading.

-- AJ