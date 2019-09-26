<h1>Quy trình làm việc nhóm  với git</h1>

1. Pork repo của nhóm về tài khoản github

* Vào link: https://github.com/vuggg/Group_2-design-the-user-interface
* Click vào Pork 

2. Clone về máy cá nhân

* Với máy đã cài git: chạy lệnh: `git clone https://github.com/vuggg/Group_2-design-the-user-interface.git`

3. vào thư mục Group_2-design-the-user-interface

    gõ lệnh: `git remote add upstream https://  github.com/[username]/Group_2-design-the-user-interface.git`

Ví du: link github: https://github.com/vuongdingo

thì gõ lệnh: `git remote add upstream https://  github.com/vuongdingo/Group_2-design-the-user-interface.git`



<h3>Trước khi code</h3>

gõ lệnh: `git pull` để lấy code mới nhất từ repo

<h3>Sau khi code</h3>

commit và  push lên repo của các bạn đã pork, rồi new pull request để mình merge code vào repo của nhóm.


<h3>Lưu ý</h3>

Nếu ai chưa cài git thì cài cài nha: https://git-scm.com/downloads


<h3>Quy ước chung khi up code</h3>

Do mọi người dùng CLI khác nhau nên quy ước chung là:

* Tất cả code được đặt trong thư mục `components`, style đặt trong thư mục `styles`

* commit cả package.json nếu có thêm libary mới.

![imga](https://i.imgur.com/GfDpuaB.jpg)