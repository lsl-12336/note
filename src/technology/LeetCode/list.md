---
title: 数组
icon: book
order: 2
headerDepth: 4
# breadcrumb: true
--- 

## 数组
- 数组是存放在连续内存空间上的相同类型数据的集合。
### 二分查找
- 适用于递增排列数组
- 二分查找的思路很简单，主要注意区间原则；
  - 左闭右闭：
    - 这里在最后一步，left=right是有意义的，因为在这个全闭合的状态下，是能出现left=right的情况，因此while条件需要while(left <= right);
    - 另外，while(num[mid] > target)时，因为right有意义，所以num[mid] > target是存在的，所以为mid-1
  - 左闭右开：
    - 这里在最后一步，left=right是没有意义的，因此while(left < right);
    - 另外，while(num[mid] > target)时，因为right没有意义，所以num[mid] > target是不存在的，所以为mid

#### 1 搜索插入位置
 - 注意如果target不在，考虑插入位置
   -  在数组左边
   -  在数组右边
   -  在数组内部
   -  等于数组内部某个值
      -  这里取值是left或者right+1 ,原因是，最后循环完要么是-1，要么是n；但左边插入位置不可能是-1,因为从0开始，所以左右处理方式不一样，这里想一想就能想通；
  ```python :no-line-numbers
  class Solution(object):
    def searchInsert(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        left, right = 0, len(nums) -1
        while left <= right:
            mid = left + (right - left) // 2
            if target> nums[mid]:
                left = mid + 1
            elif target < nums[mid]:
                right = mid - 1
            else:
                return mid
        return right + 1
  ```

#### 2 搜索二维矩阵
 - 分两次二分法，注意第一次找所在行的时候，当target>mid的，不一定在后一行，也有可在当前行，因为是按照matrix[m][0]找；如果按照matrix[m][n-1]找，则需要反过来注意。
  ```python :no-line-numbers
  class Solution(object):
    def searchMatrix(self, matrix, target):
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: bool
        """
        m = len(matrix)
        n = len(matrix[0])
        left = 0
        right = m-1
        index = -1

        while(left <= right):
            mid = left + (right - left) // 2
            if matrix[mid][0] > target:
                right = mid - 1
                
            elif matrix[mid][0] < target:
                left = mid + 1
            else:
                return True
        index = left - 1 

        left = 0
        right = n-1    
        while(left <= right):
            mid = left + (right - left) // 2
            if matrix[index][mid] > target:
                right = mid - 1
            elif matrix[index][mid] < target:
                left = mid + 1
            else:
                return True
        return False
  ```
#### 3 螺旋矩阵
 - 主要考虑几个问题
   - 上下左右的边界值，即每次都是左闭右开，或者每次都是左开右闭，不然会越界
   - 使用好range函数，主要是range(0,3)代表的是从0到3-1个元素
   - 每次都需要判断左右或者上下是否过了，即left>right;后续编不再需要处理
    ```python :no-line-numbers
    class Solution(object):
      def spiralOrder(self, matrix):
          """
          :type matrix: List[List[int]]
          :rtype: List[int]
          """
          res = []
          top, bottom, left, right = 0, len(matrix) - 1, 0, len(matrix[0]) - 1
          if matrix is None: return res
          while True:
              for i in range(left, right+1):
                  res.append(matrix[top][i])
              top += 1
              if top > bottom: break

              for i in range(top, bottom+1):
                  res.append(matrix[i][right])
              right -= 1
              if left > right: break

              for i in range(right, left-1, -1):
                  res.append(matrix[bottom][i])
              bottom -= 1
              if top > bottom: break

              for i in range(bottom, top-1, -1):
                  res.append(matrix[i][left])
              left += 1
              if left > right: break
          return res
    ```

### 双指针
- 通过一个快指针和慢指针在一个for循环下完成两个for循环的工作。
  - 双指针即快慢指针，一个指针用来解决问题，另一个指针指向新的需要实现的结果
  - 其实原理就是在能够用一个for完成两个for的事情，并且减小空间的消耗
#### 1. 移动零
- **思路**
  - 用快指针找非零元素，慢指针指向新的数组
  - 最后再nums范围内遍历慢指针，赋值0元素
- **代码实现**
    ```python :no-line-numbers
        class Solution(object):
            def moveZeroes(self, nums):
                """
                :type nums: List[int]
                :rtype: None Do not return anything, modify nums in-place instead.
                """
                slowIndex = 0
                for fastIndex in range(0, len(nums)):
                    if nums[fastIndex] != 0:
                        nums[slowIndex] = nums[fastIndex]
                        slowIndex += 1
                
                for i in range(slowIndex, len(nums)):
                    nums[slowIndex] = 0
                    slowIndex += 1

                return nums

                
    ```


### 滑动窗口
- 滑动窗口有点像双指针，但是是按照窗口整体移动的，分为左边界和右边界
  - 一般用右边界来循环到尾部，也就是for循环
  - 用左边界来寻找满足条件
- 注意：
  - 窗口内容是什么？
  - 如何移动右边界？
  - 如何移动左边界？

- **万能模版**/出自无重复字符的最长子串中的python题解思路
    ```python :no-line-numbers
        class Solution:
            def problemName(self, s: str) -> int:
                # Step 1: 定义需要维护的变量们 (对于滑动窗口类题目，这些变量通常是最小长度，最大长度，或者哈希表)
                x, y = ..., ...

                # Step 2: 定义窗口的首尾端 (start, end)， 然后滑动窗口
                start = 0
                for end in range(len(s)):
                    # Step 3: 更新需要维护的变量, 有的变量需要一个if语句来维护 (比如最大最小长度)
                    x = new_x
                    if condition:
                        y = new_y

                    '''
                    ------------- 下面是两种情况，读者请根据题意二选1 -------------
                    '''
                    # Step 4 - 情况1
                    # 如果题目的窗口长度固定：用一个if语句判断一下当前窗口长度是否达到了限定长度 
                    # 如果达到了，窗口左指针前移一个单位，从而保证下一次右指针右移时，窗口长度保持不变, 
                    # 左指针移动之前, 先更新Step 1定义的(部分或所有)维护变量 
                    if 窗口长度达到了限定长度:
                        # 更新 (部分或所有) 维护变量 
                        # 窗口左指针前移一个单位保证下一次右指针右移时窗口长度保持不变

                    # Step 4 - 情况2
                    # 如果题目的窗口长度可变: 这个时候一般涉及到窗口是否合法的问题
                    # 如果当前窗口不合法时, 用一个while去不断移动窗口左指针, 从而剔除非法元素直到窗口再次合法
                    # 在左指针移动之前更新Step 1定义的(部分或所有)维护变量 
                    while 不合法:
                        # 更新 (部分或所有) 维护变量 
                        # 不断移动窗口左指针直到窗口再次合法

                # Step 5: 返回答案
                return ...        
    ```
#### 1.无重复字符的最长子串
- **思路** :要注意几个点
    - 最长的：因此需要一个index记录长度
    - 不重复的：因此需要hashmap记录无重复串

- **代码实现**
    ```python :no-line-numbers
        class Solution(object):
            def lengthOfLongestSubstring(self, s):
                """
                :type s: str
                :rtype: int
                """
                max_len, hashmap = 0, {}

                start = 0
                for end in range(len(s)):
                    hashmap[s[end]] = hashmap.get(s[end], 0) + 1
                    if len(hashmap) == end - start + 1:
                        max_len = max(max_len, len(hashmap))
                
                    while end - start + 1 > len(hashmap):
                        head = s[start]
                        hashmap[head]-= 1
                        if hashmap[head] == 0:
                            del hashmap[head]
                        
                        start += 1
                return max_len


                
    ```