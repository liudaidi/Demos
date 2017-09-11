/*let pay={
	props:['pay_way','reserved_money'],
    template:` 
    	<div>
            <span>{{pay_way}}￥<b>{{reserved_money}}</b></span>
            <p>
                <label class="checkBtn">
                    <input type="checkbox">
                    <span class="track">
                        <b class="icon"></b>
                    </span>
                </label>
            </p>
        </div>`   
};*/
let pay_wrap={
	template:`
			<div class="shoping"> 
			<ol>
				<slot></slot>
			</ol>	                              
     </div>`,
	
}
