<html lang="en"><head>
    <meta charset="UTF-8">
    <title></title>
<style id="system" type="text/css">h1,h2,h3,h4,h5,h6,p,blockquote {    margin: 0;    padding: 0;}body {    font-family: "Helvetica Neue", Helvetica, "Hiragino Sans GB", Arial, sans-serif;    font-size: 13px;    line-height: 18px;    color: #737373;    margin: 10px 13px 10px 13px;}a {    color: #0069d6;}a:hover {    color: #0050a3;    text-decoration: none;}a img {    border: none;}p {    margin-bottom: 9px;}h1,h2,h3,h4,h5,h6 {    color: #404040;    line-height: 36px;}h1 {    margin-bottom: 18px;    font-size: 30px;}h2 {    font-size: 24px;}h3 {    font-size: 18px;}h4 {    font-size: 16px;}h5 {    font-size: 14px;}h6 {    font-size: 13px;}hr {    margin: 0 0 19px;    border: 0;    border-bottom: 1px solid #ccc;}blockquote {    padding: 13px 13px 21px 15px;    margin-bottom: 18px;    font-family:georgia,serif;    font-style: italic;}blockquote:before {    content:"C";    font-size:40px;    margin-left:-10px;    font-family:georgia,serif;    color:#eee;}blockquote p {    font-size: 14px;    font-weight: 300;    line-height: 18px;    margin-bottom: 0;    font-style: italic;}code, pre {    font-family: Monaco, Andale Mono, Courier New, monospace;}code {    background-color: #fee9cc;    color: rgba(0, 0, 0, 0.75);    padding: 1px 3px;    font-size: 12px;    -webkit-border-radius: 3px;    -moz-border-radius: 3px;    border-radius: 3px;}pre {    display: block;    padding: 14px;    margin: 0 0 18px;    line-height: 16px;    font-size: 11px;    border: 1px solid #d9d9d9;    white-space: pre-wrap;    word-wrap: break-word;}pre code {    background-color: #fff;    color:#737373;    font-size: 11px;    padding: 0;}@media screen and (min-width: 768px) {    body {        width: 748px;        margin:10px auto;    }}</style><style id="custom" type="text/css"></style></head>
<body marginheight="0"><h2>717食品安全商城</h2>
<h3>项目职责：</h3>
<pre><code> 1、页面排版：负责使用html5和css3完成页面布局；
 2、搭建大框架：用vue2.0脚手架来搭建最外层框架、使用vue路由进行跳转(可以传参数)；
 3、页面数据的更新：使用Vuex储存大型数据（并缓存在本地）；
 4、图片轮播：使用第三方插件Swiper进行banner的图片轮播；
 5、组件开发：使用组件化开发有利于其它地方重复使用,减少内存消耗；
 6、数据渲染：使用axios完成数据请求和页面渲染；
 7、购物车：购物车页面的渲染及逻辑运算；</code></pre>
<h3>项目描述：</h3>
<p>   717食品安全商城是一款电商平台，通过互联网平台进行交易，实现资源精准匹配。提高行业交易率，安全率，相比较淘宝比较大型的电商平台，该电商平台不需要注册就可以实现加入购物车并购买。该电商平台最突出的另一个功能是“溯源查询”，消费者使用手机扫描产品包装上的二维码可以快速查看该产品的生产过程、生产环境、实时视频信息，监管部门还可以追根溯源，在一定程度上保障食品的安全。

</p>
<h3>项目实现：</h3>
<pre><code>1、首页效果
    1-1、使用scroll加载数据（当页面接近底部50px的时候进行再次请求数据，实现下拉加载）
    1-2、路由切换
    1-3、点击商品进入详情，并把商品具体信息渲染到页面，（实现方式通过路由并和存在vuex的数据比较id，匹配就渲染到页面）
    1-4、点击购物车加入购物车并渲染到购物车页面，购物车逻辑运算，数量的增减以及总价的计算，（操作vuex数据）
    1-5、当购物车页面的商品选中时点击结算进入结算页面（条件判断）
    1-6、点击天天特惠进入优惠页面，路由跳转并传参，进入特惠页面实现Tab切换点击项高亮，并加载相应的内容，点击购买进入详情页并可以加入购物车购买，所有商品在详情页都可以追根溯源查看商品的生产过程及生产环境，让消费者安全放心购买，这是这个电商平台的最突出功能
    1-7、搜索页面的跳转  当Input框获取焦点时跳转搜索页面，(需要把搜索的记录在localStorage并把搜索记录取出来渲染到页面) 

2、分页效果
    2-1、Tab切换（数据渲染页面，点击相应的传该项的索引去渲染与之相关的产品，点击图片进入该类型的所有产品，并过滤排序）
    2-2、搜索页面的跳转  当Input框获取焦点时跳转搜索页面，(需要把搜索的记录在localStorage并把搜索记录取出来渲染到页面   

3、购物车效果
    3-1、进入页面首先取出存在localStorage的加入购物车产品，没有数据的话页面显示购物车为空，可以点击进入首页；有值的话，遍历循环渲染购物车页面
    3-2、购物车产品选中的状态下计算价格，而且要储存在vuex里，页面刷新或者下次进入页面不会置零
    3-3、购物车点编辑按钮时可以进行删除操作，（选中的情况下可以删除，并且要删除localStorage里存储的产品） 
    3-4、选中商品结算进入订单支付，将数据发送给订单支付页
    3-5、进入订单支付页面时，检测地址是否存在，不存在调用弹出框插件，存在的话可以修改默认地址，点击地址那一部分，增加地址，也可以对之前的地址进行编辑删除操作，在此之前要做的操作是将消费者填的所有地址的信息存储在vuex,并且存在localStorage缓存中在地址页面从本地缓存中取出来并渲染到页面，编辑删除都是在做vuex里存的地址信息，设置默认地址的时候设置一个开关每次保存时就自动设置成默认为true，遍历地址信息，其他的都设置为false,需要传索引，如果是添加的话就是数组的长度-1，如果点击的话，就把当前索引传过去开关置为true。
    3-5、全选，当全选被选中时购物车每一项高亮显示，有一项为false是，全选高亮也不显示,实现思路，遍历所有项，当全选选中，每一项都置为true。如果有一项不选中，设置一个初始变量num,每一项为true时，num++,当num&gt;所有项的长度时，全选的true=每一项的true,否则取反。

4、我的
    4-1、用户注册，用户登录，退出登录，通过用户填写的信息判断该用户是否已经注册，如果注册过可以登录，没有注册提示用户先进行注册，然后才可以登录，要把登录的信息存在vuex和localStorage,在用户设置里可以去取来渲染到页面，退出登录要从缓存中删除，用户名也要清空
    4-2、地址管理（路由跳转）
    4-3、设置（可以设置头像，设置账号以及管理手机号）</code></pre>
<h3>项目总结</h3>
<pre><code>####项目中遇到的问题
    1、下拉加载数据，scroll事件不触发，以及请求数据
    2、设置默认地址会出现两个默认地址
    3、购物车产品渲染时会出现重复的
    4、router-link跳转路由底部footer是固定的，但是根据页面需求，像订单支付页面、收货地址、添加收货地址页面不需要有footer

#####问题解决
    1、采用事件委托加在window上，也没触发，后来经过检查是元素冲突了，然后加在出滚动条的那个元素之上就触发了。当接近底部的时候再次请求数据，这样减少性能消耗。
    2、设置个变量，遍历所有地址信息，先把地址信息的这个变量设置为false，当保存时就直接设为默认地址，push到数组后，在vuex进行操作信息数据，传索引，如果是新添加的地址为默认，那当前索引就是数组的长度减1,如果在地址页面选择默认地址，就把当前点击的索引传到vuex,commit设置默认方法
    3、去重的方法，当有重复的产品时只让数量增加，不再次添加到购物车数组里
    4、用vue生命周期钩子解决，mounted的时候将footer标签获取，设置它的样式是display:none,当destory的时候在设置footer的样式为display:block</code></pre>

</body></html>