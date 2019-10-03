---
title: "Building Github Pages with Jekyll"
date: 2019-10-03T15:34:30-04:00
categories: ml
tags: [programming, algorithms, datastructures]
excerpt: "Algorithms Hash"
classes: wide
---

마음에 드는 jekyll theme을 선택하고 터미널에서

```
gem install jekyll bundler
```

이렇게 했는데 자꾸 permission 관련 에러가 떠서

```
sudo gem install jekyll bundler
```

으로 bundler 설치한후에, theme 다운받은 폴더로 이동해서

```
bundle exec jekyll serve
```

실행하면 `http://localhost:4000`에서 서브된다.

로컬에서 변경사항 확인한 후에 github에 push
