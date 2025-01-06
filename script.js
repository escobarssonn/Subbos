gebi=function(id) { return document.getElementById(id);};
log=console.log.bind(window.console);

web={model:{},view:{},controller:{},};
arrs='header,footer,hero,clients,about,stats,services,features,portofolio,pricing,faq,team,call,testimonial,posts,contact,single'.split(',');
for (let i in arrs){ node=arrs[i];
web.model[node]={id:node,data:[]};
web.view[node]=function(arr){out=arr.id; return out;};
web.controller[node]=cont(node);
}

function cont(node) { return function(){ arr=web.model[node]; gebi(node).innerHTML=web.view[node](arr)};}

// mulai model
//lorem=

web.model={

hero:{
id:'hero',
css:'col-1-3',
data:[{id:1,nama:'CLIENTS',isi:10,icon:'eye'},
]
},

about:{
id:'about',
css:'col-1-3',
data:[
{id:1,nama:'BASIC',icon:'facebook'},
{id:1,nama:'PRO',icon:'twitter'},
{id:1,nama:'PERFORMANCE',icon:'whatsapp'},

]
},

stats:{
id:'stats',
css:'col-1-3',
data:[
{id:1,nama:'CLIENTS',isi:10,icon:'eye'},
{id:1,nama:'PROJECTS',isi:10,icon:'camera'},
{id:1,nama:'POSITIVE FEEDBACKS',isi:10,icon:'geo'},
{id:1,nama:'WEBSITE LAUNCH',isi:10,icon:'pen'},
]
},

services:{
id:'services',
css:'col-1-3',
data:[
{id:1,nama:'BASIC',icon:'facebook'},
{id:1,nama:'PRO',icon:'twitter'},
{id:1,nama:'PERFORMANCE',icon:'whatsapp'},
{id:1,nama:'BASIC',icon:'facebook'},
{id:1,nama:'PRO',icon:'twitter'},
{id:1,nama:'PERFORMANCE',icon:'whatsapp'},]
},

features:{
id:'features',
css:'col-1-3',
data:[{id:1,img:1,nama:'BASIC',gambar:'img/figure-01.png',icon:'camera'},
{id:1,img:0,nama:'PRO',gambar:'img/figure-02.png',icon:'whatsapp'},
{id:1,img:1,nama:'PERFORMANCE',gambar:'img/figure-05.png',icon:'facebook'},
]
},


posts:{
id:'post',
css:'col-1-3',
data:[
{id:1,nama:'Lion',gambar:'img/photo-01.jpg'},
{id:1,nama:'Bear',gambar:'img/photo-02.jpg'},
{id:1,nama:'Koala',gambar:'img/photo-03.jpg'},

]
},

portofolio:{
id:'portofolio',
css:'col-1-3',
data:[{id:1,nama:'1',gambar:'img/photo-01.jpg'},
{id:2,nama:'2',gambar:'img/photo-02.jpg'},
{id:3,nama:'3',gambar:'img/photo-03.jpg'},
{id:4,nama:'4',gambar:'img/photo-04.jpg'},
{id:5,nama:'5',gambar:'img/photo-05.jpg'},
{id:6,nama:'6',gambar:'img/photo-06.jpg'},
{id:7,nama:'7',gambar:'img/photo-07.jpg'},
{id:8,nama:'8',gambar:'img/photo-08.jpg'},
]
},

pricing:{
id:'pricing',
css:'col-1-3',
data:[{id:1,nama:'BASIC',harga:'1000'},
{id:1,nama:'PRO',harga:'2000'},
{id:1,nama:'PERFORMANCE',harga:'3000'},
]
},

clients:{
id:'clients',
css:'col-1-3',
data:[
{id:1,nama:'BASIC',icon:'facebook'},
{id:1,nama:'PRO',icon:'twitter'},
{id:1,nama:'PERFORMANCE',icon:'whatsapp'},
{id:1,nama:'BASIC',icon:'facebook'},
{id:1,nama:'PRO',icon:'twitter'},
]
},

footer:{
id:'post',
css:'col-1-3',
data:[
{id:1,nama:'facebook',icon:'facebook'},
{id:1,nama:'twitter',icon:'twitter'},
{id:1,nama:'instagram',icon:'instagram'},
]
},


}


// web.model.hero.id='bca';
// web.view.hero=function(arr){ return 'out';};
// web.controller.hero();
// web.controller.header();
//
// log(web)
//
// arrs='header,footer,hero'.split(',');
// for (i in arrs){ node=arrs[i];
// log(arrs[i])
// web.controller[node]();
// // web.controller.hero();
// }


//mulai view

web.view.pricing=function(arr){
var {css,data}=web.model.pricing;
out=`<div class="row center">
<b>Pricing</b>
<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. <br> pharetra augue. Donec id elit non mi.</p>

`;
for(i in data){ val=data[i]
out+=`
<div class="col-1-3">
<div class="card">
<div class="row">
<p><b>${val.nama}</b></p>
<span class="">500<small class="align-top">GB</small></span>
<p class="">For Business</p>
</div>

<div class="title">
<ul class="">
<li>1 Domain Free</li>
<li>Unlimited Traffic</li>
<li>Full Platform Applications</li>
<li>SSL Certificate</li>
<li>Premium support</li>
</ul>
<span>Rp.${val.harga}</span>
<p>/month</p>
<a href="#" class="btn">Buy Now</a>
</div>
</div>
</div>
`;
}

out+=`</div>`
return out;};


web.view.posts=function(arr){
var {css,data}=web.model.posts;

out=`<div class="row"><div class="center">
<b>Post</b>
<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. <br> pharetra augue. Donec id elit non mi.</p>
</div>
`;
for(i in data){ val=data[i]
out+=`
<div class="${css}">
<div class="card">
<div class="img">
<a href="#"><img src="${val.gambar}" alt="${val.nama}"></a>
</div>

<div class="blog-text">
<div class="blog-tag">
<a href="#"><span><small>Web template</small></span></a>
</div>
<div class="blog-title">
<a href="#"><span>${val.nama}</span></a>
</div>

<div class="blog-meta">
<p class="col-1-2">30 May 2016 /</p>
<p class="col-1-2"><a href="">23 Comments</a></p>
</div>
<div class="blog-desc">
<p>Lorem ipsum dolor sit amet con sectetur adipiscing elit sed do eiu smod tempor incididunt ut labore et dolore magna aliqua.</p>

${val.isi}
</div>

<div class="col-1-2"><p>by W Sismadi</p></div>

<div class="col-1-2"><p>
<a href="#" aria-label="facebook"><span> ${svg.view.icon('facebook')}</span></a>
<a href="#" aria-label="twitter"><span> ${svg.view.icon('twitter')}</span></a>
</p>
</div>

</div>
</div>
</div>
`;
}
out+=`</div>`;
return out;};


web.view.stats=function(arr){
var {css,data}=web.model.stats;


out=`<div class="row">`;
for(i in data){ val=data[i]
out+=`
<div class="col-1-4 center">
${svg.view.icon(val.icon)}
<span class="number">${val.isi}</span>
<b>${val.nama}</b>
</div>

`;
}
out+=`</div>`;
return out;};


web.view.footer=function(arr){
var {css,data}=web.model.footer;

out=`<div class="row">
<div class="col-1-2">
<p class="made">made with ${svg.view.icon('bayam')} by <a href="https://bayam.id/">Rimba</a></p>
</div>
<div class="col-1-2"><p class="sosmed">`;
for(i in data){ val=data[i]
out+=`
<a href="#" aria-label="${val.icon}">${svg.view.icon(val.icon)}</a>
`;
}
out+=`</p></div></div>
`;
return out;};



web.view.about=function(arr){
var {css,data}=web.model.about;


out=`<div class="row center artikel">
<div class="center">
<b>About The easiest way <br>to build<b> websites online</b></b>
<p class="section-sub-title">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a <br> pharetra augue. Donec id elit non mi porta gravida at eget metus.</p>
</div>
`;

for(i in data){ val=data[i]
out+=`

<div class="col-1-3 ">
<div class="artikel ">

<p>${svg.view.icon(val.icon)}</p>
<b>Simple and Clean</b>
<p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
<p><a class="" href="#" >View details</a></p>
</div>
</div>
`;
}
out+=`</div>`;
return out;};

web.view.services=function(arr){
var {css,data}=web.model.services;


out=`<div class="row center">
<div class="center">
<b>Services The easiest way <br>to build<b> websites online</b></b>
<p class="section-sub-title">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a <br> pharetra augue. Donec id elit non mi porta gravida at eget metus.</p>
</div>

`;
for(i in data){ val=data[i]
out+=`

<div class="col-1-3 center">
<div class="my-4">
${svg.view.icon(val.icon)}</div>
<b>Full Support</b>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
</div>
`;
}
out+=`</div>`;
return out;};



web.view.clients=function(arr){
var {css,data}=web.model.clients;

out=`<div class="row center">
<div class="center">
<b">clients Who love to work with us</b>
</div>
`;
for(i in data){ val=data[i]
out+=`<div class="col-1-5">${svg.view.icon(val.icon)} </div>`;
}
out+=`</div>`;
return out;};



web.view.portofolio=function(arr){
var {css,data}=web.model.portofolio;

out=`<div class="row center">
<div class="center">
<b>Portofolio Our Awesome Works</b>
<p class="section-sub-title">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a <br> pharetra augue. Donec id elit non mi porta gravida at eget metus.</p>
</div>
<figure>`;
for(i in data){ val=data[i]
out+=`<img src="${val.gambar}" alt="${val.nama}" />`;
}
out+=`</figure></div>
`;
return out;};


web.view.features=function(arr){
var {css,data}=web.model.features;
out=`<div class="row center">
<div class="center">
<b> features Our Awesome Works</b>
<p class="section-sub-title">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a <br> pharetra augue. Donec id elit non mi porta gravida at eget metus.</p>
</div>`;

for(i in data){ val=data[i]
out+=`

<div class="row">
<div class="col-1-2">
<div class="center float-right artikel" >`;
if(val.img){ out+=img(); } else {out+=des();}

out+=`
</div>
</div>
<div class="col-1-2">
<div class="center float-left artikel"   >`;
if(val.img){ out+=des(); } else {out+=img();}
out+=`</div></div></div>`;
}
out+=`</div>`;
return out;};


img=function(){
return `<img class="figure" src="${val.gambar}" alt="${val.nama}"  >`;
}
des=function() {
return `<p> ${svg.view.icon(val.icon)} </p>
<b>Capture every moments and share it to all your friends</b>
<p>Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet.</p>
`
};


web.view.hero=function(arr){
var {css,data}=web.model.hero;


out=`<div class="row hero" >
<div class="row center" >
<b>Amazing Blog Title</b>
</div>`;
out+=`</div>`;
return out;};


web.view.single=function(arr){
var {css,data}=web.model.single;

data=[
{id:1,nama:'CLIENTS',isi:10,icon:'eye'},
{id:1,nama:'PROJECTS',isi:10,icon:'camera'},
{id:1,nama:'POSITIVE FEEDBACKS',isi:10,icon:'geo'},
{id:1,nama:'WEBSITE LAUNCH',isi:10,icon:'pen'},
]

out=`<div class="row col-single">
<b>Lorem ipsum dolor sit amet</b>
<img class="float-left" width="320px" src="img/photo-4.jpg" alt="">
<p>Consectetur adipisicing elit. Sint, corrupti deleniti, rem mollitia quam cum quo, animi ipsa praesentium officiis ducimus! Modi aperiam, nulla ipsum, totam natus consequuntur fugiat blanditiis.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste harum, ut magni cupiditate. Nihil ipsum debitis voluptates voluptate illum consectetur sapiente dolorem facilis, eum nobis sequi eveniet assumenda vel voluptatem!</p>
<p>Consectetur adipisicing elit. Sint, corrupti deleniti, rem mollitia quam cum quo, animi ipsa praesentium officiis ducimus! Modi aperiam, nulla ipsum, totam natus consequuntur fugiat blanditiis.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste harum, ut magni cupiditate. Nihil ipsum debitis voluptates voluptate illum consectetur sapiente dolorem facilis, eum nobis sequi eveniet assumenda vel voluptatem!</p>

`;
out+=`</div>`;
return out;};
