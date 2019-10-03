---
title: "Data Visualization"
date: 2019-10-03T12:00:00-04:00
categories: ml
tags: [datascience, machinelearning, datavisualization, matplotlib, seaborn]
excerpt: "Data visualization for machine learning"
classes: wide
author_profile: false
sidebar:
  nav: "Data Science"
---

# Matplotlib

Matplotlib is a 2D plotting library for the Python and its numerical mathematics extension NumPy. I highly recommend to install Matplotlib using **Anaconda**. [https://matplotlib.org](https://matplotlib.org)

## Importing Matplotlib

```
import matplotlib.pyplot as plt
%matplotlib inline
```
- `%matplotlib inline`
	- plotting 결과를 code셀 바로 밑에 출력
	- 그래프를 notebook 안에 포함되게 하는 magic function!

## Generating plot
```
plt.plot()  # 기본 Line plot 생성
** ADD EXTRA HERE **
plt.show()
```
- Add a title
```
plt.title('Title')
```
- Add labels
```
plt.xlabel('x', fontsize=14, color='red')  # x축 (fontsize, color 추가가능)
plt.ylabel('y')  # y축
```
- Add a legend
```
plt.legend()  # 범례추가
```
- x,y축의 min값, max값 정하기
```
plt.axis([0, 10, 0, 20])  # x축은 0~10, y축은 0~20
--- or ---
plt.xlim(0, 10)  # x축의 왼쪽은 0, 오른쪽은 10 (반대도 가능)
plt.ylim(0, 20)
```
- Grid
```
plt.grid(b=?, which='?', axis='?') 
```
	- b : True/False/None (grid 보일지말지)
	- which : major/minor/both (grid를 어떤 변화에 적용할지)
	- axis : both/x/y (grid를 어디축에 적용할지)

- Tick
```
plt.xticks(ticks=[?], labels=[?])
```
	- ticks : 표시할 ticks 위치가 담긴 list
	- labels : 각 tick의 라벨 담긴 list


## Plot 종류
**`()`안에 삽입할 args 목록** - plot제목 클릭하기

### [Scatter plot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.scatter.html)
```
plt.scatter()
```
![](https://matplotlib.org/_images/sphx_glr_scatter_demo2_001.png)

### [Histogram](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.hist.html)
```
plt.hist()
```
![](https://matplotlib.org/_images/sphx_glr_histogram_features_001.png)

### [Image](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.imshow.html)
```
plt.imshow()
```
![](https://matplotlib.org/_images/sphx_glr_image_demo_003.png)

### [Box plot](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.boxplot.html)
```
plt.boxplot()
```
![](https://matplotlib.org/_images/sphx_glr_boxplot_color_001.png)

### [Bar chart](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.bar.html)
```
plt.bar()
```
![](https://matplotlib.org/_images/sphx_glr_barchart_001.png)

### [Pie chart](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.pie.html)
```
plt.pie()
```
![](https://matplotlib.org/_images/sphx_glr_pie_features_001.png)


## Formatting the style of plot
- plotting style : 3rd argument = color & line type
	- color : `r` red, `g` green, `b` blue
	- line : `-` solid, `--` dashes, `-.` dashdotted, `:` dotted
	- marker : `.` point, `o` circle, `s` square, `^` triangle, `*` star, `+` plus, `x` x, `D` diamond

```
plt.plot(t, t, 'r--', t, t**2, 'bs', t, t**3, 'g^')
```
![](https://matplotlib.org/_images/sphx_glr_pyplot_004.png)


## Plotting with categorical variables
- `plt.figure` : 새로운 figure 생성
	- `figsize` : width, height (in inches)

- `plt.subplot` : 현재 figure에 subplot 추가
	- *args : 3자리 숫자 - row갯수, column갯수, index(1부터 시작)
	- sharex, sharey : x축,y축을 subplot들끼리 공유 - 각각 x,y축을 갖는게 아니라 하나의 x or y축만 표시됨
	- label : 각 subplot의 title

```
plt.figure(figsize=(9, 3))  # 가로 9인치 * 세로 3인치의 figure 생성

plt.subplot(131)  # row엔 1개, col엔 3개의 subplot중 1번째 subplot
plt.bar(names, values)
plt.subplot(132)  # 2번째 subplot
plt.scatter(names, values)
plt.subplot(133)  # 3번째 subplot
plt.plot(names, values)

plt.suptitle('Categorical Plotting')  # Centered title
plt.show() 
```
![](https://matplotlib.org/_images/sphx_glr_pyplot_006.png)

- Unpack the axes arrays
```
f, (ax1, ax2) = plt.subplots(1, 2, sharey=True)
f.suptitle('Sharing Y axis')
ax1.plot(x, y)
ax2.scatter(x, y)
```
![](https://matplotlib.org/_images/sphx_glr_subplots_demo_003.png)


