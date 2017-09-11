let Address={
    props:['person_name','person_num','person_address'],
    template:` <div class="address">
        <p class='address-name'><span>{{person_name}}</span><span>{{person_num}}</span></p>
        <b class='right'><i class='fa fa-fw fa-angle-right'></i></b>               
        <p class='address-info'><i class='fa fa-fw fa-map-marker'></i>{{person_address}}</p>
        <div class="progress">
            <div class="progress-bar progress-bar-warning progress-bar-striped active" style="width: 100%;">
            </div>
        </div></div>`,

    methods:{
        
    }
              
}