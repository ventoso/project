---
title: Python绘图(turtle库)初探
date: 2020-02-05
sidebar: 'auto'
categories:
- Python
tags:
 - Python
---

## 超级语言

- 机器语言：
  - 一种二进制语言，直接使用二进制代码表达指令
  - 计算机硬件(cpu)可直接执行

- 汇编语言：
  - 是一种将二进制代码直接对应助记符的编程语言
  - 与具体cpu型号有关

机器语言并不适合编程

- 高级语言
  - 更接近自然语言，同时更容易描述计算机问题
  - 与具体型号无关，编译后运行

- 超级语言
  - 粘性整合已有程，具备强大的计算生态

  - 具有庞大的计算生态，可以利用已有的代码功能
  - 编程思维不再是刀耕火种，而是集成开发

python是世界上具有最强大的计算生态语言

# Python蟒蛇绘制实例

## 问题分析 

设计蟒蛇基本形状

问题一：计算机绘图的原理是什么

- 一段程序为什么可以形成窗口

问题二：如何绘制，怎么开始，流程？

与实例一不同

## 实例编写

```python
#PythonDraw.py
import turtle
turtle.setup(650, 350, 200, 200)
turtle.penup()
turtle.fd(-250)
turtle.pendown()
turtle.pensize(25)
turtle.pencolor("purple")
turtle.seth(-40)
for i in range(4):
    turtle.circle(40, 80)
    turtle.circle(-40, 80)
turtle.circle(40, 80/2)
turtle.fd(40)
turtle.circle(16, 180)
turtle.fd(40 * 2/3)
turtle.done()
```



```python
import turtle # 程序关键
```

import是保留字，引入了一个绘图库，名字叫`turtle`（海龟绘图）



- 举一反三
  - 理解蟒蛇绘制代码可以大致理解基本框架结构
  - 一些程序参数可以修改
  - 颜色，方向，长度
  - 蟒蛇绘制是各类绘图问题的代表





# turtle库的使用

## 基本介绍

turtle是turtle绘图体系的python体现

- turtle绘图体系：1969年诞生，主要用于程序入门
- Python的标准库之一
- 入门级的图形绘制函数库





---



- Python计算生态

  - 标准库：随着解释器直接安装到操作系统中的功能模块
  - 第三方库：需要经过安装才能使用的功能模块

  tips: 库Library,包Package,模块Module (暂时统称为模块)

  

> turtle原(wan)理(fa)

turtle（海龟）是一种真实存在的

有一只海龟，其实在窗体的正中心，在画布上游走

走过的轨迹就形成了绘制的图形



## turtle绘图窗体布局

窗体是turtle的一个画布空间

最小单位是像素

窗体的左上角是turtle绘图窗口的坐标原点

```python
turtle.setup(width, height, startx, starty)
```



- turtle.setup（）函数可以 设置窗体大小及位置
- 四个参数的后两个是可选的
- setup()函数不是必须的，不写时默认处于屏幕正中心

里面的宽度和高度指的是窗体本身的宽高

## turtle空间坐标体系

分海龟坐标和绝对坐标

#### 绝对坐标



- 绝对坐标：由窗体正中心为原点，构成的一个绝对坐标系，x轴向右延申，y轴向上延申

  - 可以利用空间坐标来控制画笔（海龟）的行进位置

  ```python
  turtle.goto( x, y) #函数参数应该填入以觉得坐标系为坐标系的对应坐标点，该函数可以控制海龟达到坐标位置
  ```



#### 海龟坐标



- 海龟坐标

  - 以海龟为坐标原点，当前新建方向为前进方向，反方向 为后退方向，左侧为左侧方向，右侧为右侧方向建立一个坐标系，就叫海龟坐标系
  - 因此，可以使用一些控制海龟的运动的函数

  ```python
  turtle.circle(r,angle) # 指的是以海龟当前的位置，左侧的某一个点为圆心，进行曲线运动
  turtle.bk(d) # 向海龟的后退方向运行
  turtle.fd(d) #指的是向海龟的正前方向运行
  ```

## turtle角度坐标体系

#### 绝对角度

在空间坐标体系中，形成了一个绝对坐标体系

- x轴正方向表示0/360度，y轴的正方向表示90/-270度，以此类推，就形成了一个绝对角度体系

- ```python
  turtle.seth(angle)
  ```

  - 可以使用seth()函数改变海龟行进方向
  - seth()只改变方向但不行进
  - angle为绝对度数

#### 海龟角度

- 为了更好的改变海龟运动的方向，从海龟坐标的角度，对于海龟的方向，可以使用左右的方式来改变

  - ```python
    turtle.left(angle)# 向左
    turtle.right(angle) # 向右
    ```

## RGB色彩体系

turtle库使用了计算机最常用的色彩体系：RGB

#### RGB色彩模式

由三种颜色构成万物色

- RGB指的是红蓝绿三个通道的颜色组合

- 覆盖视力所能感知到的所有颜色

- RGB没个通道的取值范围是0-255的整数或者0-1的小数

  - 数值类型切换：

  - ```python
    turtle.colormode(mode) 	# mode可填入 1.0和 255
    ```

    - 1.0：RGB小数值模式
    - 255 ：RGB小数值模式



# turtle语法元素分析

## 库引用与import

实例中大部分有很多

```python
turtle.
```

的形式

这是`<a>.<b>()的编码风格`

### 库引用

是扩充python程序功能的方式

- 使用`import`保留字完成，采用`<a>.<b>()`的编码风格

  - ```python
    import<库名>
    <库名>.<函数名>(<函数参数>)
    ```

- import的更多用法

  - 使用`from`和`import`保留字共同完成

```python
from<库名>import<函数名>
from<库名>import*
<库名>(<函数名>)
```

使用时就无需使用<库名>.<函数名>的格式了

```python
import <库名>
<库名>.<函数名>(<函数参数>)
# 是新程序中的函数名
```

不会出现函数名同名问题



```python
from<库名>import<函数名>
from<库名>import*
<函数名>(<函数参数>)
# 使用库中的函数的函数名就是独立的函数名
```

可能会出现函数名同名问题



- 其他方式（可能是最优）

  - ```python
    import<库名>as<库别名>
    <库别名>.<函数名>(<函数参数>)
    ```

    给调用的外部库关联一个更短，且更适合自己的一个名字

## turtle画笔控制函数

画笔操作后一直有效，一般成对出现

- turtle.penup()  别名：turtle.pu()
  - up，即抬起画笔，海龟在飞行，不在画布上留下痕迹
- turtle.pendown()   别名 ：turtle.pd()
  - 即落下画笔，让海龟爬行，在画布上留下痕迹





- turtle.pensize(width)   别名： turtle.width(width)
  - 画笔宽度，海龟的腰围
- turtle.pencolor(color) color为颜色字符串或r,g,b值
  - 画笔颜色，海龟在涂装
  - 参数表达有三种形式
    - 颜色字符串：turtle.pencolor("purple")
    - RGB的小数值：turtle.pencolor(0.63, 0.13, 0.94)
    - RGB的元组值：turtle.pencolor((0.63, 0.13, 0.94))



## 运动控制函数

该函数可控制海龟行进：走直线﹠走曲线

- turtle.forwad(d) 别名： turtle.fd(d)
  - 向前行进，海龟走直线
  - d：行进距离，可以为负数
- turtle.circle(r, extent=None)
  - 根据半径r绘制extent角度的弧度
  - r:默认圆心在海龟左侧r距离的位置
  - extent：绘制角度，默认是360度 整圆
  - 默认情况下圆心在海龟左手侧距离为r的地方

## 方向控制函数



控制海龟面对的方向：绝对角度﹠海龟角度

绝对：

- turtle.setheading(angle)  别名 ：turtle.seth(angle)
  - 改变行进方向，海龟走角度
  - angle ：改变行进方向，海龟走角度



海龟：

- tuetle.left(angle)
- turtle.right(angle)
  - angle:海龟在当前行进方向上旋转的角度

方向控制函数只改变海龟的方向



## 循环语句与range函数

- 循环语句
  - 按照一定次数循环执行一组语句

```python
for <变量> in range (<参数>)
	<被循环执行的语句>
```

- range的参数就是循环的次数
- <变量>表示每次循环的计数，0到<次数>-1

（略有迷惑......）

tips：print()函数中间参数用逗号隔开，输出结果会自带空格

- range() 函数：产生循环计数序列
  - range(N)
    - 产生0到N-1的整数序列，共N个
  - range(M,N)
    - 产生从M开始到N-1的整数序列，共N-M个

## 代码分析





```python
#PythonDraw.py
import tutle # 程序关键。
# 初始化
tutle.setup(650, 350, 200, 200)
turtle.penup()
turtle.fd(-250)
turtle.pendown()
# 画笔性质设置
turtle.pensize(25)
turtle.pencolor("purple")
turtle.seth(-40)
# 绘制启动
for i in range(4):
    turtle.circle(40, 80)
    turtle.circle(-40, 80)
turtle.circle(40, 80/2)
turtle.fd(40)
turtle.circle(16. 180)
turtle.fd(40)
turtle.fd(40 * 2/3)
turtle.done() #程序不会退出
```

