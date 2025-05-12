---
title: 巫师笔记
icon: lightbulb
---

## 如何用ACR进行精确白平衡调整

### **RAW和JPG**
当光线照在传感器上，相机会把光线的强度转换为电子信号，传到传感器上，形成一张**黑白**的照片，如果在光路中插入**红色、蓝色、绿色**的滤镜，传感器会将这三种滤镜通过后期合成，形成一张**彩色**的照片。

<img src="/image/photo/1.png" alt="RAW和JPG的区别" width="500" style="display: block; margin: 0 auto;">

- RAW：未经处理的原始数据，raw就存储了最**原始的三色**的数据。
- JPG：将黑白和三色融合在一起了，并且**不可逆**，因此想要调整颜色偏差，raw是最好的调整。

如果我们有一张色偏的图片，用**RAW**矫正很容易能够矫正回来，但是用**JPG**得到一张色彩失真的图片。

<img src="/image/photo/2.png" alt="RAW和JPG矫正失真图片" width="500" style="display: block; margin: 0 auto;">

### **像素点**
现在我们打开一个拾色器，可以看到，每个**像素点**有三个参数即：**亮度（B）、饱和度（S）、色相（H）**。

- HSB
  - H色相、S饱和度、B亮度
- Lab
  - L亮度、a色相、b饱和度
- RGB
  - R红、G绿、B蓝

因此画面中任何一个像素，其实是一个**三维向量**，但是其中有一维度，可以理解为亮度，其余二维**控制**像素的颜色。

<img src="/image/photo/3.png" alt="照片像素" width="500" style="display: block; margin: 0 auto;">   

而在PS-ACR中，是采用两个参数来描述照片颜色的：色温和色调，把其想象成一个二维坐标，选择不同的色温和色调的点，可以描述**任何一种颜色**：
- 色温：蓝色和黄色
- 色调：绿色和洋红色

### **白平衡的纠正**
在PS的ACR中，使用**白平衡吸管**，在图中任何一处你认为原本应该是**白色的地方**，点击鼠标左键，ACR会自动将白平衡进行矫正，得到原始的正确的白平衡。

:::tip
注：这里的**白色**指的是中性灰，即白色到黑色之间任何一个色段
:::

#### 示例一：基本白平衡调整
下图是用吸管工具一键调整白平衡，左右分别是调整前和调整后：

<img src="/image/photo/5.png" alt="照片像素" width="400" style="display: inline-block; margin-right: 20px;">
<img src="/image/photo/4.png" alt="照片像素" width="400" style="display: inline-block;">

#### 示例二：使用书包作为参考
接下来，我们再看一张图，使用的是小女孩面前的**书包**作为纠正，注意，**不能使用头发**，因为头发可能是棕色的：

<img src="/image/photo/6.png" alt="照片像素" width="400" style="display: inline-block; margin-right: 20px;">
<img src="/image/photo/7.png" alt="照片像素" width="400" style="display: inline-block;">

#### 示例三：复杂场景的处理
最后我们看一个复杂场景的例子。下图可以看到，斑马线是白色的，但其实斑马线被红绿灯照射，在照片里面已经不是白色，因此用斑马线进行白平衡调整会失真。由于图片中的色彩太多，此时只能手动调整色温和色调：

<img src="/image/photo/8.png" alt="照片像素" width="400" style="display: inline-block; margin-right: 20px;">
<img src="/image/photo/9.png" alt="照片像素" width="400" style="display: inline-block;">