window.ydoc_plugin_search_json = {
  "documents": [
    {
      "title": "ydoc",
      "content": "This is home page of documents book.",
      "url": "/documents/index.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/ops.html",
      "children": [
        {
          "title": "一面",
          "url": "/documents/ops.html#一面",
          "content": "一面简单介绍下自己\n说说做的最好的项目\n项目里有哪些难题，怎么解决\npython：浅拷贝和深拷贝的区别，怎么读取大文件\n赋值:用一个变量给另一个变量赋值，给内存对象加标签\n浅拷贝:创建一个新的组合对象，这个新对象与原对象共享内存中的子对象。\n深拷贝：创建一个新的组合对象，同时递归地拷贝所有子对象，新的组合对象与原对象没有任何关联。虽然实际上会共享不可变的子对象，但不影响它们的相互独立性。\n大文件：交给解释器，用with语句打开和关闭文件，包括抛出一个内部块异常。for line in f文件对象f视为一个迭代器，会自动的采用缓冲IO和内存管理，所以你不必担心大文件。\nwith open(...) as f:  　　for line in f:  \n　　　　process(line) \n数据库：图书馆数据库有两张表，图书信息Info和借还记录Record\n求id在25000到50000之间的书的信息\n表的数据量太大，做这个查询有什么隐患\n索引怎么建立？\n\n主键索引\n惟一值索引\n普通索引\ncreate unique index isbn on book(isbn(5))\n\n\n数据库引擎有什么了解\nMyIASM引擎是为了查和增加，效率高。所有功能都围绕这这个。\nInnodb引擎功能更强（事务等）效率低一些。\nhttps://blog.csdn.net/sjyttkl/article/details/76176836\nMyISAM：MyISAM是MySQL的ISAM扩展格式和缺省的数据库引擎。除了提供ISAM里所没有的索引和字段管理的大量功能，MyISAM还使用一种表格锁定的机制，来优化多个并发的读写操作，其代价是你需要经常运行OPTIMIZE TABLE命令，来恢复被更新机制所浪费的空间。MyISAM还有一些有用的扩展，例如用来修复数据库文件的MyISAMCHK工具和用来恢复浪费空间的 MyISAMPACK工具。MYISAM强调了快速读取操作，这可能就是为什么MySQL受到了WEB开发如此青睐的主要原因：在WEB开发中你所进行的大量数据操作都是读取操作。所以，大多数虚拟主机提供商和INTERNET平台提供商只允许使用MYISAM格式。MyISAM格式的一个重要缺陷就是不能在表损坏后恢复数据。\nInnoDB：InnoDB数据库引擎都是造就MySQL灵活性的技术的直接产品，这项技术就是MYSQL+API。在使用MYSQL的时候，你所面对的每一个挑战几乎都源于ISAM和MyISAM数据库引擎不支持事务处理（transaction process）也不支持外来键。尽管要比ISAM和 MyISAM引擎慢很多，但是InnoDB包括了对事务处理和外来键的支持，这两点都是前两个引擎所没有的。如前所述，如果你的设计需要这些特性中的一者 或者两者，那你就要被迫使用后两个引擎中的一个了。\nMyISAM与InnoDB的区别\n　　InnoDB和MyISAM是许多人在使用MySQL时最常用的两个表类型，这两个表类型各有优劣，视具体应用而定。基本的差别为：MyISAM类型不支持事务处理等高级处理，而InnoDB类型支持。MyISAM类型的表强调的是性能，其执行数度比InnoDB类型更快，但是不提供事务支持，而InnoDB提供事务支持以及外部键等高级数据库功能。\n一般来说，MyISAM适合：\n\n做很多count 的计算；\n插入不频繁，查询非常频繁；\n没有事务。\nInnoDB适合：\n可靠性要求比较高，或者要求事务；\n表更新和查询都相当的频繁，并且表锁定的机会比较大的情况指定数据引擎的创建\n\n\n数据量特别大的背景下，怎么去优化这个查询，解决安全隐患和提升速度），有哪些方案？（答的索引）\n查询速度慢的原因:\n\n没有索引或者没有用到索引（这是查询慢最常见的问题，是程序设计的缺陷）\nI/O 吞吐量小，形成了瓶颈效应。\n没有创建计算列导致查询不优化。\n内存不足\n网络速度慢\n查询出的数据量过大（可采用多次查询，其他的方法降低数据量）\n锁或者死锁（这是查询慢最常见的问题，是程序设计的缺陷）\nsp_lock,sp_who,活动的用户查看,原因是读写竞争资源。\n返回了不必要的行和列\n查询语句不好，没有优化\n\n\n优化查询:\n\n给字段选取合适的数据类型，如CHAR和VARCHAR\nBLOB和TEXT做删除或更新时会留下大空洞，要定期使用OPTMIZE TABLE来碎片整理，建议单独拿出来存储，或者根据MD5值建立索引来查找。\n使用NOT NULL，把数据列定义为非空，简化查询\n使用缓存查询，数据表更新后缓存查询变成无效，防止服务产生过期结果。\n\n\n安全性:\n\n防止sql注入,对特殊字符进行转译与过滤,使用sql语句绑定变量\n最小用户权限设置,最好不要使用root用户连接数据库\n当sql运行出错的时候,不要将错误信息全部显示给用户\n\n\n表里面有大量重复数据（id相同），有什么办法去做优化？\nMySQL有一个独有的 alter ignore add unique index的语法。\nALTER [ONLINE | OFFLINE] [IGNORE] TABLE tbl_name\n行为类似于insert ignore，即遇到冲突的unique数据则直接抛弃而不报错。对于加唯一索引的情况来说就是建一张空表，然后加上唯一索引，将老数据用insert ignore语法插入到新表中，遇到冲突则抛弃数据。alter ignore的语法不支持innodb，所以需要把table的引擎改为MyISAM;\n解决方案\nALTER TABLE tableA ENGINE MyISAM;   /*注意：修改表结构为MyISAM */  ALTER IGNORE TABLE tableA ADD UNIQUE INDEX idx_col1_u (col1); /*添加唯一索引，消重*/  \nALTER TABLE table ENGINE InnoDB;    /*可选，修改表结构为InnoDB */\n进程和线程有什么不一样。\n进程线程的区别：\n地址空间：同一进程的线程共享本进程的地址空间，而进程之间则是独立的地址空间。\n资源拥有：同一进程内的线程共享本进程的资源如内存、I/O、cpu等，但是进程之间的资源是独立的。\n一个进程崩溃后，在保护模式下不会对其他进程产生影响，但是一个线程崩溃整个进程都死掉。所以多进程要比多线程健壮。\n进程切换时，消耗的资源大，效率高。所以涉及到频繁的切换时，使用线程要好于进程。同样如果要求同时进行并且又要共享某些变量的并发操作，只能用线程不能用进程。\n如果B和D去竞争同一个资源，应该加什么锁？进程锁还是线程锁还是数据库锁？为什么？\n\n新建线程之后,开启start的那一瞬间:线程对象会进入可调度线程池中\nstart开始之后,线程会在就绪和运行两个状态中来回切换(CPU调用哪个线程, 哪个线程就是运行状态,可调度线程池中的其他线程则为就绪状态)\nstart之后如果调用了sleep或同步锁等方法造成线程阻塞的时候,该线程会被移出可调度线程池,阻塞结束后线程会重新进入可调度线程池\n线程结束,或异常退出时候这条线程进入死亡状态,线程死亡后不可以再次接受start消息,也就是说线程不能再重新开启\n一块资源可能会被多个线程共享,当多个线程访问同一块资源的时候,会发生数据错乱或数据安全的问题。\n\n\n隐患的解决办法:加互斥锁\n\n第一个线程调用资源的时候先去看一下资源有没有被锁\n如果没有就去调用资源并对资源加锁,调用结束之后再解锁\n第二条线程调用资源的时候也先去看一下资源有没有被锁,如果发现有锁,就进入阻塞状态,\n直到资源解锁之后自己在调用,而第二条线程调用的时候继续给资源加锁,并在调用完成后解锁\n\n\n关于进程和线程:1.进程与线程\n进程：具有独立功能的程序关于某个数据集合上的一次运行活动。\n线程：进程的一个实体。\n比喻：一列火车是一个进程，火车的每一节车厢是线程。2.进程与线程的联系①一个线程只能属于一个进程，一个进程可以有多个线程；\n②系统资源分配给进程，同一进程的所有线程共享该进程的所有资源；\n③真正在处理机上运行的是线程；\n④不同进程的线程间利用消息通信的方式实现同步。3.进程与线程的区别①调度：线程是系统调度和分配的基本单位，进程是作为拥有系统资源的基本单位；\n②并发性：进程之间可以并发执行，同一进程的多个线程时间亦可以并发执行；\n③拥有资源：进程是拥有资源的独立单位，线程不拥有资源，但可以访问隶属于进程的资源；\n④系统开销：创建和撤销进程的开销更大；进程拥有独立的地址空间，一个进程的崩溃不会影响其他进程；线程拥有自己的堆栈和局部变量，没有独立的地址空间，因此进程里的一个线程崩溃会导致其他线程均崩溃。4.进程间通信方式进程间通信方式有很多，网上一说有十几种。面试的时候说上以下几种差不多：\n①管道：半双工的通信方式，数据只能单向流动，且只能在有亲缘关系（父子进程或兄弟进程）的进程间使用；\n②命名管道：FIFO，半双工的通信方式，但允许在无亲缘关系的进程间通信；\n③消息队列：消息的链表，存放在内核中，并由消息队列标识符标识。消息队列克服了信号传递信息少、管道只能承载无格式字节流以及缓冲区大小受限等缺点；\n④信号量：是一个计数器，用于控制多个进程间对共享资源的访问；\n⑤共享内存：映射一段能被其他进程访问的内存，这段内存由一个进程创建，但多个进程都可以访问；\n⑥套接字5.线程间通信方式多个线程在处理同一个资源，并且任务不同时，需要线程通信来帮助解决线程之间对同一个变量的使用或操作。就是多个线程在操作同一份数据时， 避免对同一共享变量的争夺。\n①锁机制：包括互斥锁、条件变量、读写锁\n互斥锁提供了以排他方式防止数据结构被并发修改的方法。\n读写锁允许多个线程同时读共享数据，而对写操作是互斥的。\n条件变量可以以原子的方式阻塞进程，直到某个特定条件为真为止。对条件的测试是在互斥锁的保护下进行的。条件变量始终与互斥锁一起使用。\n②信号量机制(Semaphore)：包括无名线程信号量和命名线程信号量\n③信号机制(Signal)：类似进程间的信号处理\n线程间的通信目的主要是用于线程同步，所以线程没有像进程通信中的用于数据交换的通信机制。"
        },
        {
          "title": "二面",
          "url": "/documents/ops.html#二面",
          "content": "二面Linux：linux下怎么关闭一个进程\nps查找PID号，然后kill PID\n要删除/tmp下大于1GB的文件\nfind /tmp -type f -size +1048576k -exec rm -f {} \\;现在有很多跟MySQL相关的进程，进程名都是MySQL开头的，怎么把这些进程找出来并且关掉\n# ps -ef | grep xxx + kill -9 PID\n数据库：\nleft outer join跟join有什么区别\n没区别\nleft join的同时想要加过滤条件，加在on子句还是where子句\n跟在ON 后面的条件是对参与左联接的数据进行筛选，即在左联接之前起作用。\n跟在WHERE后的条件是对左联接得到的结果集进行筛选，即在左联接之后起作用。\n针对单表字段构成的筛选条件这种情况，最好的做法是直接将条件放到WHERE子句中。\npython有哪些数据类型\n数字：int类，\n布尔值：bool类\n字符串：str类\n列表：list类\n元组：tuple类\n字典：dict类\n集合：set类\npython中int类型的数占几个字节\nsys.getsizeof(0) 数组元素为0。此时占用24字节（PyObject_VAR_HEAD 的大小）。 sys.getsizeof(456) 需使用一个元素，因此多了4个字节（28）。\n数据库：\n现在有个200TB的数据，要求响应时间在200ms以内，怎么去做查询（答的索引）\n现在有200GB的txt数据，内存64GB的服务器，要有一个API去做数据的查询，要求响应时间在200ms以内，怎么考虑？\n说说web服务器怎么处理千万级并发的访问（比如同时加载QQ头像），从接入层到逻辑层来讲讲\n思路：\n\nHTML静态化\n图片服务器分离\n数据库集群、库表散列\n我们在应用程序中安装业务和应用或者功能模块将数据库进行分离，不同的模块对应不同的数据库或者表，再按照一定的策略对某个页面或者功能进行更小的数据库散列，比如用户表，按照用户ID进行表散列，这样就能够低成本的提升系统的性能并且有很好的扩展性。\n缓存\n镜像\n负载均衡 硬件四层交换 软件四层交换\nCDN加速技术\nCDN有别于镜像，因为它比镜像更智能，或者可以做这样一个比喻：CDN=更智能的镜像+缓存+流量导流。因而，CDN可以明显提高Internet网络中信息流动的效率。从技术上全面解决由于网络带宽小、用户访问量大、网点分布不均等问题，提高用户访问网站的响应速度。\n计网：\n\n\n讲讲UDP的包最多可以发多少数据\nUDP 包的大小就应该是 1500 - IP头(20) - UDP头(8) = 1472(Bytes)\nTCP 包的大小就应该是 1500 - IP头(20) - TCP头(20) = 1460 (Bytes)\nTCP跟UDP相比，为什么更可靠\nTCP的可靠体现在TCP在传递数据之前，会有三次握手来建立连接，而且在数据传递时，有确认、窗口、重传、拥塞控制机制，在数据传完后，还会断开连接用来节约系统资源。\n讲讲XSS攻击的定义，以及怎么去防御\nCSS(Cross-Site Scripting)，跨站脚本攻击。XSS攻击就是攻击者通过各种办法，在用户访问的网页中插入自己的脚本，让其在用户访问网页时在其浏览器中进行执行。攻击者通过插入的脚本的执行，来获得用户的信息，比如cookie，发送到攻击者自己的网站(跨站了)。XSS可以分为反射型XSS和持久性XSS，还有DOM Based XSS。(一句话，XSS就是在用户的浏览器中执行攻击者自己定制的脚本。)\nXSS防御的总体思路是：对输入(和URL参数)进行过滤，对输出进行编码。\n\n对提交的所有内容进行过滤，对url中的参数进行过滤，过滤掉会导致脚本执行的相关内容；然后对动态输出到页面的内容进行html编码，使脚本无法在浏览器中执行。虽然对输入过滤可以被绕过，但是也还是会拦截很大一部分的XSS攻击。\n对于输入，处理使用XSS filter之外，对于每一个输入，在客户端和服务器端还要进行各种验证，验证是否合法字符，长度是否合法，格式是否正确。在客户端和服务端都要进行验证，因为客户端的验证很容易被绕过。其实这种验证也分为了黑名单和白名单。黑名单的验证就是不能出现某些字符，白名单的验证就是只能出现某些字符。尽量使用白名单。\n对输出进行编码。在输出数据之前对潜在的威胁的字符进行编码、转义是防御XSS攻击十分有效的措施。如果使用好的话，理论上是可以防御住所有的XSS攻击的。\n\n\n讲讲DDOS攻击，以及怎么防御\nDDOS：分布式拒绝服务，在短时间内发起大量请求，耗尽服务器的资源，无法响应正常的访问，造成网站实质下线。\n常见攻击：利用不断对网站发送连接请求致使形成拒绝服务的目的。业界赋予这种攻击名称为CC（Challenge Collapsar，挑战黑洞）\n防御方法：\n\n备份网站，静态浏览，显示公告\nHTTP请求的拦截，架设防火墙，封IP段， User Agent字段有特征就针对拦截\n带宽扩容，有大量冗余带宽，短时间内急剧扩容，消化DDOS\nCDN。网站域名指向高防IP，它提供一个缓冲层，清洗流量，并对源服务器的内容进行缓存。上了CDN，千万不要泄露源服务器的IP地址。\n\n\n问了jvm内存回收是怎么回事数据结构线性表和链表区别，堆和栈区别，hash是什么，怎么解决冲突。\n线性表:用一段连续的存储单元依次存储线性表的数据元素\n链表:采用链式存储结构，用一组任意的存储单元存放线性表的元素\n1）当线性表需要频繁查找，较少插入和删除时，宜采用顺序存储结构。若需要频繁插入和删除，宜采用单链表。\n2）当线性表的元素个数变化较大或不确定时，最好用单链表，这样不需要考虑存储空间大小问题。当事先知道线性表的大小长度，用顺序存储结构效率会高一些。\n堆: 可以理解为二叉树的一种，是节点间有序关系的完全二叉树，所以可以用数组来表示。\n栈:具有后进先出性质的数据结构，也就是说后存放的先取，先存放的后取。\nhash:散列，在加密方面，Hash哈希是把一些不同长度的信息转化成杂乱的128位的编码,这些编码值叫做HASH值\n开放散列（open hashing）/ 拉链法（针对桶链结构）\n1）优点： ①对于记录总数频繁可变的情况，处理的比较好（也就是避免了动态调整的开销） ②由于记录存储在结点中，而结点是动态分配，不会造成内存的浪费，所以尤其适合那种记录本身尺寸（size）很大的情况，因为此时指针的开销可以忽略不计了 ③删除记录时，比较方便，直接通过指针操作即可\n2）缺点： ①存储的记录是随机分布在内存中的，这样在查询记录时，相比结构紧凑的数据类型（比如数组），哈希表的跳转访问会带来额外的时间开销 ②如果所有的 key-value 对是可以提前预知，并之后不会发生变化时（即不允许插入和删除），可以人为创建一个不会产生冲突的完美哈希函数（perfect hash function），此时封闭散列的性能将远高于开放散列 ③由于使用指针，记录不容易进行序列化（serialize）操作\n封闭散列（closed hashing）/ 开放定址法\n1）优点： ①记录更容易进行序列化（serialize）操作 ②如果记录总数可以预知，可以创建完美哈希函数，此时处理数据的效率是非常高的\n2）缺点： ①存储记录的数目不能超过桶数组的长度，如果超过就需要扩容，而扩容会导致某次操作的时间成本飙升，这在实时或者交互式应用中可能会是一个严重的缺陷 ②使用探测序列，有可能其计算的时间成本过高，导致哈希表的处理性能降低 ③由于记录是存放在桶数组中的，而桶数组必然存在空槽，所以当记录本身尺寸（size）很大并且记录总数规模很大时，空槽占用的空间会导致明显的内存浪费 ④删除记录时，比较麻烦。比如需要删除记录a，记录b是在a之后插入桶数组的，但是和记录a有冲突，是通过探测序列再次跳转找到的地址，所以如果直接删除a，a的位置变为空槽，而空槽是查询记录失败的终止条件，这样会导致记录b在a的位置重新插入数据前不可见，所以不能直接删除a，而是设置删除标记。这就需要额外的空间和操作。\n操作系统进程是什么，线程是什么，区别，虚拟内存是什么，物理内存是什么，区别，还问了一个什么问题我一直没听清，估计他也听恼火的就过了。。。\n计算机网络tcp和udp区别，tcp怎么连接，怎么释放连接，为什么要四次挥手mysql用过吗？用的什么引擎，innodb有什么特点给我讲讲排序算法有哪些比较排序：涉及知识：分治法：将一个问题分解成规模更小、结构相似的子问题，解决问题A，变成了解决问题A1和A2，解决问题A1变成了解决问题A11和A12。。。，一直到最小单元，当最小单元问题解决后，依次向上返回，问题A得以解决。因为问题和子问题之间解决思路是相似的，所以解决时会调用相同的程序体，表现为问题调用自己解决子问题，而结果则是从最小单元依次向上返回，称之为递归。在递归过程中，子问题的规模不断在缩小。\n插入排序：在已排序好的序列中，给要插入元素找到并空出应在位置，并插入该元素。\n\n\n合并排序：将排序分解为合并两个内部已排好序的子序列的问题，表现为先排序分拆的子序列再递归合并。\n\n\n冒泡排序：每次必将一个最大或最小元素像水中气泡一样，升到最高水面（放在序列最前面），关键：在冒泡的过程中，顺便会交换排序不对的两个相邻元素，这点与选择排序不同。例：3，2，6，5，4，在4冒泡时，会将4放置到6的前面，然后再让2冒泡；而选择排序只会对比得出4大于2，让2放到最前，4的位置不变化。\n\n\n堆排序：利用最大/小堆的所有子树根节点的值都是最值的特点，建立堆，取根节点，对剩余元素继续建立堆，通过此过程实现排序。\n\n\n快速排序：使用一个分界点，将一个序列分成小于和大于分界点的两个子序列（子序列内部并未排序），表现为先设置分界点划分两个序列，再递归排序每个子序列。\n\n非比较排序：涉及知识：稳定排序：进行排序的相等元素，在输入和输出时的相对位置保持不变。\n计数排序：记录每个元素出现的次数，计算得出每个元素应该在的位置。该排序方法要求知道排序元素是那些，才可实现对这些元素进行计数。该排序可以是稳定排序。\n\n\n基数排序：从低位向高位逐列排序。低位排出一个顺序，如果高位不能改（相等），那么保持顺序不变（所以高位排序要求是稳定排序），如果高位能改，那么按照高位改变排序。由低向高排序的原因，由高向低排序时，低位无权修改高位的排序，因为需要数据按照高位的值分成不同部分（1的在一起，2的在一起。。。，避免低位修改了高位排序），再在每个部分内部进行低位排序。\n\n\n桶排序：通过对比元素和桶基数，将元素散布到多个桶中，（也是一种hash算法），再将桶内元素排序，即可实现排序。\n解释一下快速排序:\n通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列。\n\n运营开发是大概做什么的了。做的是大数据方面的应用，数据采集，数据处理，数据存储，数据分析，数据结果平台展现。linux查看内存，cpu占用命令？top\n端口占用命令？\nlsof -i:端口号\n会mysql吗？说一下他的引擎\n\n\n会进程和线程吗？说说他们的区别\n\n\n线程占用资源吗？\n\n\n写一个线程池\n\nimport queueimport threading\nimport time\n\nclass ThreadPool(object):  #创建线程池类\n\n    def __init__(self, max_num=20):  #创建一个最大长度为20的队列\n        self.queue = queue.Queue(max_num)  #创建一个队列\n        for i in range(max_num):  #循环把线程对象加入到队列中\n            self.queue.put(threading.Thread)  #把线程的类名放进去，执行完这个Queue\n\n    def get_thread(self):  #定义方法从队列里获取线程\n        return self.queue.get()  #在队列中获取值\n\n    def add_thread(self):  #线程执行完任务后，在队列里添加线程\n        self.queue.put(threading.Thread)\n\ndef func(pool,a1):\n    time.sleep(1)\n    print(a1)\n    pool.add_thread()  #线程执行完任务后，队列里再加一个线程\n\np = ThreadPool(10)  #执行init方法；  一次最多执行10个线程\n\nfor i in range(100):\n    thread = p.get_thread()  #线程池10个线程，每一次循环拿走一个拿到类名，没有就等待\n    t = thread(target=func, args=(p, i,))  #创建线程；  线程执行func函数的这个任务；args是给函数传入参数\n    t.start()  #激活线程\n\n快速排序和堆排序时间复杂度一样，为什么一般用快速排序\n“堆排序(Heapsort)是指利用堆积树（堆）这种数据结构所设计的一种排序算法”，时间复杂度是O(NlogN)，是基于关键字比较排序算法里比较理想的排序算法（另个是快速排序），空间复杂度O(1).\n堆分为最大堆和最小堆，最大堆的根节点最大，最小堆的根节点最小；最大堆用于递增堆排序，最小堆用于递减堆排序，下文提到的堆是指最大堆。\n堆排序的实现可以分为两个子算法：初始建堆和进行堆排序\n快排：数组中交换数据，在数据量不是特别大，而且离散程度较高的情况下效率很高\n堆排序：创建堆，数据交换，调整堆的时间均很多\n所以在实际应用中，我们用快排会更多一点。\n\n\n写一下单例设计模式\n核心结构中只包含一个被称为单例的特殊类。通过单例模式可以保证系统中，应用该模式的类一个类只有一个实例。即一个类只有一个对象实例。\n\n\n如何检测sql语句的运行时间\nshow variables like \"%pro%\"\nset profiling = 1;\n\nset @d=now();select * from comment;\nselect timestampdiff(second,@d,now());\n\n什么是存储过程\n存储过程是数据库服务器端的一段程序，它有两种类型。一种类似于SELECT查询，用于检索数据，检索到的数据能够以数据集的形式返回给客户。另一种类似于INSERT或DELETE查询，它不返回数据，只是执行一个动作。有的服务器允许同一个存储过程既可以返回数据又可以执行动作。\n\n\n说一说线程安全\n代码所在的进程中有多个线程在同时运行，而这些线程可能会同时运行这段代码。如果每次运行结果和单线程运行的结果是一样的，而且其他的变量的值也和预期的是一样的，就是线程安全的。\n\n\n说一说gc\nPython中的垃圾回收是以引用计数为主，分代收集为辅。引用计数的缺陷是循环引用的问题。\n在Python中，如果一个对象的引用数为0，Python虚拟机就会回收这个对象的内存。\n\n\n你觉得python跟java的区别\n1.Python比Java简单，学习成本低，开发效率高\n2.Java运行效率高于Python，尤其是纯Python开发的程序，效率极低\n3.Java相关资料多，尤其是中文资料\n4.Java版本比较稳定，Python2和3不兼容导致大量类库失效\n5.Java开发偏向于软件工程，团队协同，Python更适合小型开发\n6.Java偏向于商业开发，Python适合于数据分析\n7.Java是一种静态类型语言，Python是一种动态类型语言\n8.Java中的所有变量需要先声明（类型）才能使用，Python中的变量不需要声明类型\n9.Java编译以后才能运行，Python直接就可以运行；\n10.JAVA 里的块用大括号对包括，Python 以冒号 + 四个空格缩进表示。\n11.JAVA 的类型要声明，Python 的类型不需要。\n12.JAVA 每行语句以分号结束，Python 可以不写分号。\n13.实现同一功能时，JAVA 要敲的键盘次数一般要比 Python 多。\n\n"
        }
      ]
    },
    {
      "title": "Introduction",
      "content": "Introduction",
      "url": "/documents/intro.html",
      "children": [
        {
          "title": "title",
          "url": "/documents/intro.html#title",
          "content": "titlecontent"
        }
      ]
    },
    {
      "title": "env",
      "content": "env",
      "url": "/documents/env.html",
      "children": [
        {
          "title": "title",
          "url": "/documents/env.html#title",
          "content": "titlecontent"
        },
        {
          "title": "sub-title",
          "url": "/documents/env.html#title-sub-title",
          "content": "sub-titlecontent"
        }
      ]
    }
  ]
}