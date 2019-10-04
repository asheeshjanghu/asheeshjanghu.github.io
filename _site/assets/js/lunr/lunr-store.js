var store = [{
        "title": "NumPy for Machine Learning",
        "excerpt":"Why is NumPy important in Machine Learning? 많은 ML 알고리즘이 NumPy 기반으로 작성돼 있고, 이들 알고리즘의 입력 데이터와 출력 데이터를 넘파이 배열 타입으로 사용하기 때문입니다. import numpy as np 1. ndarray 넘파이의 기반 데이터 타입. ndarray를 이용해 넘파이에서 다차원 배열을 쉽게 생성하고 다양한 연산을 수행할 수 있습니다. np.array( ) ndarray로...","categories": ["ml"],
        "tags": ["datascience","machinelearning","numpy"],
        "url": "http://localhost:4000/ml/numpy/",
        "teaser":null},{
        "title": "Scikit-learn for Machine Learning",
        "excerpt":" ","categories": ["ml"],
        "tags": ["datascience","machinelearning","scikitlearn","sklearn"],
        "url": "http://localhost:4000/ml/scikitlearn/",
        "teaser":null},{
        "title": "Hosting on GitHub pages with Jekyll",
        "excerpt":"마음에 드는 jekyll theme을 선택하고 터미널에서   gem install jekyll bundler   이렇게 했는데 자꾸 permission 관련 에러가 떠서   sudo gem install jekyll bundler   으로 bundler 설치한후에, theme 다운받은 폴더로 이동해서   bundle exec jekyll serve   실행하면 http://localhost:4000에서 서브된다.   로컬에서 변경사항 확인한 후에 github에 push  ","categories": ["etc"],
        "tags": ["github","githubpage","jekyll"],
        "url": "http://localhost:4000/etc/jekyll/",
        "teaser":null},{
        "title": "Pandas for Machine Learning",
        "excerpt":"Pandas: Python에서 데이터처리를 위해 존재하는 가장 인기있는 라이브러리. 2차원 데이터를 효율적으로 가공/처리할 수 있는 다양하고 훌륭한 기능을 제공 Pandas의 핵심 객체 = DataFrame 여러 개의 행과 열로 이뤄진 2차원 데이터를 담는 데이터 구조체 Index : 개별 데이터를 고유하게 식별하는 key값. Series, DataFrame은 모두 Index를 key값으로 가지고 있습니다. Series : 열이...","categories": ["ml"],
        "tags": ["datascience","machinelearning","pandas"],
        "url": "http://localhost:4000/ml/pandas/",
        "teaser":null},{
        "title": "Data Visualization",
        "excerpt":"Matplotlib Matplotlib is a 2D plotting library for the Python and its numerical mathematics extension NumPy. I highly recommend to install Matplotlib using Anaconda. https://matplotlib.org Importing Matplotlib import matplotlib.pyplot as plt %matplotlib inline %matplotlib inline plotting 결과를 code셀 바로 밑에 출력 그래프를 notebook 안에 포함되게 하는 magic function! Generating plot...","categories": ["ml"],
        "tags": ["datascience","machinelearning","datavisualization","matplotlib","seaborn"],
        "url": "http://localhost:4000/ml/datavisualization/",
        "teaser":null},{
        "title": "Hash",
        "excerpt":"해시 중복원소 찾기 A = [a, b, c, a] B = [b, c, a] A엔 있고 B엔 없는 원소 찾아내기 or A원소 중 B에 있는건 빼기 (중복원소 허용.ex)A에 1이 2개있고 B엔 1개만 - 1개만빼줌) from collections import Counter def solution(A, B): answer = Counter(A) - Counter(B) return list(answer.keys())[0] Counter(A) =...","categories": ["algorithms"],
        "tags": ["programming","algorithms","datastructures"],
        "url": "http://localhost:4000/algorithms/hash/",
        "teaser":null},{
        "title": "Arrays",
        "excerpt":"문제 리스트     Arrays   2D Array   Dynamic Array   Left Rotation   Sparse Arrays   Array Manipulation   Arrays  ","categories": ["hr-datastructures"],
        "tags": ["programming","algorithms","datastructures","arrays"],
        "url": "http://localhost:4000/hr-datastructures/arrays/",
        "teaser":null}]
