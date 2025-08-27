---
title: 数组
icon: book
order: 2
# breadcrumb: true
--- 

## 数组
- 数组是存放在连续内存空间上的相同类型数据的集合。
## 二分查找
- 二分查找的思路很简单，主要注意区间原则；
  - 左闭右闭：
    - 这里在最后一步，left=right是有意义的，因为在这个全闭合的状态下，是能出现left=right的情况，因此while条件需要while(left <= right);
    - 另外，while(num[mid] > target)时，因为right有意义，所以num[mid] > target是存在的，所以为mid-1
  - 左闭右开：
    - 这里在最后一步，left=right是没有意义的，因此while(left < right);
    - 另外，while(num[mid] > target)时，因为right没有意义，所以num[mid] > target是不存在的，所以为mid
