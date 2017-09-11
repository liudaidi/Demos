Vue.component('my-footer',{
    template:`<footer>
                <p class="p2">分期还款：<span>￥<b>4000.00</b>/期</span></p>
                <ol>
                    <li class="active">
                        <h4>3期</h4>
                        <p>(0手续)</p>
                    </li>
                    <li>
                        <h4>6期</h4>
                        <p>(0手续)</p>
                    </li>
                    <li>
                        <h4>9期</h4>
                        <p>(0手续)</p>
                    </li>
                    <li>
                        <h4>12期</h4>
                        <p>(0手续)</p>
                    </li>
                </ol>
                <ul>
                    <li><span>总金额:￥<b>{{total}}</b></span></li>
                    <li><button class="btn">申请分期</button></li>
                </ul>

        </footer>`,
        computed:{
            total:function (){//
                return this.$store.state.total
            }
        }
})