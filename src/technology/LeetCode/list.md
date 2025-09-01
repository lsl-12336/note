---
title: 数组
icon: book
order: 2
# breadcrumb: true
--- 

## 数组
- 数组是存放在连续内存空间上的相同类型数据的集合。
## 二分查找
- 适用于递增排列数组
- 二分查找的思路很简单，主要注意区间原则；
  - 左闭右闭：
    - 这里在最后一步，left=right是有意义的，因为在这个全闭合的状态下，是能出现left=right的情况，因此while条件需要while(left <= right);
    - 另外，while(num[mid] > target)时，因为right有意义，所以num[mid] > target是存在的，所以为mid-1
  - 左闭右开：
    - 这里在最后一步，left=right是没有意义的，因此while(left < right);
    - 另外，while(num[mid] > target)时，因为right没有意义，所以num[mid] > target是不存在的，所以为mid

### 1 搜索插入位置
 - 注意如果target不在，考虑插入位置
   -  在数组左边
   -  在数组右边
   -  在数组内部
   -  等于数组内部某个值
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

### 2 搜索二维矩阵
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
### 3 螺旋矩阵
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

## 双指针
- 通过一个快指针和慢指针在一个for循环下完成两个for循环的工作。
  - 双指针即快慢指针，一个指针用来解决问题，另一个指针指向新的需要实现的结果
  - 其实原理就是在能够用一个for完成两个for的事情，并且减小空间的消耗
### 移动零
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